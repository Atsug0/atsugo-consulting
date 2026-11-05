import { Reveal } from "@/components/ui/reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <Reveal className={`max-w-3xl ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tightest text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">{description}</p>
      )}
    </Reveal>
  );
}
