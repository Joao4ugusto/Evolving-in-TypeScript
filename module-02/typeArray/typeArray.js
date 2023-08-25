"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> use of square brackets
let fruits = ['🍇', '🍉', '🍊', '🍎'];
console.log(fruits[3]);
// Example 02 --> use of array object
let fruits1 = ['🍇', '🍉', '🍊', '🍎'];
console.log(fruits1[2]);
// Example 03 --> Adding more strings with push
let languages = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(languages);
languages.push('Japonês');
console.log(languages);
// Example 04 --> Identify array size - 'length' method
let languages1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(languages1.length);
// Example 05 --> Array with spread Operator
let numbers = [1, 2, 3, 4, 5];
numbers = [...numbers, 6, 7, 8, 9, 10];
console.log(numbers);
// Example 06 --> Array with loops
let programmingLanguages = ['Java', 'JavaScript', 'Typescript', 'NodeJs'];
function functionLanguages(programmingLanguages) {
    for (let i = 0; i < programmingLanguages.length; i++) {
        console.log(programmingLanguages[i]);
    }
}
functionLanguages(programmingLanguages);
