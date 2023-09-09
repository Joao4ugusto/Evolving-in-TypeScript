// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// Example 01 --> Simple use of tuple in typescript
let person: [string, string, number];
person = ['João Augusto', 'Developer', 20];
console.log(person);

// Example 02 --> Accessing value to tuple
let person1: [string, string, number];
person1 = ['João Augusto', 'Developer', 20];
console.log(person1[1]);

// Example 03 --> Another way to use tuple in TS (with labels) 
let person2: [name: string, function: string, year: number] = ['João Augusto', 'Developer', 20]
console.log(person2);

// Example 04 --> Tuple with spread operetor
let listFruits: [string, ... string[]] = ['🍎', '🍊', '🍉','🍇'];
console.log(... listFruits);

// Example 05 --> list homogeneity of tuple
let listFruits2: [number, boolean, ... string[]] = [20, true, ... listFruits];
console.log(listFruits2);

// Example 06 --> Use tuple with function
function listPerson(names: string[], years: number[]){
  return [... names, ... years];
}
let result = listPerson(['João', 'Rose'], [20, 50]);
console.log(result);

// Exaple 07 --> Labeled tuple with spread operator in function
type name = | [firstName: string, surname: string]
            | [firstName: string, middleName: string, surname: string];
function cratePerson(... name: name){
   return [... name];
}
console.log(cratePerson('João', 'Oliveira'));
console.log(cratePerson('João',  'Augusto', 'Oliveira'));
