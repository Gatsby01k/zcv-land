// components/sections/StandardsSection.tsx

export default function StandardsSection() {
  return (
    <section className="reveal border-t border-white/5 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-20 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
            Standards
          </p>

          <h2 className="text-balance">
            How we operate, and what we do not do
          </h2>

          <p className="text-zv-text">
            We operate with a narrow mandate and clear boundaries. Our standards
            are designed to protect alignment, discretion, and long-term
            credibility.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-4">What we do</h3>
            <ul className="space-y-3 text-[17px] leading-relaxed text-zv-muted">
              <li>• Work privately with a limited number of aligned partners</li>
              <li>• Focus on ZEC-denominated, Zcash-aligned structures</li>
              <li>• Document terms clearly before any capital is accepted</li>
              <li>• Maintain direct, ongoing communication</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-4">What we do not do</h3>
            <ul className="space-y-3 text-[17px] leading-relaxed text-zv-muted">
              <li>• Operate as a public fund or pooled vehicle</li>
              <li>• Offer liquidity, redemptions, or secondary markets</li>
              <li>• Engage in short-term trading strategies</li>
              <li>• Provide generalized investment advice</li>
            </ul>
          </article>
        </div>

        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-zv-muted">
          Participation is subject to eligibility, jurisdictional considerations,
          and final documentation. Nothing on this site constitutes investment,
          legal, or tax advice.
        </p>
      </div>
    </section>
  );
}
