// =======================================
// CLIENT PORTAL DEMO
// Front-end only login state for portfolio presentation
// =======================================
export const initPortal = () => {
  const portal = document.querySelector("[data-portal]");
  const form = portal?.querySelector("[data-login-form]");
  const dashboard = portal?.querySelector("[data-dashboard]");
  const title = portal?.querySelector("[data-dashboard-title]");
  const adminPanel = portal?.querySelector("[data-admin-panel]");
  const logout = portal?.querySelector("[data-logout]");
  const toast = document.querySelector("[data-toast]");
  if (!portal || !form || !dashboard || !title || !adminPanel) return;

  const notify = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const showDashboard = (role) => {
    form.hidden = true;
    dashboard.hidden = false;
    adminPanel.hidden = role !== "admin";
    title.textContent = role === "admin" ? "Administration dashboard" : "Client dashboard";
    localStorage.setItem("james-portal-role", role);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    const role = email === "admin@jameslennan.com" && password === "admin123" ? "admin" : "client";

    if ((email === "client@example.com" && password === "client123") || role === "admin") {
      showDashboard(role);
      notify(role === "admin" ? "Admin demo unlocked." : "Client dashboard unlocked.");
      return;
    }

    notify("Use the demo login shown below the form.");
  });

  logout?.addEventListener("click", () => {
    localStorage.removeItem("james-portal-role");
    dashboard.hidden = true;
    form.hidden = false;
    notify("Logged out of demo portal.");
  });

  const storedRole = localStorage.getItem("james-portal-role");
  if (storedRole === "admin" || storedRole === "client") showDashboard(storedRole);
};
