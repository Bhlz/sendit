// Simple deterministic code generator: "name-xxxx" or random fallback.
export function genRefCode(name?: string, email?: string) {
  const base = (name || email || '').toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,10);
  const rand = Math.random().toString(36).slice(2,6);
  return base ? `${base}-${rand}` : `u-${rand}`;
}
