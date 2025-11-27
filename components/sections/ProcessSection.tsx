// components/sections/ProcessSection.tsx

export default function ProcessSection() {
  return (
    <section
      className="reveal border-b border-white/5 bg-zv-bg py-16 lg:py-20"
      id="process"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <header className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Process
          </p>
          <h2 className="text-balance text-2xl font-semibold text-zv-text sm:text-3xl">
            A quiet, professional process designed for serious partners.
          </h2>
          <p className="text-sm leading-relaxed text-zv-muted">
            We keep things deliberately simple: a small number of calls, clear
            materials, and direct access to the people actually responsible for
            decisions. No funnels, no “communities”, no meaningless dashboards.
          </p>
        </header>

        <ol className="mt-10 space-y-4">
          <li className="flex gap-4 rounded-3xl border border-white/10 bg-zv-bg-card/80 p-4">
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-zv-bg-chip text-[0.7rem] font-semibold text-zv-text">
              1
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-zv-text">
                Initial conversation
              </h3>
              <p className="text-xs leading-relaxed text-zv-muted">
                A focused discussion to understand your profile, objectives and
                constraints, and to establish whether there is a realistic fit
                in terms of size, jurisdiction and time horizon.
              </p>
            </div>
          </li>

          <li className="flex gap-4 rounded-3xl border border-white/10 bg-zv-bg-card/80 p-4">
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-zv-bg-chip text-[0.7rem] font-semibold text-zv-text">
              2
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-zv-text">
                Materials & structure
              </h3>
              <p className="text-xs leading-relaxed text-zv-muted">
                We share a clear pack outlining illustrative structures, risk
                factors, reporting, and economic alignment. At this stage
                everything is still non-binding and exploratory.
              </p>
            </div>
          </li>

          <li className="flex gap-4 rounded-3xl border border-white/10 bg-zv-bg-card/80 p-4">
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-zv-bg-chip text-[0.7rem] font-semibold text-zv-text">
              3
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-zv-text">
                Negotiation & documentation
              </h3>
              <p className="text-xs leading-relaxed text-zv-muted">
                If both sides wish to proceed, we agree specific terms, bonuses
                (if any), lockups and reporting, then move to documentation with
                appropriate professional advisers.
              </p>
            </div>
          </li>

          <li className="flex gap-4 rounded-3xl border border-white/10 bg-zv-bg-card/80 p-4">
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-zv-bg-chip text-[0.7rem] font-semibold text-zv-text">
              4
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-zv-text">
                Ongoing relationship
              </h3>
              <p className="text-xs leading-relaxed text-zv-muted">
                After closing, the focus shifts to execution, reporting and
                periodic re-alignment. The relationship is direct and quiet,
                without public marketing around positions or counterparties.
              </p>
            </div>
          </li>
        </ol>

        <p className="mt-6 max-w-3xl text-[0.7rem] leading-relaxed text-zv-muted">
          At every stage, either side can decide that the fit is not right.
          That&apos;s a feature, not a bug: this is not designed for maximum volume,
          but for long-term, well-matched relationships.
        </p>
      </div>
    </section>
  );
}
