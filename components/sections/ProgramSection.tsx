// components/sections/ProgramSection.tsx

export default function ProgramSection() {
  return (
    <section className="block reveal">
      <div className="block-inner">
        <header className="block-header">
          <p className="block-kicker">Program</p>
          <h2 className="block-title">
            A focused program for Zcash-aligned, long-term capital.
          </h2>
          <p className="block-copy">
            The Zcash.Ventures program provides private, structured access to
            ZEC-denominated venture opportunities. We are not an exchange, a
            trading desk or a public fund. We selectively work with partners who
            want quiet, thoughtful exposure to builders and structures that
            deepen the Zcash ecosystem.
          </p>
        </header>

        <div className="block-grid">
          <article className="block-card">
            <h3>Curated access</h3>
            <p>
              We focus on a narrow set of structures where we have conviction:
              privacy infrastructure, tooling around ZEC, and ventures that
              materially advance the Zcash mission.
            </p>
          </article>

          <article className="block-card">
            <h3>ZEC-denominated</h3>
            <p>
              Positions are framed in ZEC, not just in dollars. This keeps
              incentives aligned with the asset we are all here for.
            </p>
          </article>

          <article className="block-card">
            <h3>Quiet by design</h3>
            <p>
              There are no public dashboards or performance threads. We
              prioritize privacy, operational clarity and clean documentation.
            </p>
          </article>

          <article className="block-card">
            <h3>Direct relationship</h3>
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
