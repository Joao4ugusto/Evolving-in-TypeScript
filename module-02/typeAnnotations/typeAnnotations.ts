// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// --> Variáveis [ Type Annotations ] 
let nome: string = 'João Augusto'; 
console.log(nome);

// --> Array [ Type Annotations ] 
let animals: string[] = ['Cat', 'Dog', 'bird'];
console.log(animals);

// --> Object [ Type Annotations ] 
let car: {
  name: string,
  year: number ,
  value: number
};

car = {name: 'Gol', year: 2002, value: 20000 };
console.log(car);

// --> function [ Type Annotations ] 
function multiplyNumbers(number1: number, number2: number){
  return console.log('the result: ', number1 + number2) 
}
console.log(multiplyNumbers(10, 20));