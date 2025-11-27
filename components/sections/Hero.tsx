"use client";

import { useEffect } from "react";
import { openMail, scrollToSection } from "@/components/clientActions";

export default function Hero() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-left reveal">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>Privacy-driven ventures access</span>
        </div>
        <h1 className="hero-title">
          Structured access to <span>Zcash</span> for privacy-aligned capital.
        </h1>
        <p className="hero-subtitle">
          Zcash.Ventures is a private, ventures-style program for investors who
          treat privacy infrastructure as a long-term thesis rather than
          short-term volatility.
        </p>
        <p className="hero-highlight">
          Early participants may receive up to <strong>+25% bonus</strong> on
          their contribution under the current program.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" type="button" onClick={openMail}>
            <span>Contact the team</span>
            <span>↗</span>
          </button>
          <button
            className="btn-ghost"
            type="button"
            onClick={() => scrollToSection("process")}
          >
            <span>How it works</span>
          </button>
        </div>
        <div className="hero-meta">
          <span>PRIVACY-FIRST VENTURES</span>
          <span>ZCASH-FOCUSED ACCESS</span>
        </div>
      </div>

      <aside className="hero-right reveal">
        <div className="hero-right-inner">
          <div className="hero-mark-row">
            <div className="hero-mark">
              <div className="hero-mark-logo">
                <img
                  src="/assets/zcash-brandmark-yellow.png"
                  alt="Zcash logo"
                />
              </div>
              <div>
                <div className="hero-mark-text-main">ZCASH</div>
                <div className="hero-mark-text-sub">PRIVACY NETWORK</div>
              </div>
            </div>
            <div className="hero-chip">ZERO-KNOWLEDGE · PRIVACY</div>
          </div>
          <p className="hero-right-copy">
            The program intentionally avoids the “platform” model. There are no
            public dashboards, accounts or feeds — only a private channel,
            negotiated structures and clearly documented terms.
          </p>
          <div className="hero-right-footer">
            <div>
              <div className="hero-right-label">Channel</div>
              <div className="hero-right-value">invest@zcash.ventures</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="hero-right-label">Format</div>
              <div className="hero-right-value">Private ventures program</div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
