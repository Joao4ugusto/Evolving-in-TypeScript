"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// --> Example to number
let num1 = 23.0;
let num2 = 0x6739;
let num3 = 0o577;
let num4 = 110;
console.log('number - floating', num1);
console.log('number - hexadecimal', num2);
console.log('number - Octal', num3);
console.log('number - Binário', num4);
// --> Example to bigint
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
