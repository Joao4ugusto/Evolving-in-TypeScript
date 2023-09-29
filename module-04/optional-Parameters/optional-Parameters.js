"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 --> Optional Parameters
function informDataPerson(idPerson, name, email) {
    console.log('Id employee: ', idPerson, 'Name: ', name);
    if (email != undefined)
        console.log('Email: ', email);
}
;
informDataPerson(1, 'João', 'joaoaugusto311016@gmail.com');
// Example 02 --> Optional Parameters
function messageLog(message, userId) {
    const hourLog = new Date().toLocaleTimeString();
    console.log(hourLog, message, userId || 'user not logged in');
}
;
messageLog('Hi');
messageLog('Hello', 100);
let person;
person = {
    idEmployee: 100,
    name: 'João'
};
console.log(person);
