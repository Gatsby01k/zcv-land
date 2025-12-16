// components/sections/CalculatorSection.tsx
"use client";

import { useState, useMemo, useEffect } from "react";

const ZEC_ADDRESS =
  "u14rahgadre4e8s2t4jxnmn2rjtdk7zvvzwykkcxp79e3ymmgmgckzv6n8awsy0xx7prkrxclkqk2vldjvvppafemhr4r0z8ddxf4a0fx9jdtjeyxj69ewh2jg9erez45npdnxx568gg2v420w8zynukvqdl0gj98wevza9j9kfqh2lwy3";

function generateMemo() {
  return "ZCV-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function parseNumber(value: string): number {
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

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
    n.toLocaleString("en-US", { maximumFractionDigits: 2 });

  /* ---------- deposit ---------- */
  const [memo] = useState(generateMemo);
  const [status, setStatus] = useState<
    "waiting" | "pending" | "confirmed"
  >("waiting");
  const [confirmations, setConfirmations] = useState(0);
  const [received, setReceived] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(`/api/deposit/status?memo=${memo}`);
      const data = await res.json();

      if (data.status) {
        setStatus(data.status);
        setConfirmations(data.confirmations ?? 0);
        setReceived(data.amount ?? null);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [memo]);

  return (
    <section className="reveal border-b border-white/5 bg-zv-bg-soft/60 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        {/* ---------- header ---------- */}
        <header className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Illustrative compounding
          </p>
          <h2 className="text-balance text-2xl font-semibold text-zv-text sm:text-3xl">
            Explore how bonus exposure can affect long-term outcomes.
          </h2>
          <p className="text-sm leading-relaxed text-zv-muted">
            Calculator below is illustrative. Deposits, if made, are real ZEC
            transfers to a shielded address.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* ---------- calculator inputs ---------- */}
          <div className="space-y-4 rounded-3xl border border-white/10 bg-zv-bg-card/80 p-4 sm:p-5">
            {/* inputs unchanged */}
            {/* ... (оставлены без изменений) */}
            {/* ↓↓↓ */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 text-xs">
                <label className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zv-muted">
                  Initial ZEC position
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zv-bg px-3 py-2">
                  <span className="text-[0.7rem] text-zv-muted">ZEC</span>
                  <input
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-zv-text outline-none"
                    inputMode="decimal"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zv-muted">
                  Horizon
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zv-bg px-3 py-2">
                  <input
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-zv-text outline-none"
                    inputMode="decimal"
                  />
                  <span className="text-[0.7rem] text-zv-muted">years</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 text-xs">
                <label className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zv-muted">
                  Baseline annual profile
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zv-bg px-3 py-2">
                  <input
                    value={baseline}
                    onChange={(e) => setBaseline(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-zv-text outline-none"
                    inputMode="decimal"
                  />
                  <span className="text-[0.7rem] text-zv-muted">% / year</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zv-muted">
                  Illustrative bonus
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-zv-gold/40 bg-zv-bg px-3 py-2">
                  <input
                    value={bonus}
                    onChange={(e) => setBonus(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-zv-text outline-none"
                    inputMode="decimal"
                  />
                  <span className="text-[0.7rem] text-zv-gold">% / year</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- results + deposit ---------- */}
          <div className="space-y-4">
            {/* results (как было) */}
            <div className="rounded-3xl border border-white/10 bg-zv-bg-card/90 p-4 sm:p-5 text-xs">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Baseline</span>
                  <span>≈ {fmt(result.baseValue)} ZEC</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span>Baseline + bonus</span>
                  <span className="text-zv-gold">
                    ≈ {fmt(result.bonusValue)} ZEC
                  </span>
                </div>
                <div className="flex justify-between border-t border-zv-gold/25 pt-3 font-semibold text-zv-gold">
                  <span>Difference</span>
                  <span>≈ {fmt(result.diff)} ZEC</span>
                </div>
              </div>
            </div>

            {/* ---------- REAL DEPOSIT ---------- */}
            <div className="rounded-3xl border border-zv-gold/40 bg-zv-bg-card/90 p-4 sm:p-5 text-xs space-y-3">
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-zv-muted">
                Private ZEC deposit
              </div>

              <div>
                <div className="text-[0.7rem] text-zv-muted">
                  Shielded address
                </div>
                <code className="break-all text-zv-text">
                  {ZEC_ADDRESS}
                </code>
              </div>

              <div>
                <div className="text-[0.7rem] text-zv-muted">
                  Memo (required)
                </div>
                <code className="text-zv-gold">{memo}</code>
              </div>

              <div>
                <strong>Status:</strong>{" "}
                {status === "waiting" && "Waiting for deposit"}
                {status === "pending" &&
                  `Pending (${confirmations}/10 confirmations)`}
                {status === "confirmed" && "Confirmed ✅"}
              </div>

              {received !== null && (
                <div>
                  Received: <strong>{received} ZEC</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
