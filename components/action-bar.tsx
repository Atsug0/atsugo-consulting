"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { site, telHref } from "@/lib/site";

type Props = {
  /** Ancre du formulaire de rappel, sans le « # ». */
  target?: string;
  /** Libellé du bouton de rappel. */
  label?: string;
};

/**
 * Barre d'action collante, mobile uniquement : le visiteur a toujours un moyen
 * de joindre sous le pouce. Elle s'efface quand le formulaire visé est à
 * l'écran, pour ne pas recouvrir les champs qu'on vient d'atteindre.
 */
export function ActionBar({ target = "rappel", label = "Être rappelé" }: Props) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 420));

  useEffect(() => {
    const el = document.getElementById(target);
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      rootMargin: "-20% 0px -20% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const visible = scrolled && !formVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-black/[0.06] bg-white/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-lg lg:hidden"
        >
          <div className="flex items-center gap-2">
            {telHref && (
              <a
                href={telHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 text-[15px] font-medium text-white shadow-soft"
              >
                <PhoneCall className="h-4 w-4" strokeWidth={2} />
                Appeler
              </a>
            )}
            {site.whatsappUrl && (
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Écrire sur WhatsApp"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-mist p-3.5 text-ink"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
              </a>
            )}
            <a
              href={`#${target}`}
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-medium ${
                telHref ? "bg-mist text-ink" : "bg-black text-white shadow-soft"
              }`}
            >
              {!telHref && <PhoneCall className="h-4 w-4" strokeWidth={2} />}
              {label}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
