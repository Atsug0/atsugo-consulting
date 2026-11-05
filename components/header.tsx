"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-black/[0.06] bg-white/80 backdrop-blur-lg backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="/" aria-label="Atsugo Consulting — accueil" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="rounded-full px-4 py-2 text-sm text-ink/70 transition hover:bg-black/[0.04] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#simulateur" size="md">
            Échanger sur mon projet
          </Button>
        </div>

        <button
          className="-mr-2 rounded-full p-2 text-ink md:hidden"
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
            className="overflow-hidden md:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-6 pt-2">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-3 py-3 text-lg font-medium text-ink transition hover:bg-mist"
                >
                  {item.label}
                </a>
              ))}
              <Button href="/#simulateur" size="lg" className="mt-3" onClick={() => setMobileOpen(false)}>
                Échanger sur mon projet
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
