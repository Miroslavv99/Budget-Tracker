import { Expense } from "./Expense";
import { Income } from "./Income";
import { QuotesManager } from "./Quotes/QuotesManager";
import { DataServices } from "./Quotes/DataServices";
import { th } from "date-fns/locale";

const dataServices = new DataServices();
const quotesManager = new QuotesManager(dataServices);

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
    const income = this.incomes.reduce(
      (acc, curr) => acc + parseInt(curr.sum || 0),
      0
    );

    const expense = this.expenses.reduce(
      (acc, curr) => acc + parseInt(curr.sum || 0),
      0
    );

    this.balance = income - expense;
    console.log(this.balance);
    return this.balance;
  }
}
