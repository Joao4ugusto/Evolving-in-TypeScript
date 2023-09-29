"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 --> Default Parameters
function discount(price, discount = 0.08) {
    return price * (1 - discount);
}
;
console.log(discount(100));
// Example 02 --> Default parameters
function displayName(name, surname = 'Oliveira') {
    return name + ' ' + surname;
}
;
console.log(displayName('João'));
