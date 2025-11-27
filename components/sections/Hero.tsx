"use client";

import { useEffect } from "react";
import { scrollToSection, openMail } from "../clientActions";

export default function Hero() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Если пользователь отключил анимации или нет IntersectionObserver —
    // просто показываем элементы
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="top">
      <div className="shell hero-inner">
        <div className="hero-main reveal">
          <p className="hero-kicker">Private ZEC-Denominated Ventures</p>
          <h1 className="hero-title">
            Discreet access to curated Zcash-focused
            <span className="hero-title-accent"> venture structures.</span>
          </h1>
          <p className="hero-copy">
            Zcash.Ventures works with a small group of long-term, privacy-aligned
            partners to build and scale ZEC-denominated venture positions
            off-exchange. No public dashboards. No social hype. Just structured
            access and clear alignment.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-cta-primary"
              onClick={() => scrollToSection("program")}
            >
              Explore the program
            </button>
            <button
              type="button"
              className="hero-cta-secondary"
              onClick={openMail}
            >
              Contact the team
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Illustrative early bonus</span>
              <span className="hero-meta-value">Up to +25%</span>
            </div>
            <div className="hero-meta-divider" aria-hidden="true" />
            <div className="hero-meta-item">
              <span className="hero-meta-label">Denomination</span>
              <span className="hero-meta-value">ZEC-native</span>
            </div>
            <div className="hero-meta-divider" aria-hidden="true" />
            <div className="hero-meta-item">
              <span className="hero-meta-label">Approach</span>
              <span className="hero-meta-value">Low-noise, high-intent</span>
            </div>
          </div>
        </div>

        <aside className="hero-side reveal">
          <div className="hero-panel hero-panel-primary">
            <div className="hero-panel-header">
              <span className="hero-panel-kicker">Illustrative framework</span>
              <span className="hero-panel-tag">Non-binding</span>
            </div>

            <h2 className="hero-panel-title">
              An early, structured bonus model
              <span className="hero-panel-title-accent"> aligned with ZEC.</span>
            </h2>

            <p className="hero-panel-copy">
              The program explores an illustrative early-bonus range of up to
              +25% on ZEC-denominated positions, subject to documentation,
              diligence and mutual fit.
            </p>

            <ul className="hero-panel-list">
              <li>Bonus expressed in ZEC, not in USD.</li>
              <li>Structured around long-term participation, not short-term flow.</li>
              <li>Designed for a small group of aligned counterparts.</li>
            </ul>

            <div className="hero-panel-footer">
              <button
                type="button"
                className="hero-panel-cta"
                onClick={() => scrollToSection("calculator")}
              >
                View illustration
              </button>
              <p className="hero-panel-footnote">
                This is not an offer to sell or solicit an offer to buy any
                security or financial instrument.
              </p>
            </div>
          </div>

          <div className="hero-panel hero-panel-soft">
            <div className="hero-panel-label">Program signals</div>
            <div className="hero-points">
              <div className="hero-point">
                <span className="hero-point-label">ZEC-native</span>
                <p>
                  Structures are designed around ZEC exposure, not as an
                  afterthought in a generic crypto basket.
                </p>
              </div>
              <div className="hero-point">
                <span className="hero-point-label">Private by default</span>
                <p>
                  No public accounts, no leaderboard culture. Participation is
                  handled quietly and directly.
                </p>
              </div>
              <div className="hero-point">
                <span className="hero-point-label">Builder-aligned</span>
                <p>
                  Focused on ventures, infrastructure and primitives that deepen
                  the Zcash ecosystem over the long term.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-panel hero-panel-soft">
            <div className="hero-panel-label">Focus</div>
            <ul className="hero-panel-list">
              <li>ZEC-denominated venture structures.</li>
              <li>Aligned founders and privacy primitives.</li>
              <li>Low-noise, high-intent relationships.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
