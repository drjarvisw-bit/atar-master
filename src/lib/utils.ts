/**
 * Format estimated time in minutes to a human-readable string.
 * < 60 min: "~X min"
 * >= 60 min: "~X hr Y min" or "~X hrs"
 */
export function formatEstimatedTime(minutes: number): string {
  const rounded = Math.round(minutes);
  if (rounded < 60) return `~${rounded} min`;
  const hrs = Math.floor(rounded / 60);
  const mins = rounded % 60;
  if (mins === 0) return hrs === 1 ? '~1 hr' : `~${hrs} hrs`;
  return hrs === 1 ? `~1 hr ${mins} min` : `~${hrs} hrs ${mins} min`;
}
