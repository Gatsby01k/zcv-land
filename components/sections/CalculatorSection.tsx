"use client";

import { useState } from "react";

const formatUSD = (value: number) =>
  "$" + value.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function CalculatorSection() {
  const [amount, setAmount] = useState(25000);
  const bonus = Math.round(amount * 0.25);
  const total = amount + bonus;

  return (
    <section className="block reveal" id="calculator">
      <div className="block-inner">
        <header className="block-header">
          <p className="block-kicker">Illustrative bonus math</p>
          <h2 className="block-title">
            How a +25% notional bonus could look in simple terms.
          </h2>
          <p className="block-copy">
            This is an illustration only. It helps visualise how a 25% notional
            bonus might scale against a contribution. Actual structures, bonus
            ranges and any constraints are always defined directly with the team
            before you decide to participate.
          </p>
        </header>

        <div className="calc-grid">
          <div className="calc-input">
            <label htmlFor="amount">Example contribution (USD equivalent)</label>
            <input
              id="amount"
              type="number"
              min={0}
              step={1000}
              value={amount}
              onChange={(e) => {
                const value = Number(e.target.value || 0);
                setAmount(value < 0 ? 0 : value);
              }}
            />
            <p className="calc-hint">
              Enter a notional contribution amount to see the corresponding
              illustration at a 25% bonus.
            </p>
          </div>

          <div className="calc-results">
            <div className="calc-row">
              <span>Contribution</span>
              <strong>{formatUSD(amount)}</strong>
            </div>
            <div className="calc-row">
              <span>Illustrative 25% bonus</span>
              <strong>{formatUSD(bonus)}</strong>
            </div>
            <div className="calc-row calc-row-total">
              <span>Resulting notional size</span>
              <strong>{formatUSD(total)}</strong>
            </div>
            <p className="calc-disclaimer">
              This example does not constitute an offer, commitment, investment
              advice or a guarantee of any outcome. Terms, if any, are discussed
              privately and may differ materially from this illustration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
