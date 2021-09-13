import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchanger from './currency-exchanger';

$(function() {
  $(".btn").on("click", function() {
    const amount = $('#amountToExchange').val();
    const currencyToExchangeFrom = $('#currencyToExchangeFrom').val();
    const currencyToExchangeTo = $('#currencyToExchangeTo').val();
    console.log("Amount: " + amount + " from " + currencyToExchangeFrom + " to " + currencyToExchangeTo);
    CurrencyExchanger.exchange(currencyToExchangeFrom, currencyToExchangeTo, amount)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
});