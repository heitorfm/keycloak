export default class ModalUtils {
  modalTitle: string;
  modalMessage: string;
  confirmModalBtn: string;
  cancelModalBtn: string;
  closeModalBtn: string;
  constructor() {
    this.modalTitle = ".pf-c-modal-box .pf-c-modal-box__title-text";
    this.modalMessage = ".pf-c-modal-box .pf-c-modal-box__body";

    this.confirmModalBtn = "#modal-confirm";
    this.cancelModalBtn = "#modal-cancel";
    this.closeModalBtn = ".pf-c-modal-box .pf-m-plain";
  }

  confirmModal() {
    cy.get(this.confirmModalBtn).click();

    return this;
  }

  cancelModal() {
    cy.get(this.cancelModalBtn).click();

    return this;
  }

  closeModal() {
    cy.get(this.closeModalBtn).click();

    return this;
  }

  checkModalTitle(title: string) {
    cy.get(this.modalTitle).invoke("text").should("eq", title);

    return this;
  }

  checkModalMessage(message: string) {
    cy.get(this.modalMessage).invoke("text").should("eq", message);

    return this;
  }
}
