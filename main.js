"use strict";

const themeButton = document.querySelector("#theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.textContent = isDark ? "Ljóst þema" : "Dökkt þema";
}

applyTheme("light");
themeButton.hidden = false;
themeButton.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});
