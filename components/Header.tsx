"use client";

import Image from "next/image";
import { scrollToSection, openMail } from "./clientActions";

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
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("program")}
            className="hidden rounded-full px-3 py-1.5 text-xs font-medium text-zv-muted transition hover:bg-white/5 hover:text-zv-text md:inline-flex"
          >
            Program
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("process")}
            className="hidden rounded-full px-3 py-1.5 text-xs font-medium text-zv-muted transition hover:bg-white/5 hover:text-zv-text md:inline-flex"
          >
            Process
          </button>

          {/* ⭐ Social links */}
          <div className="hidden md:flex items-center gap-2 mr-2">

            <a
              href="https://t.me/zcashventures"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-zv-muted/70 hover:text-zv-gold hover:border-zv-gold transition"
            >
              TG
            </a>

            <a
              href="https://x.com/zcashventures"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-zv-muted/70 hover:text-zv-gold hover:border-zv-gold transition"
            >
              X
            </a>

            <a
              href="https://linkedin.com/company/zcash-ventures"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-zv-muted/70 hover:text-zv-gold hover:border-zv-gold transition"
            >
              IN
            </a>

            <a
              href="https://instagram.com/zcashventures"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-zv-muted/70 hover:text-zv-gold hover:border-zv-gold transition"
            >
              IG
            </a>

          </div>

          <button
            type="button"
            onClick={openMail}
            className="inline-flex items-center gap-2 rounded-full bg-zv-text px-4 py-2 text-xs font-semibold text-zv-bg shadow-zv-soft transition hover:bg-white"
          >
            <span>Contact</span>
            <span className="h-1.5 w-1.5 rounded-full bg-zv-bg" />
          </button>
        </div>
      </div>
    </header>
  );
}
