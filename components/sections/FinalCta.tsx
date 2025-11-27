import { openMail } from "../clientActions";

export default function FinalCta() {
  return (
    <section className="block final-cta reveal">
      <div className="block-inner final-cta-inner">
        <div className="final-copy">
          <p className="block-kicker">Next step</p>
          <h2 className="block-title">
            If you are serious about Zcash and privacy, we are open to a quiet conversation.
          </h2>
          <p className="block-copy">
            Zcash.Ventures is for partners who think in years, not weeks, and who want
            their capital to advance privacy infrastructure rather than just trade it.
            If that sounds like you, let&apos;s start with a straightforward discussion.
          </p>
        </div>

        <div className="final-contact">
          <button
            type="button"
            className="final-email"
            onClick={openMail}
          >
            <div className="final-email-icon">✉</div>
            <div className="final-email-meta">
              <div className="final-email-label">Contact the team</div>
              <div className="final-email-address">invest@zcash.ventures</div>
            </div>
          </button>
          <p className="final-note">
            Nothing on this site constitutes investment, legal or tax advice, or a
            solicitation to invest. Any participation is subject to suitability,
            jurisdictional constraints and formal documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
