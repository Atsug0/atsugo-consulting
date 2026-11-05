"use client";

import { MotionConfig } from "framer-motion";
import { BookingProvider } from "@/components/booking-modal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <BookingProvider>{children}</BookingProvider>
    </MotionConfig>
  );
}
