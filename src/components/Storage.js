import { Expense } from "./Expense";
import { Income } from "./Income";

export class Storage {
  saveExpenses(items) {
    localStorage.setItem("expenses", JSON.stringify(items));
  }

  saveIncomes(items) {
    localStorage.setItem("incomes", JSON.stringify(items));
  }

  saveBalance(balance) {
    localStorage.setItem("balance", JSON.stringify(balance));
  }

  getStoredExpenses() {
    const expenses = localStorage.getItem("expenses");
    if (!expenses) return [];
    const parsedExpenses = JSON.parse(expenses);

    return parsedExpenses.map(
      (expense) => new Expense(expense.id, expense.sum, expense.category)
    );
  }

  getStoredIncomes() {
    const incomes = localStorage.getItem("incomes");
    if (!incomes) return [];
    const parsedIncomes = JSON.parse(incomes);
    return parsedIncomes.map((income) => new Income(income.id, income.sum));
  }

  getStoredBalance() {
    const balance = JSON.parse(localStorage.getItem("balance"));
    return balance;
  }
}
