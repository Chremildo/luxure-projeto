import { initFilters, focusSearch } from "./filters.js";
import { initModal } from "./modal.js";
import { initCarousel, initTestimonials } from "./carousel.js";
import { initTheme } from "./theme.js";
import { initForms } from "./forms.js";
import { initChatbot } from "./chatbot.js";
import { initTranslations } from "./translations.js";
import { initPortal } from "./portal.js";

// =======================================
// APPLICATION BOOTSTRAP
// Coordinates page behavior and shared UI
// =======================================
const initApp = () => {
  document.body.classList.add("is-loading");
  initTheme();
  initFilters();
  initModal();
  initCarousel();
  initTestimonials();
  initForms();
  initTranslations();
  initChatbot();
  initPortal();
  initNavigation();
  initScrollReveal();
  initCounters();
  initFloatingControls();
  initAccordions();
  initGuidePanels();
  initSearchShortcut();

  window.addEventListener("load", () => {
    document.querySelector("[data-loader]")?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
};

// =======================================
// NAVIGATION SYSTEM
// Handles mobile menu and sticky state
// =======================================
const initNavigation = () => {
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("[data-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");

  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu?.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      menu.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
};

// =======================================
// SCROLL REVEAL ANIMATIONS
// Reveals content as it enters the viewport
// =======================================
const initScrollReveal = () => {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  elements.forEach((element) => observer.observe(element));
};

// =======================================
// ANIMATED COUNTERS
// Counts metrics when visible
// =======================================
const initCounters = () => {
  const counters = document.querySelectorAll("[data-counter]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.counter);
      const suffix = target === 96 ? "%" : "";
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        element.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.6 });

  counters.forEach((counter) => observer.observe(counter));
};

// =======================================
// FLOATING CONTROLS
// Back-to-top and quick contact behavior
// =======================================
const initFloatingControls = () => {
  const backToTop = document.querySelector("[data-back-to-top]");

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    backToTop?.classList.toggle("is-visible", window.scrollY > 700);
  }, { passive: true });
};

// =======================================
// ACCESSIBLE ACCORDION
// Provides keyboard-friendly FAQ disclosure
// =======================================
const initAccordions = () => {
  document.querySelector("[data-accordion]")?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const panel = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
};

// =======================================
// LOCAL GUIDE PANELS
// Hides detailed guide content until clicked
// =======================================
const initGuidePanels = () => {
  document.querySelector("[data-guide-panels]")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-guide-toggle]");
    if (!button) return;
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    if (panel) panel.hidden = isOpen;
  });
};

// =======================================
// SEARCH SHORTCUTS
// Opens and focuses the property search card
// =======================================
const initSearchShortcut = () => {
  document.querySelector("[data-open-search]")?.addEventListener("click", focusSearch);
};

initApp();
