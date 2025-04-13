export class DataServices {
  async getData(url) {
    try {
      const response = await fetch(url);
      const quotesData = await response.json();
      console.log(quotesData);
      return quotesData;
    } catch (error) {
      console.error(error);
    }
  }
}
