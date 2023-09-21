// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// Example 01 --> type Unknown

let valueVariable: unknown;

valueVariable = 'João';
valueVariable = 123;
valueVariable = true;
valueVariable = [];

// Example 02 --> Error when testing changing the variable type 'Unknown'

// let value: unknown;

// let value1: boolean = value;
// let value1: any[] = value;
// let value1: number = value;
// let value1: string = value;

// Example 03 --> Any vs Unknown

let somethingAny: any;
let somethingUnknown: unknown;

console.log(somethingAny.toFixed());
// console.log(somethingUnknown.toFixed());

// Unknown needs to be tested before using the unknown variable
if(typeof somethingUnknown === 'number'){
  console.log(somethingUnknown.toFixed());
}
