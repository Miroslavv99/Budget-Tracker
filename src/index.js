import "../public/styles.css";

import { TransactionController } from "./components/TransactionController";
import { UIController } from "./components/UIControlle";
import { Renderer } from "./components/Renderer";
import { FormHandler } from "./components/FormHandler";
import { Storage } from "./components/Storage";
import { DataServices } from "./components/Quotes/DataServices";
import { QuotesManager } from "./components/Quotes/QuotesManager";
import { QuotesRenderer } from "./components/Quotes/QuotesRenderer";

const dataServices = new DataServices();
const quotesManager = new QuotesManager(dataServices);
const quotesRenderer = new QuotesRenderer(quotesManager);

const storage = new Storage();
const transactionController = new TransactionController(storage);
const uiController = new UIController(transactionController, storage);
const renderer = new Renderer(uiController, quotesManager);
uiController.renderer = renderer;
const formHandler = new FormHandler(
  uiController,
  transactionController,
  renderer,
  quotesRenderer
);

formHandler.formInit();
formHandler.converterInit();

document.addEventListener("DOMContentLoaded", () => {
  quotesRenderer.renderQuotes("https://api.frankfurter.dev/v1/latest?base=USD");
});

const expenseButton = document.querySelector(".expense");
const incomeButton = document.querySelector(".income");

document.addEventListener("DOMContentLoaded", () => {
  const storedExpense = storage.getStoredExpenses();
  storedExpense.forEach((el) => {
    transactionController.getExpenses().push(el);
  });
  renderer.renderExpenses(transactionController.getExpenses());

  const storedIncomes = storage.getStoredIncomes();
  storedIncomes.forEach((el) => {
    transactionController.getIncomes().push(el);
  });
  renderer.renderIncomes(transactionController.getIncomes());

  const storedBalance = storage.getStoredBalance();
  transactionController.balance = storedBalance;

  renderer.renderBalance(transactionController.updateBalance());
});

expenseButton.addEventListener("click", () => {
  renderer.renderExpenses(transactionController.getExpenses());
});

incomeButton.addEventListener("click", () => {
  renderer.renderIncomes(transactionController.getIncomes());
});
