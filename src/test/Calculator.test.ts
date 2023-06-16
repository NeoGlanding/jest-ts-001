import { CalculatorClass } from "../app/Calculator";

interface IAddCase {
  num1: number;
  num2: number;
  expectation: number;
}

interface IDivideCase extends IAddCase {
  error?: boolean;
}

const addCases: IAddCase[] = [
  {
    num1: 2,
    num2: 3,
    expectation: 5,
  },
  {
    num1: 4,
    num2: 8,
    expectation: 12,
  },
];

const divideCases: IDivideCase[] = [
  {
    num1: 10,
    num2: 5,
    expectation: 2,
  },
  {
    num1: 12,
    num2: 2,
    expectation: 6,
  },
  {
    num1: 13,
    num2: 2,
    expectation: 6.5,
  },
  {
    num1: 0,
    num2: 4,
    expectation: 0,
  },
  {
    num1: 4,
    num2: 0,
    expectation: 0,
    error: true,
  },
];

describe("Calculator helpers test suite", (): void => {
  let sut: CalculatorClass;

  beforeEach(() => {
    sut = new CalculatorClass();
  });

  afterEach(() => {});

  describe("add function", (): void => {
    it.each(addCases)(
      "$num1 + $num2 should return $expectation",
      ({ num1, num2, expectation }) => {
        expect(sut.add(num1, num2)).toBe(expectation);
      }
    );
  });

  describe("divide function", (): void => {
    it.each(divideCases)(
      "$num1 / $num2 should return $expectation",
      ({ num1, num2, expectation, error }) => {
        if (error) {
          const fn = () => sut.division(num1, num2);

          expect(fn).toThrowError("Cannot divide by 0");
        } else {
          expect(sut.division(num1, num2)).toBe(expectation);
        }
      }
    );
  });
});
