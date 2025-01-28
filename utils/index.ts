export function cn(...args: (string | boolean | undefined ) []) {
  return args
    .flat(Infinity)
    .filter(Boolean)
    .join(" ");
}