export default function ProcessSection() {
  return (
    <section className="block reveal" id="process">
      <div className="block-inner">
        <header className="block-header">
          <p className="block-kicker">Process</p>
          <h2 className="block-title">
            A discreet, straightforward path from first contact to allocation.
          </h2>
          <p className="block-copy">
            We keep the process lean, private and documented. You always know
            what the next step is, what is expected from each side, and how
            decisions are made.
          </p>
        </header>

        <ol className="steps">
          <li className="step">
            <h3>1. Initial contact</h3>
            <p>
              You reach out directly to the team. We introduce the program,
              share high-level parameters and check for basic alignment.
            </p>
          </li>
          <li className="step">
            <h3>2. Deeper discussion</h3>
            <p>
              We discuss objectives, constraints, jurisdictional considerations
              and what a sensible position could look like for you.
            </p>
          </li>
          <li className="step">
            <h3>3. Structuring & documentation</h3>
            <p>
              We agree a structure, draft the necessary documentation and outline
              reporting, timelines and any applicable bonus framework.
            </p>
          </li>
          <li className="step">
            <h3>4. Execution & ongoing dialogue</h3>
            <p>
              Once everything is signed and funded, the focus shifts to building
              and monitoring positions — with periodic, quiet updates, not a
              constant content stream.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
