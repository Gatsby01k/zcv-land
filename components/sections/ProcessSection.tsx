export default function ProcessSection() {
  return (
    <section className="block reveal" id="process">
      <div className="block-inner">
        <div className="block-headline">
          <div>
            <div className="block-kicker">Process</div>
            <h2 className="block-title">
              A three-step, conversation-first process.
            </h2>
          </div>
          <p className="block-copy">
            There is no onboarding funnel. Everything starts with a private email
            and a straightforward exchange focused on objectives, constraints and
            fit.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-bullet-wrap">
              <div className="timeline-bullet">
                <span />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-index">Step 01</div>
              <div className="timeline-title">Introduction</div>
              <p className="timeline-text">
                Send a short profile, objectives and indicative ticket to{" "}
                <a href="mailto:invest@zcash.ventures" className="email-link">
                  invest@zcash.ventures
                </a>
                , including jurisdiction and preferred horizon.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-bullet-wrap">
              <div className="timeline-bullet">
                <span />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-index">Step 02</div>
              <div className="timeline-title">Structure & terms</div>
              <p className="timeline-text">
                The team responds with potential structures, applicable bonus
                ranges and relevant considerations so that decisions can be taken
                with full context.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-bullet-wrap">
              <div className="timeline-bullet">
                <span />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-index">Step 03</div>
              <div className="timeline-title">Participation & follow-up</div>
              <p className="timeline-text">
                Once terms are agreed, participation is executed accordingly.
                Where appropriate, the team remains available for ongoing
                communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
