"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { AudienceList, AudienceMenu } from "@/components/audience-menu";
import { navByAudience, type AudienceId } from "@/lib/site";

type Props = {
  /** Détermine la navigation, le CTA et le public sélectionné. */
  variant?: AudienceId;
};

export function Header({ variant = "pro" }: Props) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  const solid = scrolled || mobileOpen;

  const { nav, ctaLabel, ctaHref } = navByAudience[variant];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-black/[0.06] bg-white/80 backdrop-blur-lg backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Atsugo Consulting — accueil" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-ink/70 transition hover:bg-black/[0.04] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AudienceMenu current={variant} />
          <Button href={ctaHref} size="md" className="whitespace-nowrap">
            {ctaLabel}
          </Button>
        </div>

        <button
          className="-mr-2 rounded-full p-2 text-ink lg:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Navigation mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-6 pt-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-3 py-3 text-lg font-medium text-ink transition hover:bg-mist"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4 border-t border-black/[0.06] pt-4">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  Vous êtes…
                </p>
                <AudienceList current={variant} onNavigate={() => setMobileOpen(false)} />
              </div>

              <Button href={ctaHref} size="lg" className="mt-3" onClick={() => setMobileOpen(false)}>
                {ctaLabel}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
