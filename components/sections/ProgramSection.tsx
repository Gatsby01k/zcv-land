export default function ProgramSection() {
  return (
    <section className="block reveal">
      <div className="block-inner">
        <div className="block-headline">
          <div>
            <div className="block-kicker">Program</div>
            <h2 className="block-title">
              Privacy ventures access, built specifically around the Zcash
              ecosystem.
            </h2>
          </div>
          <p className="block-copy">
            The program is for allocators who view privacy infrastructure as
            critical market infrastructure and prefer structured entry instead
            of broad, undifferentiated crypto exposure.
          </p>
        </div>
        <div className="features-row">
          <article className="feature">
            <div className="feature-label">FOCUS</div>
            <div className="feature-title">Zcash-centric</div>
            <p className="feature-text">
              Participation is directed at Zcash-related structures and
              initiatives rather than generic market-wide products.
            </p>
          </article>
          <article className="feature">
            <div className="feature-label">STRUCTURE</div>
            <div className="feature-title">Ventures-style terms</div>
            <p className="feature-text">
              Terms are negotiated, documented and non-promotional — with the
              level of clarity expected from institutional or ventures
              allocations.
            </p>
          </article>
          <article className="feature">
            <div className="feature-label">PRIVACY</div>
            <div className="feature-title">Private channel only</div>
            <p className="feature-text">
              No interface, accounts or feeds. All interaction happens via
              direct communication with the team, aligned with the privacy
              thesis of Zcash itself.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
