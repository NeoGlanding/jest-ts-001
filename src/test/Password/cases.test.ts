import { PasswordErrors, UserType } from "../../app/Password";
import { generateCase } from "./cases";

describe("Generate Password Case suite", (): void => {
  describe("generateCaseFunction", (): void => {
    it("should return correct case when providing admin type", () => {
      expect(generateCase(UserType.ADMIN, "Asdasd1234!", [])).toEqual({
        type: "ADMIN",
        password: "Asdasd1234!",
        errors: [],
        valid: true,
      });
    });

    it("should return correct case when providing user type", () => {
      expect(
        generateCase(UserType.USER, "101010", [
          PasswordErrors.LENGTH,
          PasswordErrors.LOWERCASE,
          PasswordErrors.UPPERCASE,
        ])
      ).toEqual({
        type: "USER",
        password: "101010",
        errors: [
          PasswordErrors.LENGTH,
          PasswordErrors.LOWERCASE,
          PasswordErrors.UPPERCASE,
        ],
        valid: false,
      });
    });
  });
});
