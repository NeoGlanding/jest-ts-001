import { PasswordService, UserType } from "../../app/Password";
import { adminCases, userCases } from "./cases";
// import { IAdminCases, adminCases } from "./cases";

describe("Password Service test suite", (): void => {
  describe("Password checker", (): void => {
    let passService: PasswordService;

    beforeEach(() => {
      passService = new PasswordService();
    });

    describe("Admin cases", (): void => {
      it.each(adminCases)(
        "$type user with $password password validity should be $valid",
        ({ password, type, valid, errors }) => {
          const actual = passService.validate(type, password);

          expect(actual).toEqual({ valid, errors });
        }
      );
    });

    describe("User cases", (): void => {
      it.each(userCases)(
        "$type user with $password password validity should be $valid",
        ({ password, type, valid, errors }) => {
          const actual = passService.validate(type, password);

          expect(actual).toEqual({ valid, errors });
        }
      );
    });
  });
});
