export{}
// Example 01 --> type assertion

function displayFinalPrice(price: number, discount: number, format: boolean): number | string  {
   const pricewithDiscount = price * (1 - discount);
   return format ? `R$ ${pricewithDiscount}` : pricewithDiscount;
}

const displayFinalTrue = displayFinalPrice(100, 0.05, true);
const displayFinalFalse = displayFinalPrice(100, 0.05, false);
console.log(displayFinalTrue);
console.log(displayFinalFalse);

// Example 02 --> type assertion

// type Human = {
//  name: string;
//  age: number;
//  language: string;
// };

// const human01 = {
//   age: 29,
//   language: 'portugues'
// };

// const human02 = human01 as Human;
// console.log(human02.name.toLowerCase());

// Example 03 --> use type annotations

// type Human = {
//    name: string;
//    age: number;
//    language: string;
//   };
  
//   const human01 = {
//     age: 29,
//     language: 'portugues'
//   };
  
//   const human02: Human = human01;
//   console.log(human02.name.toLowerCase());