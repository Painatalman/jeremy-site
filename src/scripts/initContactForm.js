export function initContactForm() {
  const modal = document.getElementById("contact-form-modal");
  const modalToggler = document.getElementById("contact-form-modal-button");

  if (!modal || !modalToggler) return;

  modalToggler.addEventListener("click", () => {
    modal.showModal();
  });

  const closeButton = modal.querySelector("[data-close]");
  closeButton?.addEventListener("click", () => modal.close());
}
