"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayName(person) {
    return `
 Name: ${person.name},
 surname: ${person.surname},
 age: ${person.age}
 `;
}
const joao = {
    name: 'João',
    surname: 'Oliveira',
    age: 20,
};
console.log(displayName(joao));
const book = {
    title: 'Typescript',
    author: 'João',
};
console.log(book);
const car = {
    model: 'fusca',
    year: 2000
};
console.log(car);
class Cat {
    name;
    age;
    isalive;
    constructor(name, age, isalive) {
        this.name = name;
        this.age = age;
        this.isalive = isalive;
    }
    eat(tipoComida) {
        console.log(`the cat ${this.name} 
    is eaten ${tipoComida}`);
    }
}
const cat = new Cat('Totó', 10, true);
console.log(cat);
cat.eat('portion');
