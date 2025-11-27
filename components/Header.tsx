"use client";

import Image from "next/image";
import { scrollToSection, openMail } from "./clientActions";

export default function Header() {
  return (
    <header className="top">
      <div className="top-inner">
        <button
          className="brand"
          type="button"
          onClick={() => scrollToSection("top")}
        >
          <div className="brand-logo">
            <Image
              src="/assets/zcash-primary-logo-white-yellow.png"
              alt="Zcash.Ventures"
              width={120}
              height={32}
              priority
              className="brand-logo-img"
            />
          </div>
          <div className="brand-meta">
            <div className="brand-name">Zcash.Ventures</div>
            <div className="brand-tag">
              Private ZEC-Denominated Venture Access
            </div>
          </div>
        </button>

        <nav className="top-nav" aria-label="Primary navigation">
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
            Bonus
          </button>
          <button
            type="button"
            className="top-link"
            onClick={() => scrollToSection("calculator")}
          >
            Calculator
          </button>
          <button
            type="button"
            className="top-link"
            onClick={() => scrollToSection("process")}
          >
            Process
          </button>
        </nav>

        <div className="top-actions">
          <div className="social-links">
            <a
              href="https://x.com/zcashventures"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://t.me/zcashventures"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Telegram"
            >
              TG
            </a>
            <a
              href="https://www.linkedin.com/company/zcash-ventures"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>

          <button
            type="button"
            className="top-cta"
            onClick={openMail}
          >
            <span>Contact</span>
            <span className="top-cta-dot" />
          </button>
        </div>
      </div>
    </header>
  );
}
