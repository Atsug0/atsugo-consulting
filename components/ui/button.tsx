import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary: "bg-black text-white shadow-soft hover:bg-black/85 hover:shadow-lift",
  secondary: "bg-mist text-ink hover:bg-black/[0.07]",
  ghost: "text-accent hover:bg-accent/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

type Common = { variant?: Variant; size?: Size; className?: string };

type ButtonAsButton = Common & ComponentPropsWithoutRef<"button"> & { href?: undefined };
type ButtonAsLink = Common & ComponentPropsWithoutRef<"a"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (typeof rest.href === "string") {
    const { href, ...anchor } = rest as ButtonAsLink;
    return <Link href={href} className={cls} {...anchor} />;
  }
  const { type = "button", ...button } = rest as ButtonAsButton;
  return <button type={type} className={cls} {...button} />;
}
