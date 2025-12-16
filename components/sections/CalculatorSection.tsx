// components/sections/CalculatorSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/* ================== CONSTANTS ================== */

const ZEC_ADDRESS =
  "u14rahgadre4e8s2t4jxnmn2rjtdk7zvvzwykkcxp79e3ymmgmgckzv6n8awsy0xx7prkrxclkqk2vldjvvppafemhr4r0z8ddxf4a0fx9jdtjeyxj69ewh2jg9erez45npdnxx568gg2v420w8zynukvqdl0gj98wevza9j9kfqh2lwy3";

const REQUIRED_CONFIRMATIONS = 10;

/* ================== HELPERS ================== */

function parseNumber(value: string): number {
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function generateMemo() {
  return "ZCV-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function copy(text: string, setCopied: (v: boolean) => void) {
  navigator.clipboard.writeText(text).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  });
}

/* ================== COMPONENT ================== */

export default function CalculatorSection() {
  /* ---------- calculator ---------- */
  const [principal, setPrincipal] = useState("1000");
  const [years, setYears] = useState("3");
  const [baseline, setBaseline] = useState("12");
  const [bonus, setBonus] = useState("25");

  const result = useMemo(() => {
    const P = parseNumber(principal);
    const t = parseNumber(years);
    const rBase = parseNumber(baseline) / 100;
    const rBonus = parseNumber(bonus) / 100;

    const baseValue = P * Math.pow(1 + rBase, t);
    const bonusValue = P * Math.pow(1 + rBase + rBonus, t);

    return {
      baseValue,
      bonusValue,
      diff: bonusValue - baseValue,
    };
  }, [principal, years, baseline, bonus]);

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  /* ---------- deposit ---------- */
  const [memo] = useState(generateMemo);
  const [status, setStatus] = useState<"waiting" | "pending" | "confirmed">(
    "waiting"
  );
  const [confirmations, setConfirmations] = useState(0);
  const [received, setReceived] = useState<number | null>(null);

  const [addrCopied, setAddrCopied] = useState(false);
  const [memoCopied, setMemoCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/deposit/status?memo=${memo}`);
        const data = await res.json();

        if (data?.status) {
          setStatus(data.status);
          setConfirmations(data.confirmations ?? 0);
          setReceived(data.amount ?? null);
        }
      } catch {}
    }, 15000);

    return () => clearInterval(interval);
  }, [memo]);

  /* ================== RENDER ================== */

  return (
    <section className="reveal border-t border-white/5 py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-20 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
            Illustration
          </p>
          <h2 className="text-balance">
            Illustrative compounding with optional bonus exposure
          </h2>
          <p className="text-zv-text">
            This example illustrates potential outcomes under simplified
            assumptions. It is not a forecast and does not represent guaranteed
            results.
          </p>
        </header>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-8">
            <Field label="Illustrative principal (ZEC)">
              <input
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="field"
              />
            </Field>

            <Field label="Time horizon (years)">
              <input
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="field"
              />
            </Field>

            <Field label="Baseline annual growth (%)">
              <input
                value={baseline}
                onChange={(e) => setBaseline(e.target.value)}
                className="field"
              />
            </Field>

            <Field label="Illustrative bonus (%)">
              <input
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
                className="field border-zv-gold/40"
              />
            </Field>
          </div>

          {/* Results */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <div className="space-y-10">
              <div>
                <p className="text-sm uppercase tracking-wide text-zv-muted">
                  Baseline outcome
                </p>
                <div className="mt-2 text-4xl font-semibold">
                  {fmt(result.baseValue)} ZEC
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-zv-muted">
                  With illustrative bonus
                </p>
                <div className="mt-2 text-4xl font-semibold text-zv-gold">
                  {fmt(result.bonusValue)} ZEC
                </div>
              </div>

              <p className="text-sm leading-relaxed text-zv-muted">
                Difference: ≈ {fmt(result.diff)} ZEC
              </p>
            </div>
          </div>
        </div>

        {/* Optional deposit */}
        <div className="mt-20 max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-zv-muted">
            Optional: private ZEC deposit
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 space-y-6">
            {/* Address */}
            <Row
              label="Shielded deposit address"
              value={ZEC_ADDRESS}
              mono
              copied={addrCopied}
              onCopy={() => copy(ZEC_ADDRESS, setAddrCopied)}
            />

            {/* Memo */}
            <Row
              label="Memo (required)"
              value={memo}
              mono
              accent
              copied={memoCopied}
              onCopy={() => copy(memo, setMemoCopied)}
            />

            {/* Status */}
            <div className="flex justify-between text-sm">
              <span className="text-zv-muted">Status</span>
              <span>
                {status === "waiting" && "Waiting for deposit"}
                {status === "pending" &&
                  `Pending (${confirmations}/${REQUIRED_CONFIRMATIONS})`}
                {status === "confirmed" && (
                  <span className="text-zv-gold">Confirmed ✓</span>
                )}
              </span>
            </div>

            {received !== null && (
              <p className="text-sm text-zv-muted">
                Received:{" "}
                <span className="text-zv-text">{received} ZEC</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== UI HELPERS ================== */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm text-zv-muted">{label}</span>
      {children}
    </label>
  );
}

function Row({
  label,
  value,
  onCopy,
  copied,
  mono,
  accent,
}: {
  label: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
  mono?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-zv-muted">
        <span>{label}</span>
        <button
          onClick={onCopy}
          className="text-xs hover:text-zv-gold transition"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div
        className={`rounded-xl border px-4 py-3 text-sm break-all ${
          mono ? "font-mono" : ""
        } ${
          accent
            ? "border-zv-gold/40 text-zv-gold"
            : "border-white/10 text-zv-text"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
