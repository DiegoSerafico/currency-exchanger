export default class CurrencyExchanger {
  getExchangeRates(currency) {
    return fetch(`https://v6.exchangerate-api.com/${process.env.API_KEY}/latest/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json.body.conversion_rates;
    })
    .catch(function(error) {
      throw error;
    })
  }

  // 10, .5 -> 
  convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
  }

  // called by UI
  exchange(initialCurrency, resultCurrency, initialAmount) {
    let exchangeRates = getExchangeRates(initialCurrency);
    let exchangeRate = exchangeRates[resultCurrency];
    return this.convertCurrency(initialAmount, exchangeRate);
  }
}