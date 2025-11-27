export default function StandardsSection() {
  return (
    <section className="block block-alt reveal">
      <div className="block-inner">
        <header className="block-header">
          <p className="block-kicker">Standards</p>
          <h2 className="block-title">
            The principles we apply to every relationship and structure.
          </h2>
          <p className="block-copy">
            Zcash is about more than an asset — it is about a standard for
            privacy, integrity and resilience. We try to reflect that in how we
            operate and who we work with.
          </p>
        </header>

        <div className="block-grid">
          <article className="block-card">
            <h3>Privacy first</h3>
            <p>
              No public dashboards, no investor lists on social media.
              Participation is treated as private by default.
            </p>
          </article>

          <article className="block-card">
            <h3>Regulatory awareness</h3>
            <p>
              Structures are assessed in light of relevant jurisdictions. Where
              we are unsure, we slow down and clarify instead of moving fast and
              hoping for the best.
            </p>
          </article>

          <article className="block-card">
            <h3>Alignment over scale</h3>
            <p>
              We are comfortable saying no when objectives or style do not fit.
              A smaller group of aligned partners is better than a large,
              noisy one.
            </p>
          </article>

          <article className="block-card">
            <h3>Long-term orientation</h3>
            <p>
              We care more about where Zcash and privacy infrastructure are in
              5–10 years than about weekly price screens.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
