export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-[9px] bg-ink text-[13px] font-bold text-white"
      >
        A
      </span>
      <span className="text-[17px] font-bold tracking-tight text-ink">
        Atsugo<span className="font-medium text-muted"> Consulting</span>
      </span>
    </span>
  );
}
