import { formatToCurrency } from "./formatToCurrency"

test("should format values as expected", () => {
  expect(formatToCurrency(0)).toEqual("R$ 0,00")
  expect(formatToCurrency(1)).toEqual("R$ 0,01")
  expect(formatToCurrency(110)).toEqual("R$ 1,10")
  expect(formatToCurrency(100010)).toEqual("R$ 1.000,10")
  expect(formatToCurrency(1234567890)).toEqual("R$ 12.345.678,90")
})
