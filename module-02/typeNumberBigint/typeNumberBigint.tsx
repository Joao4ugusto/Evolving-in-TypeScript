// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// --> Example to number
let num1: number = 23.0; 
let num2: number = 0x6739;
let num3: number = 0o577;
let num4: number = 110;
console.log('number - floating',num1);
console.log('number - hexadecimal', num2);
console.log('number - Octal',num3);
console.log('number - Binário',num4);

// --> Example to bigint
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);