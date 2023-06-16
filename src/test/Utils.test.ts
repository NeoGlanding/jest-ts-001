import { IGetStringInfoReturn } from "../app/Utils.d";
import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("To uppercase function", () => {
    const sut = toUpperCase;

    it("should returning ABC when abc is provided", () => {
      const expected = "ABC";

      const actual = sut("ABC");
      expect(actual).toBe(expected);
    });
  });

  describe("Get string information function", (): void => {
    const sut = getStringInfo;

    it("should returning correct information by providing My-name arg", () => {
      const expected: IGetStringInfoReturn = {
        lowerCase: "my-name",
        upperCase: "MY-NAME",
        extraInfo: {},
      };

      const actual = sut("My-name");

      expect(actual.lowerCase).toBe(expected.lowerCase);
      expect(actual.upperCase).toBe(expected.upperCase);
      expect(actual.extraInfo).toEqual(expected.extraInfo);
    });
  });
});
