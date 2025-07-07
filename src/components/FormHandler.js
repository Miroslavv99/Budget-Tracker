export class FormHandler {
  constructor(uiController, transactionController, renderer, quotesRenderer) {
    this.uiController = uiController;
    this.transactionController = transactionController;
    this.renderer = renderer;
    this.quotesRenderer = quotesRenderer;
  }

  formInit() {
    const mainForm = document.querySelector(".main-form");

    mainForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let sumValue = document.querySelector("#sum").value;
      let categoryValue = document.querySelector("#category").value;
      let transValue = document.querySelector("#transaction").value;

      if (sumValue === "") {
        alert("Please enter amount");
      } else if (transValue === "income") {
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

  converterInit() {
    const currencySelector = document.querySelector("#currency");

    currencySelector.addEventListener("change", async (event) => {
      const currency = event.target.value;
      const balance = this.transactionController.updateBalance();

      switch (currency) {
        case "eur":
          await this.quotesRenderer.renderConverted(balance, "EUR", "€");
          break;
        case "pln":
          await this.quotesRenderer.renderConverted(balance, "PLN", "zł");
          break;
        case "gbp":
          await this.quotesRenderer.renderConverted(balance, "GBP", "£");
          break;
        case "czk":
          await this.quotesRenderer.renderConverted(balance, "CZK", "kč");
          break;
      }
    });
  }
}
