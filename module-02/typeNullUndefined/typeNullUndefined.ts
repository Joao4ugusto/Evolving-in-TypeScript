// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// Example 01 --> Null

let variableTestNull = null;
console.log(variableTestNull);
console.log(typeof variableTestNull);

// Example 02 --> undefined

let variableTestUndefined;
console.log(variableTestUndefined);
console.log(typeof variableTestUndefined);

// Example 03 --> Null vs Undefined

console.log('Example 01: ', null == undefined );
console.log('Example 02: ', null === undefined);