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
        <div className="block-headline">
          <div>
            <div className="block-kicker">Illustration</div>
            <h2 className="block-title">
              Move the slider to see how a 25% bonus changes notional size.
            </h2>
          </div>
          <p className="block-copy">
            This calculator is illustrative only. It shows the arithmetic behind
            a 25% bonus and should not be treated as advice, a forecast or a
            guarantee.
          </p>
        </div>
        <div className="calc-grid">
          <div className="calc-panel">
            <div>
              <div className="calc-label">Contribution amount (illustrative)</div>
              <div className="calc-input-row">
                <div className="calc-slider-wrap">
                  <input
                    type="range"
                    min={5000}
                    max={250000}
                    step={5000}
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="calc-value-display">{formatUSD(amount)}</div>
              </div>
            </div>
            <div className="calc-cols">
              <div className="calc-box">
                <div className="calc-box-label">Contribution</div>
                <div className="calc-box-value">{formatUSD(amount)}</div>
              </div>
              <div className="calc-box">
                <div className="calc-box-label">Bonus (25%)</div>
                <div className="calc-box-value">{formatUSD(bonus)}</div>
              </div>
              <div className="calc-box">
                <div className="calc-box-label">Total notional</div>
                <div className="calc-box-value">{formatUSD(total)}</div>
              </div>
            </div>
          </div>
          <p className="block-copy">
            Actual structures, applicable bonus ranges and any limits are defined
            directly with the team and agreed before participation. The
            illustration simply reflects: contribution, bonus at 25%, and
            resulting notional size.
          </p>
        </div>
      </div>
    </section>
  );
}
