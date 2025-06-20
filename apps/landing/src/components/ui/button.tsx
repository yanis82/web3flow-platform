"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "px-3 py-1 text-sm",
        lg: "px-6 py-3 text-lg",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
        secondary: "bg-background border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: ReactNode;
}

export const Button = ({
  className,
  size,
  variant,
  children,
  ...props
}: ButtonProps) => (
<button className={buttonStyles({ size, variant, className })} {...props}>
    {children}
  </button>
);
