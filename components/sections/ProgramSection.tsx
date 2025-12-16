// components/sections/ProgramSection.tsx

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="reveal border-t border-white/5 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-20 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
            Program
          </p>

          <h2 className="text-balance">
            A focused program for Zcash-aligned, long-term capital
          </h2>

          <p className="text-zv-text">
            Zcash.Ventures provides private, structured access to
            ZEC-denominated venture opportunities. We are not an exchange, a
            trading desk, or a public fund. We work selectively with partners
            seeking thoughtful, long-term exposure to structures and builders
            that strengthen the Zcash ecosystem.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-3">
              Curated access
            </h3>
            <p>
              We focus on a narrow set of opportunities where we have conviction:
              privacy infrastructure, ZEC-native tooling, and ventures that
              materially advance the Zcash mission.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-3">
              Structured economics
            </h3>
            <p>
              Participation is governed by clear, documented terms. Economics,
              vesting, and reporting are aligned with long-term value creation
              rather than short-term trading dynamics.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-3">
              Direct relationship
            </h3>
            <p>
              You engage directly with the core team. Structures, terms, and
              reporting are agreed in advance and maintained with a consistently
              professional standard.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
