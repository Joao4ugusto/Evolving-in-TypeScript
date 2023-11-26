import { EmailValidator, ZipCodeValidator } from "./validators";

let email = 'joaoaugusto311016@gmail.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid('98870000');

console.log(`O CEP 98870000 é válido? ${result2}`);