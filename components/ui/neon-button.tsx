import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type NeonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "ghost";
};

export function NeonButton({
  asChild,
  className,
  variant = "primary",
  ...props
}: NeonButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-none border px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green",
        "before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:skew-x-[-24deg] before:bg-white/30 before:opacity-0 before:transition before:duration-500 hover:before:left-[120%] hover:before:opacity-100",
        variant === "primary"
          ? "border-cyber-green bg-cyber-green text-black shadow-[0_0_32px_rgba(57,255,20,0.28)] hover:-translate-y-1 hover:shadow-[0_0_52px_rgba(57,255,20,0.45)]"
          : "border-cyber-cyan/50 bg-black/30 text-cyber-cyan hover:-translate-y-1 hover:border-cyber-green hover:text-cyber-green",
        className,
      )}
      {...props}
    />
  );
}
