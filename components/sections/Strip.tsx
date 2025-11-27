export default function Strip() {
  const text =
    "ZCASH.VENTURES · PRIVATE ZEC VENTURE ACCESS · STRUCTURED OFF-MARKET DEALS · UP TO +25% BONUS FOR EARLY PARTNERS · NO PUBLIC ACCOUNTS";

  return (
    <section className="strip">
      <div className="strip-inner">
        <div className="strip-track">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </section>
  );
}
