export class CalculatorClass {
  public add(num1: number, num2: number) {
    return num1 + num2;
  }

  public division(num1: number, num2: number) {
    if (num2 === 0) throw new Error("Cannot divide by 0");

    return num1 / num2;
  }
}
