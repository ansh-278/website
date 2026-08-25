const FIELD_ABBREVIATION: Record<string, string> = {
  Physics: "PHY",
  Mathematics: "MATH",
  Computation: "COMP",
  Research: "RES",
  Other: "OTH",
};

interface Codeable {
  id: string;
  category: string;
  date: string;
}

/**
 * Derives SRL·YYYY·FIELD·NNN for every entry in a collection.
 * NNN is a running count within the same year + field, ordered by date —
 * so codes stay systematic without ever being typed by hand (Phase 7).
 */
export function computeReferenceCodes<T extends Codeable>(
  entries: T[]
): Record<string, string> {
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const counters: Record<string, number> = {};
  const codes: Record<string, string> = {};

  for (const entry of sorted) {
    const year = entry.date.slice(0, 4);
    const field = FIELD_ABBREVIATION[entry.category] ?? "OTH";
    const key = `${year}-${field}`;
    counters[key] = (counters[key] ?? 0) + 1;
    const sequence = String(counters[key]).padStart(3, "0");
    codes[entry.id] = `SRL·${year}·${field}·${sequence}`;
  }

  return codes;
}
