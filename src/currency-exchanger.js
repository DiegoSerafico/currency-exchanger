//--fixconst fetch = require('node-fetch');

export default class CurrencyExchanger {
  static getCurrencyJSON(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY
    }/latest/${currency}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        throw Error(error);
      });
  }
 
  static convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
  }

  static exchange(initialCurrency, resultCurrency, initialAmount) {
    return new Promise(function(resolve, reject) {
      CurrencyExchanger.getCurrencyJSON(initialCurrency)
        .then(function(json) {
          let exchangeRate = json.conversion_rates[resultCurrency];
          let result = CurrencyExchanger.convertCurrency(initialAmount, exchangeRate);
          resolve(result);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
}