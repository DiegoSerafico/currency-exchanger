export default class CurrencyExchanger {
  static getCurrency(currency) {
    return fetch(`https://v6.exchangerate-api.com/${process.env.API_KEY}/latest/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}