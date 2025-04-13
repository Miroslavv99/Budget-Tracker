export class UIController {
  constructor(transactionController, storage, renderer) {
    this.transactionController = transactionController;
    this.storage = storage;
    this.renderer = renderer;
  }

  addExpense(sum, category) {
    this.transactionController.addExpense(sum, category);
    this.transactionController.updateBalance();
    this.storage.saveExpenses(this.transactionController.getExpenses());
    this.renderer.renderExpenses(this.transactionController.getExpenses());
  }

  deleteExpense(expenseID) {
    this.transactionController.deleteExpense(expenseID);
    this.storage.saveExpenses(this.transactionController.getExpenses());
    this.renderer.renderBalance(this.transactionController.updateBalance());
    this.renderer.renderExpenses(this.transactionController.getExpenses());
  }

  addIncome(sum) {
    this.transactionController.addIncome(sum);
    this.transactionController.updateBalance();
    this.storage.saveIncomes(this.transactionController.getIncomes());
    this.renderer.renderIncomes(this.transactionController.getIncomes());
  }

  deleteIncome(incomeID) {
    this.transactionController.deleteIncome(incomeID);
    this.storage.saveIncomes(this.transactionController.getIncomes());
    this.renderer.renderBalance(this.transactionController.updateBalance());
    this.renderer.renderIncomes(this.transactionController.getIncomes());
  }
}
