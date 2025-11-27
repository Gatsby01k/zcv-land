"use client";

export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 110;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

export function openMail() {
  if (typeof window === "undefined") return;
  window.location.href = "mailto:invest@zcash.ventures";
}
