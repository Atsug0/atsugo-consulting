export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[17px] font-bold tracking-tight text-ink ${className}`}>
      Atsugo<span className="font-medium text-muted"> Consulting</span>
    </span>
  );
}
