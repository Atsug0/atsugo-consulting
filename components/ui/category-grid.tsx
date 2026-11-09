"use client";

import { motion } from "framer-motion";
import { Laptop, type LucideIcon } from "lucide-react";

export type Category = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  from: string;
};

/** Grille de catégories de prestations, partagée par /domicile et /tpe. */
export function CategoryGrid({
  categories,
  icons,
}: {
  categories: Category[];
  icons: Record<string, LucideIcon>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((c, i) => {
        const Icon = icons[c.id] ?? Laptop;
        return (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card flex flex-col p-7 transition-shadow duration-500 hover:shadow-soft"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-ink">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>

            <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.intro}</p>

            <ul className="mt-5 space-y-2">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/85">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-auto pt-6 text-sm font-semibold text-accent">{c.from}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
