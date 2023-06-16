import { IGetStringInfoReturn } from "./Utils.d";

export const toUpperCase = (word: string) => {
  return word.toUpperCase();
};

export const getStringInfo = (string: string): IGetStringInfoReturn => ({
  lowerCase: string.toLowerCase(),
  upperCase: string.toUpperCase(),
  extraInfo: {},
});
