export{};

// Example 01 --> type casting: "as"

const name: unknown = 'João Augusto';
console.log((name as string).toLowerCase());
console.log((name as string).toUpperCase());

// Example 02 --> type casting: "<>"

const Car = 'Gol';

const sizeString: number = (<string>Car).length;
console.log(sizeString);
