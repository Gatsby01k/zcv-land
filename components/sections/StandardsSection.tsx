// components/sections/StandardsSection.tsx

export default function StandardsSection() {
  return (
    <section className="reveal border-b border-white/5 bg-zv-bg-soft/70 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <header className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Standards
          </p>
          <h2 className="text-balance text-2xl font-semibold text-zv-text sm:text-3xl">
            Clear boundaries on what we do—and what we don&apos;t.
          </h2>
          <p className="text-sm leading-relaxed text-zv-muted">
            Zcash.Ventures operates with a small set of non-negotiable lines:
            we are not an exchange, we do not manage public deposits, and we do
            not run marketing campaigns around counterparties or positions.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-zv-bg-card/85 p-4 text-xs">
            <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-zv-muted">
              What we are
            </div>
            <ul className="space-y-1.5 text-zv-muted">
              <li>• A private program for ZEC-denominated ventures.</li>
              <li>• A small, high-intent set of counterparties.</li>
              <li>• Focused on long-term privacy infrastructure.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zv-bg-card/85 p-4 text-xs">
            <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-zv-muted">
              What we are not
            </div>
            <ul className="space-y-1.5 text-zv-muted">
              <li>• Not an exchange or trading platform.</li>
              <li>• Not a public investment product.</li>
              <li>• Not a retail offering or airdrop scheme.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zv-bg-card/85 p-4 text-xs">
            <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-zv-muted">
              How we behave
            </div>
            <ul className="space-y-1.5 text-zv-muted">
              <li>• Quiet, professional, documentation-first approach.</li>
              <li>• Respect for privacy and jurisdictional boundaries.</li>
              <li>• No promotional disclosure of counterparties.</li>
            </ul>
          </article>
        </div>

        <p className="mt-6 max-w-3xl text-[0.7rem] leading-relaxed text-zv-muted">
          Any decision to participate should be based on your own independent
          assessment and advice from qualified professionals. Zcash.Ventures is
          one possible vector for ZEC-aligned exposure, not a default or
          universal solution.
        </p>
      </div>
    </section>
  );
}
