export function abbr(num: number): string {
  const symbols = ["", "K", "M", "B", "T"];
  const tier = Math.floor(Math.log10(num) / 3);

  if (tier === 0) return num.toString();

  const suffix = symbols[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;

  return scaled.toFixed(1).replace(/\.0$/, "") + suffix;
}
