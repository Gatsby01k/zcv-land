// components/sections/ProcessSection.tsx

const steps = [
  {
    k: "Step 01",
    t: "Initial conversation",
    p: "We discuss fit, objectives, and the structure you are seeking, including size, timeline, and reporting expectations.",
  },
  {
    k: "Step 02",
    t: "Materials & structure",
    p: "We share relevant materials and outline the proposed terms, including vesting mechanics where applicable.",
  },
  {
    k: "Step 03",
    t: "Negotiation & documentation",
    p: "Terms are finalized and documented. Allocation, incentives, and reporting are defined before any capital is accepted.",
  },
  {
    k: "Step 04",
    t: "Ongoing relationship",
    p: "We operate as a long-term counterpart: periodic updates, structured reporting, and continuity of communication.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="reveal border-t border-white/5 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-20 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
            Process
          </p>

          <h2 className="text-balance">A clear, documented workflow</h2>

          <p className="text-zv-text">
            We keep the process simple: aligned expectations, written terms, and
            a professional relationship that remains stable after onboarding.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <article
              key={s.k}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-zv-muted">
                {s.k}
              </p>
              <h3 className="mt-3 mb-3">{s.t}</h3>
              <p>{s.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
