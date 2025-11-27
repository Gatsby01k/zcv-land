export default function Strip() {
  const text =
    "ZCASH.VENTURES · PRIVATE ZEC VENTURE ACCESS · STRUCTURED OFF-EXCHANGE DEALS · UP TO +25% BONUS FOR EARLY PARTNERS · NO PUBLIC ACCOUNTS";

  return (
    <section className="border-y border-white/5 bg-zv-bg-soft/70 py-3">
      <div className="overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap text-[0.62rem] uppercase tracking-[0.35em] text-zv-muted/80">
          <span className="mx-6">{text}</span>
          <span className="mx-6">{text}</span>
          <span className="mx-6">{text}</span>
          <span className="mx-6">{text}</span>
        </div>
      </div>
    </section>
  );
}
