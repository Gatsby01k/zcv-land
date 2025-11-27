export default function BonusSection() {
  return (
    <section className="block block-alt reveal" id="bonus">
      <div className="block-inner">
        <header className="block-header">
          <p className="block-kicker">Early partner framework</p>
          <h2 className="block-title">Up to +25% notional bonus for aligned early participation.</h2>
          <p className="block-copy">
            For the current program, early, conviction-driven partners may be
            eligible for a notional bonus of up to 25% on their contributed
            amount, subject to structure, size and horizon. The goal is simple:
            recognise those who are prepared to back Zcash-centric work before
            it becomes consensus.
          </p>
        </header>

        <div className="block-grid">
          <article className="block-card">
            <h3>Structured, not improvised</h3>
            <p>
              Bonus ranges, vesting and any limits are defined in writing before
              you decide to participate. There are no surprise changes after
              the fact.
            </p>
          </article>

          <article className="block-card">
            <h3>Aligned with duration</h3>
            <p>
              Longer-term, thoughtfully sized positions may qualify for stronger
              bonus terms. We are building around multi-year horizons, not
              quarterly charts.
            </p>
          </article>

          <article className="block-card">
            <h3>Illustrative, not promissory</h3>
            <p>
              Any examples you see here are purely illustrative. Actual terms
              are discussed privately and depend on jurisdiction, structure and
              suitability.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
