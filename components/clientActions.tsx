"use client";

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // высота фикс-хедера + небольшой запас
  const HEADER_OFFSET = 110;

  const rect = el.getBoundingClientRect();
  const offset = rect.top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

export function openMail() {
  window.location.href = "mailto:invest@zcash.ventures";
}
