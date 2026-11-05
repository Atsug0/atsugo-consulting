"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Check, Clock, Loader2, RotateCcw, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useBooking } from "@/components/booking-modal";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getEstimate, needs, stages, type NeedId, type StageId } from "@/lib/estimates";

type Status = "idle" | "sending" | "sent" | "error";

const stepTitles = ["Votre besoin", "Stade du projet", "Estimation & contact"];

export function Simulator() {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<NeedId | null>(null);
  const [stage, setStage] = useState<StageId | null>(null);

  const reset = () => {
    setStep(0);
    setNeed(null);
    setStage(null);
  };

  return (
    <section id="simulateur" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Simulateur de Projet"
          title="Estimez votre projet en 30 secondes."
          description="Trois questions pour obtenir un ordre de grandeur, puis échangeons directement."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="card bg-mist/60 p-2 shadow-soft">
            <div className="rounded-[20px] bg-white p-6 sm:p-10">
              <Stepper step={step} />

              <div className="mt-8 min-h-[340px]">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <StepPane key="s0">
                      <OptionGrid
                        options={needs}
                        value={need}
                        onSelect={(id) => {
                          setNeed(id);
                          setStep(1);
                        }}
                      />
                    </StepPane>
                  )}
                  {step === 1 && (
                    <StepPane key="s1">
                      <OptionGrid
                        options={stages}
                        value={stage}
                        onSelect={(id) => {
                          setStage(id);
                          setStep(2);
                        }}
                      />
                      <BackButton onClick={() => setStep(0)} />
                    </StepPane>
                  )}
                  {step === 2 && need && stage && (
                    <StepPane key="s2">
                      <Result need={need} stage={stage} onBack={() => setStep(1)} onReset={reset} />
                    </StepPane>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stepper({ step }: { step: number }) {
  return (
    <ol className="flex items-center gap-2">
      {stepTitles.map((t, i) => {
        const done = i < step;
        const current = i === step;
        return (
          <li key={t} className="flex flex-1 items-center gap-2">
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                done ? "bg-accent text-white" : current ? "bg-ink text-white" : "bg-mist text-muted"
              }`}
            >
              {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
            </span>
            <span className={`hidden text-sm font-medium sm:block ${current ? "text-ink" : "text-muted"}`}>
              {t}
            </span>
            {i < stepTitles.length - 1 && (
              <span className="relative mx-1 h-px flex-1 overflow-hidden bg-black/[0.08]">
                <motion.span
                  className="absolute inset-0 origin-left bg-accent"
                  initial={false}
                  animate={{ scaleX: done ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function StepPane({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function OptionGrid<T extends string>({
  options,
  value,
  onSelect,
}: {
  options: { id: T; label: string; description: string }[];
  value: T | null;
  onSelect: (id: T) => void;
}) {
  return (
    <div className="grid gap-3">
      {options.map((o) => {
        const selected = o.id === value;
        return (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${
              selected ? "border-accent bg-accent/[0.04]" : "border-black/[0.08] bg-white hover:border-black/20"
            }`}
          >
            <span>
              <span className="block text-lg font-semibold text-ink">{o.label}</span>
              <span className="mt-0.5 block text-[15px] text-muted">{o.description}</span>
            </span>
            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-colors ${
                selected ? "border-accent bg-accent text-white" : "border-black/15 group-hover:border-ink"
              }`}
            >
              {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
    >
      <ArrowLeft className="h-4 w-4" /> Retour
    </button>
  );
}

function Result({
  need,
  stage,
  onBack,
  onReset,
}: {
  need: NeedId;
  stage: StageId;
  onBack: () => void;
  onReset: () => void;
}) {
  const { open } = useBooking();
  const estimate = getEstimate(need, stage);
  const needLabel = needs.find((n) => n.id === need)!.label;
  const stageLabel = stages.find((s) => s.id === stage)!.label;

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, need: needLabel, stage: stageLabel, estimate: estimate.duration }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Une erreur est survenue.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  return (
    <div>
      <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/60">
          <span className="rounded-full bg-white/10 px-2.5 py-1">{needLabel}</span>
          <span className="rounded-full bg-white/10 px-2.5 py-1">{stageLabel}</span>
        </div>
        <p className="mt-5 text-sm text-white/60">{estimate.headline}</p>
        <p className="mt-1 flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Clock className="h-7 w-7 text-[#7FB2FF]" strokeWidth={1.75} />
          {estimate.duration}
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-3">
          {estimate.phases.map((p, i) => (
            <li key={p} className="rounded-xl bg-white/[0.06] p-3 text-sm text-white/85">
              <span className="block text-[11px] font-semibold text-white/40">ÉTAPE {i + 1}</span>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-white/40">
          Estimation indicative, affinée lors de notre premier échange.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl bg-emerald-500/[0.08] p-6 text-center"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white">
              <Check className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <p className="mt-4 text-lg font-semibold">Merci, votre demande est bien partie.</p>
            <p className="mt-1 text-muted">Je reviens vers vous sous 24 h ouvrées.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} className="mt-6 grid gap-3" initial={false}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="sim-name">Nom</label>
              <input id="sim-name" name="name" required placeholder="Nom & prénom" className="field" autoComplete="name" />
              <label className="sr-only" htmlFor="sim-email">E-mail</label>
              <input
                id="sim-email"
                name="email"
                type="email"
                required
                placeholder="E-mail professionnel"
                className="field"
                autoComplete="email"
              />
            </div>
            <label className="sr-only" htmlFor="sim-company">Entreprise</label>
            <input id="sim-company" name="company" placeholder="Entreprise (optionnel)" className="field" autoComplete="organization" />
            <label className="sr-only" htmlFor="sim-message">Message</label>
            <textarea
              id="sim-message"
              name="message"
              rows={4}
              placeholder="Décrivez votre projet en quelques lignes…"
              className="field resize-none"
            />
            {/* Champ piège anti-spam, invisible pour les humains */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" disabled={status === "sending"} className="sm:flex-1">
                {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Envoyer ma demande
              </Button>
              <Button type="button" size="lg" variant="secondary" onClick={open} className="sm:flex-1">
                <CalendarDays className="h-4 w-4" />
                Réserver un créneau
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-between">
        <BackButton onClick={onBack} />
        <button
          onClick={onReset}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
        >
          <RotateCcw className="h-4 w-4" /> Recommencer
        </button>
      </div>
    </div>
  );
}
