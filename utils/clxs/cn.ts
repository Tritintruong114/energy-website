import { clsx, type ClassValue } from "clsx";

function cn(...args: ClassValue[]) {
  return clsx(args) ? clsx(args) : "";
}
export default cn;
