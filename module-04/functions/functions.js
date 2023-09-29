"use strict";
// Example 01 -->  functions (Named functions)
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
const result = addTwoNumbers(10, 2);
console.log(result);
// Example  02 --> function anonymous
const greet = function (message) {
    return message;
};
console.log(greet('Hi devs'));
// Example 03 --> Arrow function
const greet01 = (message) => {
    return message;
};
console.log(greet01('Hello developers'));
// Example 04 --> function constructor
const greet02 = new Function('message', 'return "speak " + message');
console.log(greet02('glacier!'));
