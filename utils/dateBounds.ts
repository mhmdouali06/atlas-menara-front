const esMonthToIndex: Record<string, number> = {
  enero: 1,
  febrero: 2,
  marzo: 3,
  abril: 4,
  mayo: 5,
  junio: 6,
  julio: 7,
  agosto: 8,
  septiembre: 9,
  octubre: 10,
  noviembre: 11,
  diciembre: 12,
};

const isoZ = (d: Date) => d.toISOString().replace(".000Z", "Z");

/** Build DateFilter params for startsAt by spanish month in the current year */
export function startDateFilter(monthEs?: string): Record<string, string> {
  if (!monthEs) return {};
  const m = esMonthToIndex[monthEs.toLowerCase()];
  if (!m) return {};
  const y = new Date().getFullYear();
  const start = new Date(Date.UTC(y, m - 1, 1, 0, 0, 0));
  const end = new Date(Date.UTC(y, m, 0, 23, 59, 59)); // last day of month
  return {
    "startsAt[after]": isoZ(start),
    "startsAt[before]": isoZ(end),
  };
}

/** Turn a plain object into a properly encoded query string */
export function toQueryString(params: Record<string, any> = {}) {
  const q = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    q.append(k, String(v));
  });
  return q.toString();
}
