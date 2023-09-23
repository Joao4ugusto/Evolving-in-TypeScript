"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> Throw exeption 
function error(message) {
    throw new Error(message);
}
console.log(error('error message 01'));
// Example 02 --> type never automatically inferred
function rejectMessage() {
    return error('error message 02');
}
console.log(rejectMessage());
// Example 03 --> Function containing infinite loop returns type 'never'
const loopInfinity = function loop() {
    while (true) {
        console.log('Hi devs');
    }
};
// console.log(loopInfinity());
// Example 04 --> Difference between types: 'never' x 'void'
// const variableVoid: void = null;
// const variableNever: never = null;
// console.log(variableVoid);
// console.log(variableNever);
