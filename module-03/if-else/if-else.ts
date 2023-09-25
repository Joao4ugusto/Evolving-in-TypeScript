// Example 01 --> use of if/else conditional structure
const numberMax = 100;

let counter = 90;

if(counter < numberMax){
  counter++;
}

console.log(counter);

// Example 02 --> use of if/else conditional structure
const drivingPermit = 18;

if(drivingPermit > 18){
  console.log('Are you old enough to drive?!');
} 

console.log(drivingPermit);

// Example 03 --> use of if/else conditional structure

const drivingPermit01 = 16;

if(drivingPermit01 > 18){
  console.log('Are you old enough to drive?');
} else {
  console.log('you can t drive');
}

console.log(drivingPermit01);

// Example 04 --> use of if/else/else-if conditional structure

let discount: number;
let counterItems: number = 9;

if(counterItems > 0 && counterItems <= 5){
  discount = 5;
} else if (counterItems > 5 && counterItems <= 10){
  discount = 10;
} else {
  discount = 15;
}

console.log(`you received a discount: ${discount} %`);

// Example 05 --> ternary operator

const votingAge:number = 17;

// if(votingAge >= 18){
//   console.log('you can vote!');
// } else {
//   console.log('you can t vote');
// };

const voting: string = (votingAge >= 18) ? 'you can vote!' : 'you can t vote';

console.log(voting);