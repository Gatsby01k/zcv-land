"use client";

import { openMail } from "../clientActions";

export default function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta-inner">
        <div className="final-cta-card">
          <div className="final-cta-header">
            <div>
              <div className="final-cta-kicker">Next step</div>
              <h2 className="final-cta-title">
                IF YOU ARE SERIOUS ABOUT ZCASH AND PRIVACY, WE ARE OPEN TO A QUIET
                CONVERSATION.
              </h2>
              <p className="final-cta-copy">
                Zcash.Ventures is for partners who think in years, not weeks, and who
                want their capital to advance privacy infrastructure rather than just
                trade it. If that sounds like you, let&apos;s start with a straightforward
                discussion.
              </p>
            </div>

            <div className="final-cta-meta">
              <div className="final-cta-pill">
                Private, ZEC-denominated venture access
              </div>
              <div className="final-cta-pill">
                Limited, curated counterparties only
              </div>
            </div>
          </div>

          <div className="final-cta-actions">
            <button
              type="button"
              className="final-cta-primary"
              onClick={openMail}
            >
              Contact the team
            </button>

            <button
              type="button"
              className="final-cta-secondary"
              onClick={openMail}
            >
              invest@zcash.ventures
            </button>
          </div>

          <p className="final-cta-footnote">
            Nothing on this site constitutes investment, legal or tax advice, or a
            solicitation to invest. Any participation is subject to suitability,
            jurisdictional constraints and formal documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
