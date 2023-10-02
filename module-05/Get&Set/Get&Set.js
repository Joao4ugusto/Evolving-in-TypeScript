"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 --> Use get
class Square {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get calculateSquare() {
        return this.width * this.height;
    }
}
console.log(new Square(20, 10).calculateSquare);
// Example 02 --> use set
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    returnNamePerson(name) {
        this.name = name;
    }
}
const person = new Person('Pedro');
console.log(person);
person.returnNamePerson('João Augusto');
console.log('My name is: ', person.name);
// Example 03 --> get [ thicker explanation ]
class Student {
    _name = 'João Augusto';
    _semester = 4;
    _course = 'CC';
    get nameStudent() {
        return this._name;
    }
}
const student = new Student();
const result = student.nameStudent;
console.log(result);
// Example 04 --> set [ thicker explanation ]
class Student01 {
    name;
    semester;
    course;
    constructor(name, semester, course) {
        this.name = name;
        this.semester = semester;
        this.course = course;
    }
    get course01() {
        return this.course;
    }
    set courses(course) {
        this.course = course;
    }
}
const student01 = new Student01('João Augusto', 5, 'CC');
console.log(student01.course01);
student01.courses = 'ADM';
console.log(student01);
