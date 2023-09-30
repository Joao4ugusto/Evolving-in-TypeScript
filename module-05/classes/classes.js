"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person1 {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    displayName() {
        return `${this.name} ${this.surname}`;
    }
}
const person = new Person1('João', 'Augusto');
console.log(person.displayName());
// Example 02 --> class (no constructor)
class Student {
    codStudent;
    nameStudent;
}
const student = new Student();
const codStudent = student.codStudent = 120;
const nameStudent = student.nameStudent = 'João Augusto';
console.log("cod: ", codStudent, "name: ", nameStudent);
// Example 03 --> class (with constructor)
class Student1 {
    codStudent;
    nameStudent;
    constructor(codStudent, nameStudent) {
        this.codStudent = codStudent;
        this.nameStudent = nameStudent;
    }
    ;
    listStudent() {
        console.log(this.codStudent);
        console.log(this.nameStudent);
    }
    ;
}
const student1 = new Student1(1002, 'João Augusto');
console.log(student1.codStudent, student1.nameStudent);
