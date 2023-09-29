// Example 01 -->  functions (Named functions)

export{};

function addTwoNumbers(number1: number, number2: number): number {
  return number1 + number2;
}

const result = addTwoNumbers(10, 2);

console.log(result);

// Example  02 --> function anonymous

const greet = function(message: string){
  return message;
};

console.log(greet('Hi devs'));

// Example 03 --> Arrow function

const greet01 = (message: string) => {
  return message;
};

console.log(greet01('Hello developers'));

// Example 04 --> function constructor

const greet02 = new Function('message', 'return "speak " + message');

console.log(greet02('glacier!'));