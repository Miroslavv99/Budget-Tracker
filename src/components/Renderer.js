export class Renderer {
  constructor(uiController, quotesManager) {
    this.quotesManager = quotesManager;
    this.uiController = uiController;
  }

  renderExpenses(expenses) {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    expenses.forEach((expense) => {
      const expenseCard = document.createElement("div");
      expenseCard.classList.add("expense-card");
      cardContainer.appendChild(expenseCard);

      const sumInfo = document.createElement("span");
      sumInfo.textContent = `-${expense.sum}`;
      expenseCard.appendChild(sumInfo);

      const category = document.createElement("span");
      category.textContent = expense.category;
      expenseCard.appendChild(category);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "DELETE";
      expenseCard.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        this.uiController.deleteExpense(expense.id);
      });
    });
  }

  renderIncomes(incomes) {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    incomes.forEach((income) => {
      const incomeCard = document.createElement("div");
      incomeCard.classList.add("expense-card");
      cardContainer.appendChild(incomeCard);

      const sumInfo = document.createElement("span");
      sumInfo.textContent = `+${income.sum}`;
      incomeCard.appendChild(sumInfo);

      const textSpan = document.createElement("span");
      textSpan.textContent = "Salary";
      incomeCard.appendChild(textSpan);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.innerHTML = "&times;";
      incomeCard.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        this.uiController.deleteIncome(income.id);
      });
    });
  }

  renderBalance(balance) {
    const balanceCard = document.querySelector(".balance");

    balanceCard.textContent = `${balance}$`;
  }
}
