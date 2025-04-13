export class FormHandler {
  constructor(uiController, transactionController, renderer) {
    this.uiController = uiController;
    this.transactionController = transactionController;
    this.renderer = renderer;
  }

  formInit() {
    const mainForm = document.querySelector(".main-form");

    mainForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let sumValue = document.querySelector("#sum").value;
      let categoryValue = document.querySelector("#category").value;
      let transValue = document.querySelector("#transaction").value;

      if (transValue === "income") {
        this.uiController.addIncome(sumValue);
        this.renderer.renderBalance(this.transactionController.updateBalance());
      } else if (
        transValue === "expense" &&
        this.transactionController.updateBalance() !== 0
      ) {
        this.uiController.addExpense(sumValue, categoryValue);
        this.renderer.renderBalance(this.transactionController.updateBalance());
      } else {
        alert("Not enough balance");
      }

      mainForm.reset();
    });
  }
}
