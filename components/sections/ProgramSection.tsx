// components/sections/ProgramSection.tsx

export default function ProgramSection() {
  return (
    <section
      className="reveal border-b border-white/5 bg-zv-bg-soft/60 py-16 lg:py-20"
      id="program"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <header className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Program
          </p>
          <h2 className="text-balance text-2xl font-semibold text-zv-text sm:text-3xl">
            A focused program for Zcash-aligned, long-term capital.
          </h2>
          <p className="text-sm leading-relaxed text-zv-muted">
            The Zcash.Ventures program provides private, structured access to
            ZEC-denominated venture opportunities. We are not an exchange, a
            trading desk or a public fund. We selectively work with partners who
            want quiet, thoughtful exposure to builders and structures that
            deepen the Zcash ecosystem.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-white/8 bg-zv-bg-card/80 p-4 text-sm text-zv-muted">
            <h3 className="mb-2 text-sm font-semibold text-zv-text">
              Curated access
            </h3>
            <p>
              We focus on a narrow set of structures where we have conviction:
              privacy infrastructure, tooling around ZEC, and ventures that
              materially advance the Zcash mission.
            </p>
          </article>

          <article className="rounded-2xl border border-white/8 bg-zv-bg-card/80 p-4 text-sm text-zv-muted">
            <h3 className="mb-2 text-sm font-semibold text-zv-text">
              Structured economics
            </h3>
            <p>
              Participation is governed by clear, documented terms. Economics,
              vesting and reporting are aligned to long-term value creation
              rather than short-term trading.
            </p>
          </article>

          <article className="rounded-2xl border border-white/8 bg-zv-bg-card/80 p-4 text-sm text-zv-muted">
            <h3 className="mb-2 text-sm font-semibold text-zv-text">
              Direct relationship
            </h3>
            <p>
              You work directly with the core team, not a support queue. Terms,
              structures and reporting are agreed in advance and remain
              consistently professional.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
