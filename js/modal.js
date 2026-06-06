// =======================================
// MODAL WINDOWS
// Opens dialogs and restores close behavior
// =======================================
export const initModal = () => {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-modal-target]");
    const close = event.target.closest("[data-modal-close]");

    if (trigger) {
      document.getElementById(trigger.dataset.modalTarget)?.showModal();
    }

    if (close) {
      close.closest("dialog")?.close();
    }
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
};
