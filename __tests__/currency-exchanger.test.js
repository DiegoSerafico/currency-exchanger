import { exportAllDeclaration } from "@babel/types";
import CurrencyExchanger from "../src/currency-exchanger";

describe("convertCurrency", () => {

  test("should correctly convert a currency to another", () => {
    const data = CurrencyExchanger.convertCurrency(1,1.88);
    expect(data).toEqual(1.88);
  });
});

describe("exchange", () => {
  
  test("should calculate the amount of one currency to another", () => {
    return CurrencyExchanger.exchange("USD", "MXN", 5)
      .then(result => {
        
        expect(result).toEqual(99.623)
      })
  });
});