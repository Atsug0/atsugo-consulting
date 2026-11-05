"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Database, Globe, Layers, Server, Smartphone } from "lucide-react";
import { useState, type PointerEvent } from "react";

type NodeId = "web" | "mobile" | "gateway" | "services" | "data";

const nodes: Record<NodeId, { x: number; y: number; label: string; meta: string; Icon: typeof Globe }> = {
  web: { x: 70, y: 70, label: "Web App", meta: "Next.js · SSR/Edge", Icon: Globe },
  mobile: { x: 70, y: 230, label: "Mobile", meta: "iOS · Android", Icon: Smartphone },
  gateway: { x: 250, y: 150, label: "API Gateway", meta: "Auth · Rate limit", Icon: Layers },
  services: { x: 430, y: 70, label: "Services", meta: "Modules métier", Icon: Server },
  data: { x: 430, y: 230, label: "Data", meta: "Postgres · Cache", Icon: Database },
};

const edges: [NodeId, NodeId][] = [
  ["web", "gateway"],
  ["mobile", "gateway"],
  ["gateway", "services"],
  ["gateway", "data"],
  ["services", "data"],
];

export function HeroVisual() {
  const [active, setActive] = useState<NodeId>("gateway");

  // Inclinaison 3D douce qui suit le pointeur
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  const isLinked = (a: NodeId, b: NodeId) => a === active || b === active;

  return (
    <div className="[perspective:1400px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass relative overflow-hidden rounded-[28px] p-3 shadow-lift sm:p-4"
      >
        {/* Barre de fenêtre */}
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-black/10" />
            <span className="h-3 w-3 rounded-full bg-black/10" />
            <span className="h-3 w-3 rounded-full bg-black/10" />
          </div>
          <span className="text-xs font-medium text-muted">architecture.atsugo</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
            <Activity className="h-3 w-3" /> Opérationnel
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
          {/* Diagramme */}
          <div className="relative rounded-2xl bg-white p-2 sm:p-4">
            <svg viewBox="0 0 500 300" className="h-auto w-full" role="img" aria-label="Schéma d'architecture interactif">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.06)" />
                </pattern>
              </defs>
              <rect width="500" height="300" fill="url(#grid)" />
              {edges.map(([a, b]) => {
                const on = isLinked(a, b);
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={nodes[a].x}
                    y1={nodes[a].y}
                    x2={nodes[b].x}
                    y2={nodes[b].y}
                    stroke={on ? "#0066CC" : "rgba(0,0,0,0.12)"}
                    strokeWidth={on ? 2 : 1.5}
                    strokeDasharray="6 6"
                    className={on ? "animate-dash" : ""}
                    style={{ transition: "stroke 300ms" }}
                  />
                );
              })}
              {(Object.keys(nodes) as NodeId[]).map((id) => {
                const n = nodes[id];
                const on = id === active;
                return (
                  <g
                    key={id}
                    transform={`translate(${n.x - 52} ${n.y - 22})`}
                    onPointerEnter={() => setActive(id)}
                    onFocus={() => setActive(id)}
                    onClick={() => setActive(id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${n.label} : ${n.meta}`}
                    className="cursor-pointer outline-none"
                  >
                    <rect
                      width="104"
                      height="44"
                      rx="14"
                      fill={on ? "#1D1D1F" : "#FFFFFF"}
                      stroke={on ? "#1D1D1F" : "rgba(0,0,0,0.10)"}
                      style={{ transition: "fill 300ms, stroke 300ms" }}
                    />
                    <text
                      x="52"
                      y="27"
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight={600}
                      fill={on ? "#FFFFFF" : "#1D1D1F"}
                      style={{ transition: "fill 300ms" }}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Panneau latéral */}
          <div className="flex flex-col gap-3 text-left">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl bg-white p-4"
            >
              {(() => {
                const { Icon, label, meta } = nodes[active];
                return (
                  <>
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-sm font-semibold text-ink">{label}</p>
                    <p className="text-xs text-muted">{meta}</p>
                  </>
                );
              })()}
            </motion.div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              <Metric label="Latence p95" value="84 ms" />
              <Metric label="Disponibilité" value="99,98 %" />
            </div>
            <pre className="hidden overflow-hidden rounded-2xl bg-ink p-4 font-mono text-[11px] leading-relaxed text-white/80 md:block">
              <span className="text-[#7FB2FF]">export</span> const deploy = {"{"}
              {"\n"}  env: <span className="text-[#A5E3B5]">&quot;production&quot;</span>,
              {"\n"}  scale: <span className="text-[#F7C97E]">&quot;auto&quot;</span>,
              {"\n"}  debt: <span className="text-[#F7C97E]">0</span>,
              {"\n"}{"}"};
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 text-xl font-semibold tracking-tight text-ink">{value}</p>
    </div>
  );
}
