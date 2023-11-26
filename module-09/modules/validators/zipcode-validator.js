"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = void 0;
class ZipCodeValidator {
    isValid(s) {
        const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;
        return zipCodeRegex.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
