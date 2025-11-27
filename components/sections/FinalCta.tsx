"use client";

import { openMail } from "../clientActions";

export default function FinalCta() {
  return (
    <section
      className="reveal border-t border-white/5 bg-zv-bg py-16 lg:py-20"
      id="contact"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zv-bg-soft via-zv-bg-card to-zv-bg-soft p-6 shadow-zv-soft sm:p-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-3">
              <div className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
                Next step
              </div>
              <h2 className="text-sm font-semibold tracking-[0.18em] text-zv-text sm:text-base">
                IF YOU ARE SERIOUS ABOUT ZCASH AND PRIVACY, WE ARE OPEN TO A QUIET
                CONVERSATION.
              </h2>
              <p className="text-sm leading-relaxed text-zv-muted">
                Zcash.Ventures is for partners who think in years, not weeks, and
                who want their capital to advance privacy infrastructure rather
                than just trade it. If that sounds like you, let&apos;s start with a
                straightforward discussion.
              </p>
            </div>

            <div className="space-y-2 text-[0.7rem] text-zv-muted">
              <div className="inline-flex rounded-full bg-zv-bg-chip px-3 py-1">
                Private, ZEC-denominated venture access
              </div>
              <div className="inline-flex rounded-full bg-zv-bg-chip px-3 py-1">
                Limited, curated counterparties only
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openMail}
              className="inline-flex items-center justify-center rounded-full bg-zv-gold px-5 py-2.5 text-xs font-semibold text-zv-bg shadow-zv-soft transition hover:bg-zv-gold-soft"
            >
              Contact the team
            </button>

            <button
              type="button"
              onClick={openMail}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-4 py-2 text-xs font-medium text-zv-text transition hover:border-white/35 hover:bg-white/5"
            >
              invest@zcash.ventures
            </button>
          </div>

          <p className="mt-5 text-[0.7rem] leading-relaxed text-zv-muted">
            Nothing on this site constitutes investment, legal or tax advice, or
            a solicitation to invest. Any participation is subject to
            suitability, jurisdictional constraints and formal documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
