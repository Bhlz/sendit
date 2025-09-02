// lib/env.ts
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "http://localhost:3000";

const _perf = (process.env.NEXT_PUBLIC_LIGHT_PERF ?? "").toLowerCase();
export const LIGHT_PERF =
  _perf === "1" || _perf === "true" || _perf === "yes";
