export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum PasswordErrors {
  LENGTH = "Password must be 8 length",
  UPPERCASE = "Password must contain uppercase letter",
  LOWERCASE = "Password must contain lowercase letter",
  NUMBER = "Password must contain number",
}

export class PasswordService {
  public validate(
    user: UserType,
    password: string
  ): { valid: boolean; errors: string[] } {
    const errors = [];

    // requirement1
    password.length < 8 ? errors.push(PasswordErrors.LENGTH) : null;

    // requirement2
    const req2 = /[A-Z]/g;
    req2.test(password) ? null : errors.push(PasswordErrors.UPPERCASE);

    // requirement3
    const req3 = /[a-z]/g;
    req3.test(password) ? null : errors.push(PasswordErrors.LOWERCASE);

    // Admin Req
    if (user === UserType.ADMIN) {
      const adminReq = /[0-9]/g;
      adminReq.test(password) ? null : errors.push(PasswordErrors.NUMBER);
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}
