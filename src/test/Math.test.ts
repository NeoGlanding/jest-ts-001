import { formatToCurrencyFormat } from "../app/Math";

interface IFormatToCurrencyCaseObj {
  input: string | number;
  datatype: string;
  expected: string | number;
}

const formatToCurrencyCase: IFormatToCurrencyCaseObj[] = [
  {
    input: 20000,
    datatype: "number",
    expected: "20,000.00",
  },
  {
    input: "20000",
    datatype: "string",
    expected: "20,000.00",
  },
  {
    input: "20,000.00",
    datatype: "string",
    expected: "20,000.00",
  },
  {
    input: "skjdk",
    datatype: "string",
    expected: "0.00",
  },
];

describe("Math helper test suite", (): void => {
  describe("formatToCurrencyFormat function", (): void => {
    it.each(formatToCurrencyCase)(
      "$input typeof $datatype should return $expected",
      ({ input, expected }) => {
        expect(formatToCurrencyFormat(input)).toBe(expected);
      }
    );
  });
});
