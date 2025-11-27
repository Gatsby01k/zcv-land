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
    );

    if (prefersReducedMotion?.matches) {
      items.forEach((el) => el.classList.add("is-visible"));
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
      { threshold: 0.18 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="top"
      className="relative border-b border-white/5 bg-gradient-to-b from-zv-bg to-zv-bg-soft pt-28 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 lg:flex-row lg:items-start lg:gap-16">
        {/* Main copy */}
        <div className="reveal flex-1 space-y-8">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zv-muted">
            Private ZEC-Denominated Ventures
          </p>

          <h1 className="text-balance text-3xl font-semibold leading-tight text-zv-text sm:text-4xl lg:text-[2.65rem]">
            Discreet access to curated Zcash-focused
            <span className="bg-gradient-to-r from-zv-gold-soft via-zv-gold to-zv-teal bg-clip-text text-transparent">
              {" "}
              venture structures.
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-zv-muted">
            Zcash.Ventures works with a small group of long-term, privacy-aligned
            partners to build and scale ZEC-denominated venture positions
            off-exchange. No public dashboards. No social hype. Just structured
            access and clear alignment.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("program")}
              className="inline-flex items-center justify-center rounded-full bg-zv-gold px-5 py-2.5 text-xs font-semibold text-zv-bg shadow-zv-soft transition hover:bg-zv-gold-soft"
            >
              Explore the program
            </button>
            <button
              type="button"
              onClick={openMail}
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zv-text/90 transition hover:border-white/30 hover:bg-white/5"
            >
              Contact the team
            </button>
          </div>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.7rem] text-zv-muted">
            <div className="flex items-center gap-2">
              <span className="font-medium text-zv-text/90">
                Illustrative early bonus
              </span>
              <span className="rounded-full bg-zv-bg-chip px-2 py-1 text-[0.68rem] text-zv-gold">
                Up to +25%
              </span>
            </div>
            <span className="h-px w-8 bg-white/10" aria-hidden="true" />
            <div>
              <span className="mr-1 text-zv-muted/80">Denomination</span>
              <span className="font-medium text-zv-text/90">ZEC-native</span>
            </div>
            <span className="h-px w-8 bg-white/10" aria-hidden="true" />
            <div>
              <span className="mr-1 text-zv-muted/80">Approach</span>
              <span className="font-medium text-zv-text/90">
                Low-noise, high-intent
              </span>
            </div>
          </div>
        </div>

        {/* Side panel */}
        <aside className="reveal w-full max-w-sm space-y-4">
          {/* Основная панель (framework) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-zv-bg-card/90 p-4 shadow-zv-soft">
            <div className="mb-4 flex items-center justify-between text-[0.7rem]">
              <span className="rounded-full bg-zv-bg-chip px-2 py-1 text-zv-muted">
                Illustrative framework
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zv-muted/70">
                Non-binding
              </span>
            </div>

            <div className="space-y-3 text-xs text-zv-muted">
              <div className="flex items-baseline justify-between">
                <span>Capital profile</span>
                <span className="font-medium text-zv-text">
                  Long-term, ZEC-aligned
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span>Access</span>
                <span className="font-medium text-zv-text">
                  Private ZEC-denominated ventures
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span>Reporting</span>
                <span className="font-medium text-zv-text">
                  Structured, periodic, discreet
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-gradient-to-r from-zv-bg-soft to-zv-bg px-3 py-3 text-[0.7rem] text-zv-muted">
              Participation, economics and structure are agreed bilaterally and
              subject to documentation, jurisdiction and suitability.
            </div>
          </div>

          {/* Панель “Focus” */}
          <div className="rounded-3xl border border-white/8 bg-zv-bg-card/80 p-4">
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zv-muted">
              Focus
            </div>
            <ul className="space-y-2 text-xs text-zv-muted">
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
