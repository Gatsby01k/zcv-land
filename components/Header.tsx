"use client";

import { scrollToSection, openMail } from "@/components/clientActions";

export default function Header() {
  return (
    <header className="top">
      <div className="top-inner">
        <div className="brand">
          <div className="brand-logo">
            <img
              src="/assets/zcash-primary-logo-white-yellow.png"
              alt="Zcash.Ventures"
            />
          </div>
          <div className="brand-tag">PRIVACY · VENTURES PROGRAM</div>
        </div>
        <nav className="top-nav">
          <div className="top-pill">PRIVATE PROGRAM · 2025</div>
          <button
            type="button"
            className="top-link"
            onClick={() => scrollToSection("program")}
          >
            Program
          </button>
          <button
            type="button"
            className="top-link"
            onClick={() => scrollToSection("bonus")}
          >
            +25% Bonus
          </button>
          <button
            type="button"
            className="top-link"
            onClick={() => scrollToSection("calculator")}
          >
            Illustration
          </button>
          <button
            type="button"
            className="top-link"
            onClick={() => scrollToSection("process")}
          >
            Process
          </button>
          <button className="top-cta" type="button" onClick={openMail}>
            <span className="top-cta-dot" />
            <span>Contact</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
