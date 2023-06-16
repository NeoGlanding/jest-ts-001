import { PasswordErrors, UserType } from "../../app/Password";

interface IBaseCase {
  type: UserType;
  password: string;
  errors: PasswordErrors[];
  valid: boolean;
}

export const generateCase = (
  type: UserType,
  password: string,
  errors: PasswordErrors[]
): IBaseCase => {
  return {
    type,
    password,
    errors,
    valid: errors.length === 0,
  };
};

export const userCases: IBaseCase[] = [
  generateCase(UserType.USER, "Asdasd1234", []),
  generateCase(UserType.USER, "9020ac", [
    PasswordErrors.LENGTH,
    PasswordErrors.UPPERCASE,
  ]),
  generateCase(UserType.USER, "123991028391208C", [PasswordErrors.LOWERCASE]),
];

export const adminCases: IBaseCase[] = [
  generateCase(UserType.ADMIN, "Asdasd1234!", []),
  generateCase(UserType.ADMIN, "Acabacabp", [PasswordErrors.NUMBER]),
  generateCase(UserType.ADMIN, "PASPAPPSASPO123", [PasswordErrors.LOWERCASE]),
];
