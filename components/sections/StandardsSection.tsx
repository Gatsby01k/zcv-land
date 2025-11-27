export default function StandardsSection() {
  return (
    <section className="block reveal">
      <div className="block-inner">
        <div className="block-headline">
          <div>
            <div className="block-kicker">Standards</div>
            <h2 className="block-title">
              A disciplined, privacy-respecting framework rather than a promise.
            </h2>
          </div>
          <p className="block-copy">
            The objective is to provide a principled way to engage with a
            privacy-first network, not to market guaranteed outcomes or remove
            risk.
          </p>
        </div>
        <div className="features-row">
          <article className="feature">
            <div className="feature-label">CLARITY</div>
            <div className="feature-title">Explicit terms</div>
            <p className="feature-text">
              Structures, applicable bonuses and limitations are defined in
              advance. Ambiguity is reduced as far as reasonably possible.
            </p>
          </article>
          <article className="feature">
            <div className="feature-label">RISK</div>
            <div className="feature-title">No guarantees</div>
            <p className="feature-text">
              Participation in Zcash and digital assets involves risk. The
              program does not offer guaranteed returns or investment advice.
            </p>
          </article>
          <article className="feature">
            <div className="feature-label">PRIVACY</div>
            <div className="feature-title">Private by design</div>
            <p className="feature-text">
              Communication is direct and discreet, aligned with the privacy
              guarantees that the Zcash protocol is designed to provide.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
