export default function BonusSection() {
  return (
    <section className="block reveal" id="bonus">
      <div className="block-inner">
        <div className="block-headline">
          <div>
            <div className="block-kicker">Early bonus</div>
            <h2 className="block-title">
              Up to +25% bonus for early contributors to the current program.
            </h2>
          </div>
          <p className="block-copy">
            The bonus framework is designed to recognise early, conviction-driven
            participation. Levels depend on contribution size, structure and
            horizon and are always defined before any decision.
          </p>
        </div>
        <div className="features-row">
          <article className="feature">
            <div className="feature-label">ALIGNMENT</div>
            <div className="feature-title">Volume-based ranges</div>
            <p className="feature-text">
              Bonus ranges are calibrated to contribution size so incentives align
              with commitment, not short-term marketing.
            </p>
          </article>
          <article className="feature">
            <div className="feature-label">CLARITY</div>
            <div className="feature-title">Documented mechanics</div>
            <p className="feature-text">
              Applicable bonus, timing and any conditions are laid out and agreed
              in advance. There are no opaque multipliers or hidden levers.
            </p>
          </article>
          <article className="feature">
            <div className="feature-label">FUTURE</div>
            <div className="feature-title">Optional prioritisation</div>
            <p className="feature-text">
              Early contributors may be prioritised when future Zcash-focused
              initiatives or structures are considered.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
