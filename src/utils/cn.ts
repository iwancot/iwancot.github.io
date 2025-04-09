import { twMerge } from "tailwind-merge";

type ClassValue =
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined
  | ClassValue[]
  | Record<string, any>;

const toClassName = (value: ClassValue): string => {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(toClassName).filter(Boolean).join(" ");
  }
  if (typeof value === "object" && value !== null) {
    return Object.keys(value)
      .filter((key) => value[key])
      .join(" ");
  }
  return "";
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(inputs.map(toClassName).filter(Boolean).join(" "));
}