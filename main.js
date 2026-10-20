"use strict";

const themeButton = document.querySelector("#theme-toggle");
const root = document.documentElement;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function savedTheme() {
  try {
    const value = localStorage.getItem("page-theme");
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = theme;
  if (themeButton) {
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.textContent = isDark ? "Ljóst þema" : "Dökkt þema";
  }
}

applyTheme(savedTheme() || (systemTheme.matches ? "dark" : "light"));

if (themeButton) {
  themeButton.hidden = false;
  themeButton.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("page-theme", nextTheme);
    } catch {
      // The switch also works when browser storage is unavailable.
    }
  });
}

systemTheme.addEventListener("change", (event) => {
  if (!savedTheme()) applyTheme(event.matches ? "dark" : "light");
});
