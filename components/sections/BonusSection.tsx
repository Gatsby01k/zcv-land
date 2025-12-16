// components/sections/BonusSection.tsx

export default function BonusSection() {
  return (
    <section className="reveal border-t border-white/5 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-20 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
            Early allocation bonus
          </p>

          <h2 className="text-balance">
            Structured incentives, negotiated individually
          </h2>

          <p className="text-zv-text">
            For qualifying early partners, we may offer an additional allocation
            bonus. This is designed to reward committed, long-term participation
            and is documented as part of the final terms.
          </p>

          <p className="text-sm leading-relaxed text-zv-muted">
            Illustrative only. Bonus terms are non-binding until documented and
            executed.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-3">Illustrative up to +25%</h3>
            <p>
              In select cases, incentives may be offered as an additional
              allocation, subject to eligibility and final documentation.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-3">Structured, not gamified</h3>
            <p>
              Incentives are aligned to long-term participation, not short-term
              volume. Terms are clear, written, and consistent.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-3">Agreed in advance</h3>
            <p>
              Any bonus mechanics are negotiated with the partner and reflected
              in the final documents before funds are accepted.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
