"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> Basic example of object usage
const person01 = {
    name: 'João',
    surName: 'Augusto',
    age: 20,
    function: 'Developer'
};
console.log(person01);
// Example 02 --> object as function parameters (they can be anonymous)
function onboarding01(employee) {
    return 'Welcome ' + employee.name;
}
;
console.log(onboarding01({ name: 'João Augusto' }));
;
function onboarding02(person) {
    return ('welcome ' +
        person.name +
        ' your role here will be ' +
        person.function);
}
function onboarding03(person) {
    return 'welcome ' +
        person.name +
        ' its function will be to ' +
        person.function +
        ' and you will work with ' +
        person.linguage;
}
;
console.log(onboarding03({ name: 'João Augusto', function: 'developer', linguage: 'Js/Ts' }));
function onboarding04(person) {
    return 'welcome ' +
        person.name +
        ' its function will be to ' +
        person.function +
        ' and you will work with ' +
        person.linguage;
}
;
console.log(onboarding04({ name: 'João Augusto', function: 'developer', linguage: 'Js/Ts' }));
function onboarding05(person) {
    return 'welcome ' +
        person.name +
        ' its function will be to ' +
        person.function +
        ' and you will work with ' +
        person.linguage +
        ' your email will be ' +
        person.email;
}
;
console.log(onboarding05({
    name: 'João Augusto',
    function: 'developer',
    linguage: 'Js/Ts',
    email: 'joaoaugusto311016@gmail.com'
}));
;
;
;
const son = {
    name: 'João',
    surname: 'Augusto',
    age: 20
};
console.log(son);
;
;
const user = {
    name: 'joao',
    email: 'joaoaugusto311016@gmail.com',
};
const admin = {
    name: 'João Augusto',
    email: 'joaoaugusto311016@gmail.com',
    admin: true
};
function accessSistem(user) {
    return user;
}
;
console.log(accessSistem(user));
console.log(accessSistem(admin));
// function accessSistem(user: User): User {
//     return user;
// };
// console.log(accessSistem(user));
