// =======================================
// THEME SYSTEM
// Persists light and dark mode preference
// =======================================
export const initTheme = () => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  const storedTheme = localStorage.getItem("lennan-theme");

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("lennan-theme", theme);
    if (label) label.textContent = theme === "light" ? "Dark" : "Light";
  };

  setTheme(storedTheme || "dark");

  toggle?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "light" ? "dark" : "light");
  });
};
