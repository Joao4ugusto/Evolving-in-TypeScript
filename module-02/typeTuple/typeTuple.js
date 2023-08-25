"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> Simple use of tuple in typescript
let person;
person = ['João Augusto', 'Developer', 20];
console.log(person);
// Example 02 --> Accessing value to tuple
let person1;
person1 = ['João Augusto', 'Developer', 20];
console.log(person1[1]);
// Example 03 --> Another way to use tuple in TS (with labels) 
let person2 = ['João Augusto', 'Developer', 20];
console.log(person2);
// Example 04 --> Tuple with spread operetor
let listFruits = ['🍎', '🍊', '🍉', '🍇'];
console.log(...listFruits);
// Example 05 --> list homogeneity of tuple
let listFruits2 = [20, true, ...listFruits];
console.log(listFruits2);
// Example 06 --> Use tuple with function
function listPerson(names, years) {
    return [...names, ...years];
}
let result = listPerson(['João', 'Rose'], [20, 50]);
console.log(result);
function cratePerson(...name) {
    return [...name];
}
console.log(cratePerson('João', 'Oliveira'));
console.log(cratePerson('João', 'Augusto', 'Oliveira'));
