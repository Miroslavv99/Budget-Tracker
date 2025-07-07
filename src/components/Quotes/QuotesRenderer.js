export class QuotesRenderer {
  constructor(quoteManager) {
    this.quoteManager = quoteManager;
  }

  async renderQuotes(url) {
    const quotesContainer = document.querySelector(".exchange");

    try {
      const data = await this.quoteManager.getQuotes(url);

      const eur = document.createElement("div");
      eur.textContent = `EUR: ${data.eur}`;
      quotesContainer.appendChild(eur);

      const pln = document.createElement("div");
      pln.textContent = `PLN: ${data.pln}`;
      quotesContainer.appendChild(pln);

      const gbp = document.createElement("div");
      gbp.textContent = `GBP: ${data.gbp}`;
      quotesContainer.appendChild(gbp);

      const czk = document.createElement("div");
      czk.textContent = `CZK: ${data.czk}`;
      quotesContainer.appendChild(czk);
    } catch (error) {
      console.error(error);
    }
  }

  async renderConverted(balance, currency, symbol) {
    const balanceCard = document.querySelector(".converted-balance");
    const convertedBalance = await this.quoteManager.convert(balance, currency);

    balanceCard.textContent = `${convertedBalance.toFixed(1)} ${symbol}`;
  }
}
