"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 --> static property
class Employee {
    name;
    surname;
    title;
    static hiring = 0;
    constructor(name, surname, title) {
        this.name = name;
        this.surname = surname;
        this.title = title;
        Employee.hiring++;
    }
}
const person1 = new Employee('João', 'Augusto', 'Developer');
const person2 = new Employee('João', 'Oliveira', 'Developer');
console.log(Employee.hiring);
// Example 02 --> static methods
class Employee_01 {
    name;
    surname;
    title;
    static hiring = 0;
    constructor(name, surname, title) {
        this.name = name;
        this.surname = surname;
        this.title = title;
        Employee_01.hiring++;
    }
    static returnHiring() {
        return Employee_01.hiring;
    }
}
const employee_01 = new Employee_01('João', 'Augusto', 'Developer Advocate');
const funcionario_02 = new Employee_01('Jurema', 'Lemos', 'Professora');
console.log(Employee_01.returnHiring());
class Dog {
    name;
    age;
    races;
    static QTD_dog = 0;
    constructor(name, age, races) {
        this.name = name;
        this.age = age;
        this.races = races;
        Dog.QTD_dog++;
        console.log(Dog.QTD_dog);
    }
    displayInformation() {
        console.log(`O cachorro ${this.name} tem ${this.age}.`);
    }
}
const dog_01 = new Dog('Pipoca', 4, ['Spitz Alemão']);
const dog_02 = new Dog('Farofa', 6, ['Yorkshire']);
