import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchanger from './currency-exchanger';

$(function() {
  $(".btn").on("click", function() {
    $("#output").empty();
    const amount = $('#amountToExchange').val();
    const currencyToExchangeFrom = $('#currencyToExchangeFrom').val();
    const currencyToExchangeTo = $('#currencyToExchangeTo').val();
    CurrencyExchanger.exchange(currencyToExchangeFrom, currencyToExchangeTo, amount)
      .then(result => {
        $("#output").append(`<p>Amount: ${amount}</p>
        <p>From: ${currencyToExchangeFrom}.</p>
        <p>To: ${currencyToExchangeTo}.</p>
        <p>Result: ${result}</p>`);
      })
      .catch(error => {
        alert(error);
      });
  });
});