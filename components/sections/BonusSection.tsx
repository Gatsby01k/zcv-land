// components/sections/BonusSection.tsx

export default function BonusSection() {
  return (
    <section className="reveal border-b border-white/5 bg-zv-bg py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <header className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Early partner incentives
          </p>
          <h2 className="text-balance text-2xl font-semibold text-zv-text sm:text-3xl">
            Early, aligned partners can receive meaningful bonus exposure.
          </h2>
          <p className="text-sm leading-relaxed text-zv-muted">
            To recognise the risk and alignment of early participants, we may
            structure bonus exposure in ZEC. The exact level is always
            negotiated bilaterally, but the intent is simple: those who show up
            early and stay aligned should participate more in the upside.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="flex flex-col rounded-2xl border border-zv-gold/30 bg-zv-bg-card/80 p-4">
            <div className="mb-1 text-[0.7rem] uppercase tracking-[0.24em] text-zv-gold">
              Illustrative
            </div>
            <h3 className="mb-2 text-sm font-semibold text-zv-text">
              Up to +25% bonus
            </h3>
            <p className="text-xs leading-relaxed text-zv-muted">
              For a limited number of early, long-term partners, illustrative
              bonus exposure can reach up to +25% of committed ZEC, subject to
              structure, lockups and documentation.
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-white/8 bg-zv-bg-card/80 p-4">
            <div className="mb-1 text-[0.7rem] uppercase tracking-[0.24em] text-zv-muted">
              Alignment
            </div>
            <h3 className="mb-2 text-sm font-semibold text-zv-text">
              Structured, not gamified
            </h3>
            <p className="text-xs leading-relaxed text-zv-muted">
              Bonus mechanics are built around long-term behaviour, not short
              bursts of activity. Lockups, cliff periods and downside sharing
              can be used to keep incentives clean.
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-white/8 bg-zv-bg-card/80 p-4">
            <div className="mb-1 text-[0.7rem] uppercase tracking-[0.24em] text-zv-muted">
              Case-by-case
            </div>
            <h3 className="mb-2 text-sm font-semibold text-zv-text">
              Negotiated individually
            </h3>
            <p className="text-xs leading-relaxed text-zv-muted">
              Every relationship is different. Size, duration, profile and
              jurisdiction matter. Bonus exposure is therefore agreed
              individually, not advertised as a one-size-fits-all campaign.
            </p>
          </article>
        </div>

        <p className="mt-6 max-w-3xl text-[0.7rem] leading-relaxed text-zv-muted">
          All illustrations on this site are purely indicative and non-binding.
          Actual terms, if any, are governed exclusively by signed
          documentation, jurisdictional considerations and suitability
          assessments.
        </p>
      </div>
    </section>
  );
}
