"use client";

import { useEffect } from "react";
import { scrollToSection, openMail } from "../clientActions";

export default function Hero() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
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
      { threshold: 0.16 }
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
            partners to build and scale ZEC-denominated venture positions off-exchange.
            No public dashboards. No social hype. Just structured access and clear
            alignment.
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
              Speak with the team
            </button>
          </div>

          <div className="hero-points">
            <div className="hero-point">
              <span className="hero-point-label">ZEC-native</span>
              <p>
                Structures are designed around ZEC exposure, not as an afterthought
                in a generic crypto basket.
              </p>
            </div>
            <div className="hero-point">
              <span className="hero-point-label">Private by default</span>
              <p>
                No public accounts, no leaderboard culture. Participation is handled
                quietly and directly.
              </p>
            </div>
            <div className="hero-point">
              <span className="hero-point-label">Selective access</span>
              <p>
                We work with a limited number of committed, long-term partners who
                understand Zcash and privacy.
              </p>
            </div>
          </div>
        </div>

        <aside className="hero-side reveal">
          <div className="hero-panel">
            <div className="hero-panel-label">Why now</div>
            <ul className="hero-panel-list">
              <li>Regenerative interest in privacy infrastructure.</li>
              <li>Maturing Zcash tooling and ecosystem.</li>
              <li>Attractive entry terms for long-duration capital.</li>
            </ul>
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
