// src/lib/utils.ts

export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatPrice(amount: number, currency: string = "$"): string {
  return `${currency}${amount}`;
}
