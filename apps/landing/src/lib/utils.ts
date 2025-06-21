// src/lib/utils.ts

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number, currency: string = "$"): string {
  return `${currency}${amount}`;
}
