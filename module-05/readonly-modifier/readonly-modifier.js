"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 --> Use readonly
class Employee {
    birthDate;
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
const employee = new Employee(new Date(2002, 10, 31));
console.log(employee);
// Example 02 --> use of readonly implicitly
class Employee01 {
    birthDate;
    constructor(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
}
const employee01 = new Employee01(new Date(2002, 10, 31));
console.log(employee01);
// Example 03 
class Employee02 {
    name;
    codEmployee;
    constructor(name, codEmployee) {
        this.name = name;
        this.codEmployee = codEmployee;
    }
}
const employee02 = new Employee02('João Augusto', 200);
console.log(employee02.name);
console.log(employee02.codEmployee);
const Iemployee03 = {
    name: 'João Augusto',
    codEmployee: 200,
};
// Iemployee03.name = 'João Augusto';
// Iemployee03.codEmployee = 300;
console.log(Iemployee03);
const Iemployee04 = {
    name: 'João Oliveira',
    codEmployee: 230,
};
console.log(Iemployee04);
