import { Expense } from "./Expense";
import { Income } from "./Income";

export class TransactionController {
  constructor(storage) {
    this.storage = storage;
    this.expenses = [];
    this.incomes = [];
    this.balance = 0;
  }

  addExpense(sum, category) {
    const expense = new Expense(crypto.randomUUID(), sum, category);
    this.expenses.push(expense);
  }

  deleteExpense(expenseID) {
    this.expenses = this.expenses.filter((el) => el.id !== expenseID);
  }

  addIncome(sum) {
    const income = new Income(crypto.randomUUID(), sum);
    this.incomes.push(income);
  }

  deleteIncome(incomeID) {
    this.incomes = this.incomes.filter((el) => el.id !== incomeID);
  }

  getExpenses() {
    console.log(this.expenses);
    return this.expenses;
  }

  getIncomes() {
    console.log(this.incomes);
    return this.incomes;
  }

  updateBalance() {
    let incRes = 0;
    this.incomes.forEach((el) => {
      let num = parseInt(el.sum) || 0;
      incRes += num;
    });

    let expRes = 0;
    this.expenses.forEach((el) => {
      let num = parseInt(el.sum) || 0;
      expRes -= num;
    });

    this.balance = incRes + expRes;
    console.log(this.balance);
    return this.balance;
  }
}
