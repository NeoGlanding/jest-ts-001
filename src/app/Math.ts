export const isCurrencyFormatted = (value: string) => {
  const currencyPattern = /^(\$)?([1-9]\d{0,2}(,\d{3})*|0)?(\.\d{2})?$/;

  return currencyPattern.test(value);
};

export function formatToCurrencyFormat(number: string | number): string {
  if (isCurrencyFormatted(number as string)) return number as string;

  const parsedNumber = typeof number === "string" ? parseFloat(number) : number;

  if (isNaN(parsedNumber)) return "0.00";

  const formattedNumber = parsedNumber.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}
