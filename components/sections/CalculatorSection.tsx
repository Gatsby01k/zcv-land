// components/sections/CalculatorSection.tsx
"use client";

import { useState, useMemo } from "react";

function parseNumber(value: string): number {
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export default function CalculatorSection() {
  const [principal, setPrincipal] = useState("1000");
  const [years, setYears] = useState("3");
  const [baseline, setBaseline] = useState("12"); // %
  const [bonus, setBonus] = useState("25"); // %

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
    n.toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });

  return (
    <section className="reveal border-b border-white/5 bg-zv-bg-soft/60 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <header className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Illustrative compounding
          </p>
          <h2 className="text-balance text-2xl font-semibold text-zv-text sm:text-3xl">
            Explore how bonus exposure can affect long-term outcomes.
          </h2>
          <p className="text-sm leading-relaxed text-zv-muted">
            This simple, non-binding calculator shows how an illustrative bonus
            on top of a baseline return profile can change the outcome over
            time. It does not reflect actual or promised performance.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Inputs */}
          <div className="space-y-4 rounded-3xl border border-white/10 bg-zv-bg-card/80 p-4 sm:p-5">
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

            <p className="text-[0.7rem] leading-relaxed text-zv-muted">
              All values are purely illustrative and ignore taxes, fees,
              slippage, volatility and many real-world factors. This is not a
              forecast or a promise of returns.
            </p>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-zv-bg-card/90 p-4 sm:p-5 text-xs">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-zv-muted">
                  Illustrative end values
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <div className="text-[0.7rem] text-zv-muted">
                      Baseline profile
                    </div>
                    <div className="mt-0.5 text-[0.7rem] text-zv-muted/80">
                      No additional bonus exposure
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-zv-text">
                      ≈ {fmt(result.baseValue)} ZEC
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline justify-between gap-3 border-t border-white/8 pt-3">
                  <div>
                    <div className="text-[0.7rem] text-zv-muted">
                      Baseline + illustrative bonus
                    </div>
                    <div className="mt-0.5 text-[0.7rem] text-zv-gold">
                      Assumes bonus is fully effective over the same horizon
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-zv-text">
                      ≈ {fmt(result.bonusValue)} ZEC
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-zv-gold/25 pt-3">
                  <div className="text-[0.7rem] text-zv-muted">
                    Difference vs baseline
                  </div>
                  <div className="text-xs font-semibold text-zv-gold">
                    ≈ {fmt(result.diff)} ZEC
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[0.7rem] leading-relaxed text-zv-muted">
              This calculator is for conceptual illustration only. It does not
              reflect actual structures, strategies or realised performance.
              Participation, if any, is governed by formal documentation only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
