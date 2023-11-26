"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    isValid(s) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}
exports.default = EmailValidator;
