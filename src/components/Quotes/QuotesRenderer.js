export class QuotesRenderer {
  constructor(quoteManager) {
    this.quoteManager = quoteManager;
  }

  async renderQuotes(url) {
    const quotesContainer = document.querySelector(".exchange");

    try {
      const data = await this.quoteManager.createQuotes(url);

      const eur = document.createElement("div");
      eur.textContent = `EUR: ${data.eur}`;
      quotesContainer.appendChild(eur);

      const uah = document.createElement("div");
      uah.textContent = `UAH: ${data.uah}`;
      quotesContainer.appendChild(uah);

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
}
