"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 --> modifier public
class Students01 {
    codStudent;
    nameStudent;
    constructor(codStudent, nameStudent) {
        this.codStudent = codStudent;
        this.nameStudent = nameStudent;
    }
    displayStudent() {
        return [this.codStudent, this.nameStudent];
    }
}
const student01 = new Students01(10, 'João Augusto');
const codStudent = student01.codStudent;
const nameStudent = student01.nameStudent;
console.log(codStudent);
console.log(nameStudent);
// Example 02 --> modifier private
class Students02 {
    codStudent;
    nameStudent;
    age;
    constructor(codStudets, nameStudents, age) {
        this.codStudent = codStudets;
        this.nameStudent = nameStudents;
        this.age = age;
    }
    displayStudents02() {
        return `cod: ${this.codStudent} name: ${this.nameStudent} idade: ${this.age}`;
    }
}
const students02 = new Students02(102, 'João', 20);
console.log(students02.displayStudents02());
// Example 03 --> protect
class Students03 {
    codStudent03;
    nameStudent03;
    constructor(cod, name) {
        this.codStudent03 = cod;
        this.nameStudent03 = name;
    }
}
class Person extends Students03 {
    course;
    constructor(cod, name, course) {
        super(cod, name);
        this.course = course;
    }
    displayPerson() {
        return `cod: ${this.codStudent03} name: ${this.nameStudent03} course: ${this.course}}`;
    }
}
const person01 = new Person(200, 'João Augusto', 'Java');
console.log(person01.displayPerson());
