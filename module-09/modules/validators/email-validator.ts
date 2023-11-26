//import { Validator as FormValidator } from "./validator";
import { Validator } from "./validator";

export default class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(s);
  }
}