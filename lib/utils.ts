import clsx from "clsx";
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const isActive = true;
const buttonClass: ClassValue = clsx(
  'btn',
  isActive && 'btn-active',
  'btn-large'
);

console.log(buttonClass);