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

function onboarding01(employee: {name: string}){
   return 'Welcome ' + employee.name;
};

console.log(onboarding01({name: 'João Augusto'}));

// Example 03 --> named object

interface Person {
  name: string,
  function: string
};

function onboarding02(person: Person){
  return(
    'welcome ' +
    person.name + 
    ' your role here will be ' +
    person.function
   )
}

console.log(onboarding02({name: 'João', function: 'Developer'}));

// Example 04 --> object as type alias

type Person03 = {
  name: string,
  function: string,
  linguage: string
};

function onboarding03(person: Person03){
  return 'welcome ' +
  person.name + 
  ' its function will be to ' + 
  person.function + 
  ' and you will work with ' + 
  person.linguage
};

console.log(onboarding03({name: 'João Augusto', function: 'developer', linguage: 'Js/Ts'}));

// Example 05 --> using optional in object

interface Person04 {
  name: string,
  function: string,
  linguage: string
  email?: string
}

function onboarding04(person: Person04){
  return 'welcome ' +
  person.name + 
  ' its function will be to ' + 
  person.function + 
  ' and you will work with ' + 
  person.linguage
};

console.log(onboarding04({name: 'João Augusto', function: 'developer', linguage: 'Js/Ts'}));

// Example 06 --> 'readonly' property (if you want to prohibit devs from modifying a certain object, use '
//only reading)


interface Person05 {
  name: string,
  function: string,
  linguage: string
  readonly email: string
}

function onboarding05(person: Person05){
  return 'welcome ' +
  person.name + 
  ' its function will be to ' + 
  person.function + 
  ' and you will work with ' + 
  person.linguage + 
  ' your email will be ' +
  person.email
};

console.log(onboarding05({
  name: 'João Augusto',
  function: 'developer',
  linguage: 'Js/Ts',
  email: 'joaoaugusto311016@gmail.com'
}));

// Example 07 --> types of extensions (inheritance)

interface Mother {
  name: string
};

interface Father {
  surname: string
};

interface Son extends Father, Mother {
  age: number
};

const son: Son = {
  name: 'João',
  surname: 'Augusto',
  age: 20
};

console.log(son);

// Example 08 --> types of intersections

interface Dog {
  type: string
};

interface Cat {
  type: string
};

type animal =  Dog & Cat;

// Example 09 --> Generic Objects

type User = {
  name: string,
  email: string
};

type Admin = {
  name: string,
  email: string,
  admin: true
};

const user: User  = {
  name: 'joao',
  email: 'joaoaugusto311016@gmail.com',
};

const admin: Admin = {
  name: 'João Augusto',
  email: 'joaoaugusto311016@gmail.com',
  admin: true
};

function accessSistem<T>(user: T): T {
   return user
};

console.log(accessSistem<User>(user));
console.log(accessSistem<Admin>(admin));

// function accessSistem(user: User): User {
//     return user;
// };

// console.log(accessSistem(user));

