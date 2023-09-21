"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> Type Any
const a = 20;
const b = 10;
const result1 = a + b;
console.log(result1);
// Example 02 --> Implicitly inserted any type
let frase; // Type Any default
frase = 'Hi, I am from João';
// Example 03 --> When should we use type any
const forms = {
    name: 'João',
    surname: 'Oliveira',
    age: 20
};
console.log(forms);
