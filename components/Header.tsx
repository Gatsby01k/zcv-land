"use client";

import Image from "next/image";
import { scrollToSection } from "./clientActions";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zv-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
        
        {/* Brand */}
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-3 text-left text-zv-text hover:text-white"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zv-bg-soft shadow-zv-soft ring-1 ring-white/10">
            <Image
              src="/assets/zcash-brandmark-yellow.webp"
              alt="Zcash.Ventures"
              width={22}
              height={22}
            />
          </div>

          <div className="hidden sm:block">
            <div className="text-[0.68rem] uppercase tracking-[0.25em] text-zv-muted">
              Zcash.Ventures
            </div>
            <div className="text-xs text-zv-text">
              Private ZEC-denominated ventures
            </div>
          </div>
        </button>

        {/* Nav */}
        <div className="flex items-center gap-4">

          {/* ⭐ SOCIAL ICONS FIRST */}
          <div className="hidden md:flex items-center gap-3">

            {/* Telegram */}
            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full border border-white/10 hover:border-zv-gold hover:text-zv-gold transition text-zv-muted/70"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l10-5-2 10-3-2-2 2.5-.5-4.5L11 5" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/your_profile"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full border border-white/10 hover:border-zv-gold hover:text-zv-gold transition text-zv-muted/70"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l8 8m0-8L4 12" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your_profile"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full border border-white/10 hover:border-zv-gold hover:text-zv-gold transition text-zv-muted/70"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="2" height="8" />
                <circle cx="4" cy="3" r="1" />
                <path d="M8 8v5m0-3.5c0-1.5 1-2.5 2.5-2.5S13 7.5 13 9v4" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/your_profile"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full border border-white/10 hover:border-zv-gold hover:text-zv-gold transition text-zv-muted/70"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="10" height="10" rx="3" />
                <circle cx="8" cy="8" r="2.5" />
                <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your_repo"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full border border-white/10 hover:border-zv-gold hover:text-zv-gold transition text-zv-muted/70"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 1.5c-3.3 0-6 2.7-6 6 0 2.5 1.6 4.6 3.8 5.4-.1-.5-.1-1.2 0-1.7.1-.6.4-1 .7-1.3-1.3-.2-2.7-.7-2.7-3 0-.7.2-1.2.6-1.7-.1-.2-.3-.8 0-1.7 0 0 .5-.2 1.8.7.5-.1 1-.2 1.6-.2s1.1.1 1.6.2c1.3-.9 1.8-.7 1.8-.7.3.9.2 1.5 0 1.7.4.5.6 1 .6 1.7 0 2.3-1.4 2.8-2.7 3 .4.3.7.9.7 1.8v1.2" />
              </svg>
            </a>

          </div>

          {/* Program */}
          <button
            type="button"
            onClick={() => scrollToSection("program")}
            className="hidden md:inline-flex rounded-full px-3 py-1.5 text-xs font-medium text-zv-muted transition hover:bg-white/5 hover:text-zv-text"
          >
            Program
          </button>

          {/* Process */}
          <button
            type="button"
            onClick={() => scrollToSection("process")}
            className="hidden md:inline-flex rounded-full px-3 py-1.5 text-xs font-medium text-zv-muted transition hover:bg-white/5 hover:text-zv-text"
          >
            Process
          </button>

          {/* Contact — now a real mailto link */}
          <a
            href="mailto:invest@zcash.ventures"
            className="inline-flex items-center gap-2 rounded-full bg-zv-text px-4 py-2 text-xs font-semibold text-zv-bg shadow-zv-soft transition hover:bg-white"
          >
            <span>Contact</span>
            <span className="h-1.5 w-1.5 rounded-full bg-zv-bg" />
          </a>
        </div>
      </div>
    </header>
  );
}
