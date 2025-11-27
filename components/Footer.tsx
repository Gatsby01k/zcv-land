// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zv-bg-soft/80 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-4 text-[0.7rem] text-zv-muted lg:flex-row lg:items-center">
        <div className="space-y-1">
          <div className="uppercase tracking-[0.28em] text-zv-muted/80">
            Zcash.Ventures
          </div>
          <p className="max-w-xl leading-relaxed">
            This site is informational only and does not constitute investment,
            legal, tax or other advice, nor an offer or solicitation to engage
            in any transaction. Any participation is subject to suitability,
            jurisdictional constraints and formal documentation.
          </p>
        </div>
        <div className="space-y-1 text-left lg:text-right">
          <div>Private ZEC-denominated venture access.</div>
          <div className="text-zv-muted/70">
            No public dashboards. No social hype.
          </div>
        </div>
      </div>
    </footer>
  );
}
