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
        "group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border px-4 py-2.5 text-[13px] font-semibold tracking-normal transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan",
        "before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:skew-x-[-24deg] before:bg-white/30 before:opacity-0 before:transition before:duration-500 hover:before:left-[120%] hover:before:opacity-100",
        variant === "primary"
          ? "border-cyber-cyan bg-cyber-cyan text-black shadow-[0_0_32px_rgba(0,217,255,0.28)] hover:-translate-y-1 hover:shadow-[0_0_52px_rgba(0,217,255,0.42)]"
          : "border-cyber-violet/55 bg-black/30 text-cyber-violet hover:-translate-y-1 hover:border-cyber-cyan hover:text-cyber-cyan",
        className,
      )}
      {...props}
    />
  );
}
