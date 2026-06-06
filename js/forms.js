// =======================================
// FORM VALIDATION AND NOTIFICATIONS
// Validates inputs and displays user feedback
// =======================================
export const initForms = () => {
  const toast = document.querySelector("[data-toast]");
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 3400);
  };

  const validate = (form) => {
    const fields = [...form.querySelectorAll("input, select, textarea")];
    const invalid = fields.find((field) => !field.checkValidity());
    if (invalid) {
      invalid.focus();
      showToast(invalid.validationMessage || "Please complete the required fields.");
      return false;
    }
    return true;
  };

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!validate(form)) return;

    const formData = new FormData(form);
    const message = [
      "New website consultation request",
      "",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Interest: ${formData.get("interest")}`,
      `Payment preference: ${formData.get("payment") || "Not selected"}`,
      "",
      `Message: ${formData.get("message")}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/5544998843639?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener");
    form.reset();
    showToast("WhatsApp opened with the client's message ready to send.");
  });

  document.querySelector("[data-newsletter-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validate(event.currentTarget)) return;
    event.currentTarget.reset();
    showToast("You are subscribed to the private market brief.");
  });

  document.addEventListener("click", (event) => {
    const agent = event.target.closest("[data-contact-agent]")?.dataset.contactAgent;
    if (!agent) return;
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    const message = document.querySelector("[data-contact-form] textarea");
    if (message) message.value = `I would like to speak with ${agent}.`;
    showToast(`Contact form prepared for ${agent}.`);
  });
};
