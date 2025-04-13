import { Quotes } from "./Quotes";

export class QuotesManager {
  constructor(dataServices) {
    this.dataServices = dataServices;
  }
  async createQuotes(url) {
    try {
      const data = await this.dataServices.getData(url);
      console.log(data);
      const quotation = new Quotes(
        data.conversion_rates.EUR,
        data.conversion_rates.UAH,
        data.conversion_rates.GBP,
        data.conversion_rates.CZK
      );

      return quotation;
    } catch (error) {
      console.error(error);
    }
  }
}
