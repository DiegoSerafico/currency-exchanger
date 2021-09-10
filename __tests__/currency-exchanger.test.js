import { exportAllDeclaration } from "@babel/types";
import CurrencyExchanger from "../src/currency-exchanger";

describe("CurrencyExchanger", () => {

  test("should correctly convert a currency to another", () => {
    const result = new CurrencyExchanger();
    expect(result.convertCurrency(1,1.88)).toEqual(1.88);
  });
});