import { Quotes } from "./Quotes";

export class QuotesManager {
  constructor(dataServices) {
    this.dataServices = dataServices;
  }
  async getQuotes(url) {
    try {
      const data = await this.dataServices.getData(url);
      console.log(data);
      const quotes = new Quotes(
        data.rates.EUR,
        data.rates.PLN,
        data.rates.GBP,
        data.rates.CZK
      );

      return quotes;
    } catch (error) {
      console.error(error);
    }
  }

  async convert(balance, currency) {
    const data = await this.dataServices.getData(
      "https://api.frankfurter.dev/v1/latest?base=USD"
    );

    return balance * data.rates[currency];
  }
}
