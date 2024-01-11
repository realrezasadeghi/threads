import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function className(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
