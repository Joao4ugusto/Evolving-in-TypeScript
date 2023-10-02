"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 
class Animal {
    toMove(distance) {
        console.log('Animal moved:', distance, 'KM');
    }
}
class Dog extends Animal {
    bark() {
        console.log('Au, Au!');
    }
}
const animal = new Dog();
animal.bark();
animal.toMove(20);
// Example 02
class Person {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.name = name;
        this.surname = surname;
    }
    fullName() {
        return `My full name is: ${this.name} ${this.surname}`;
    }
    firstName() {
        return `my first name: ${this.name}`;
    }
}
class Employee extends Person {
    employee;
    constructor(name, surname, employee) {
        super(name, surname);
        this.employee = employee;
    }
    returnName() {
        return super.fullName() + `, and Im ${this.employee}`;
    }
}
const employee = new Employee('João', 'Oliveira', 'Developer');
console.log(employee.fullName());
console.log(employee.returnName());
