// components/sections/CalculatorSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/* ================== CONSTANTS ================== */

const ZEC_ADDRESS =
  "u1myg6r23865zy2jmv3xkpn9c62z0dx5arzdhpsdw78wv05zm4agvhs40juj303g4y92prvhf0f5qp0ahh4g2l0mpfhw725ulp6zvtapja6lzjj48rv8sykr53t2yyr3y5z50cszqstf2l6587fjtfrwrxwurslak359eff3kwdcxkmauw";

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
        {/* HEADER */}
        <header className="mb-20 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
            Illustration
          </p>
          <h2 className="text-balance">
            See how early alignment can compound over time
          </h2>
          <p className="text-zv-text">
            Enter an illustrative ZEC amount to explore how structured exposure
            and incentives may affect long-term outcomes.
          </p>
        </header>

        {/* ================== CALCULATOR ================== */}
        <div className="grid gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* HERO INPUT */}
            <div className="rounded-3xl border border-zv-gold/40 bg-zv-bg-card/90 p-10">
              <label className="block space-y-4">
                <span className="text-xs uppercase tracking-[0.28em] text-zv-muted">
                  Illustrative ZEC amount
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-2xl text-zv-muted">ZEC</span>
                  <input
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="1000"
                    className="w-full bg-transparent text-4xl font-semibold text-zv-text outline-none placeholder:text-zv-muted/40"
                  />
                </div>

                <p className="text-sm text-zv-muted">
                  This sets the base for the illustration.
                </p>
              </label>
            </div>

            {/* ASSUMPTIONS */}
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <Assumption
                label="Time horizon"
                suffix="years"
                value={years}
                onChange={setYears}
              />
              <Assumption
                label="Baseline profile"
                suffix="% / year"
                value={baseline}
                onChange={setBaseline}
              />
              <Assumption
                label="Illustrative bonus"
                suffix="% / year"
                value={bonus}
                onChange={setBonus}
                accent
              />
            </div>
          </div>

          {/* RIGHT — RESULT */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12">
            <p className="text-sm uppercase tracking-wide text-zv-muted">
              Illustrative outcome
            </p>

            <div className="mt-8 text-5xl font-semibold text-zv-gold">
              {fmt(result.bonusValue)} ZEC
            </div>

            <p className="mt-4 text-zv-muted">
              Compared to baseline:&nbsp;
              <span className="text-zv-text font-medium">
                +{fmt(result.diff)} ZEC
              </span>
            </p>

            <p className="mt-8 text-sm leading-relaxed text-zv-muted">
              Simplified illustration assuming compounded growth and an additive
              incentive. Final terms are documented individually.
            </p>
          </div>
        </div>

        {/* ================== DEPOSIT ================== */}
        <div className="mt-24 max-w-4xl">
          <p className="mb-6 text-zv-text">
            If this structure aligns with your objectives, participation is
            completed via a private ZEC transfer to a shielded address.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 space-y-6">
            <Row
              label="Shielded deposit address"
              value={ZEC_ADDRESS}
              mono
              copied={addrCopied}
              onCopy={() => copy(ZEC_ADDRESS, setAddrCopied)}
            />

            <Row
              label="Memo (required)"
              value={memo}
              mono
              accent
              copied={memoCopied}
              onCopy={() => copy(memo, setMemoCopied)}
            />

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
                Received:&nbsp;
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

function Assumption({
  label,
  value,
  onChange,
  suffix,
  accent,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix: string;
  accent?: boolean;
}) {
  return (
    <label className="block space-y-3">
      <span className="text-xs uppercase tracking-[0.2em] text-zv-muted">
        {label}
      </span>

      <div
        className={`flex items-center h-14 gap-3 rounded-xl border px-4 ${
          accent ? "border-zv-gold/40" : "border-white/10"
        }`}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-xl font-medium text-zv-text outline-none"
        />
        <span className="text-sm text-zv-muted whitespace-nowrap">
          {suffix}
        </span>
      </div>
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
