// Approximate Hijri year for a Gregorian year: H ≈ (G - 622) × 1.0307
export function hijriYear(y) {
  const g = parseInt(String(y).match(/\d{3,4}/)?.[0] || '', 10);
  if (!g || g < 623 || g > 2100) return null;
  return Math.round((g - 622) * 1.0307);
}

const AR = '٠١٢٣٤٥٦٧٨٩';
export function toAr(n) {
  return String(n).replace(/\d/g, (d) => AR[+d]);
}

// "1165" -> "١١٦٥م ≈ ٥٦٠هـ" ; null hijri -> "١١٦٥م"
export function yearLabel(y) {
  if (!y) return '';
  const h = hijriYear(y);
  const g = String(y).match(/\d{3,4}/)?.[0] || y;
  return toAr(g) + 'م' + (h ? ' ≈ ' + toAr(h) + 'هـ' : '');
}
