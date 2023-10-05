export{};
// Example 01 --> Use simple interfaces

interface Person {
  name: string;
  surname: string;
  age: number;
}

function displayName(person: Person){
 return `
 Name: ${person.name},
 surname: ${person.surname},
 age: ${person.age}
 `
}

const joao = {
  name: 'João',
  surname: 'Oliveira',
  age: 20,
}

console.log(displayName(joao));

// Example 02 --> optional property usage

interface Book {
  title: string;
  author: string;
  pages?: number;
}

const book: Book = {
  title: 'Typescript',
  author: 'João',
}

console.log(book);

// Example 03 --> Interface with Read-Only and Optional Properties

interface Car {
  readonly model: string;
  year: number;
  value?: number;
}

const car: Car = {
  model: 'fusca',
  year: 2000
}

console.log(car);

// Example 04 --> Interface with implements Class

interface Animal {
  name: string;
  age: number;
  isalive: boolean;
  eat(tipoComida: string): void;
}

class Cat implements Animal {
  name: string;
  age: number;
  isalive: boolean;

  constructor(name: string, age: number, isalive: boolean) {
    this.name = name;
    this.age = age;
    this.isalive = isalive;
  }

  eat(tipoComida: string): void {
    console.log(`the cat ${this.name} 
    is eaten ${tipoComida}`);
  }
}

const cat = new Cat('Totó', 10, true);
console.log(cat);
cat.eat('portion');

// Exemplo 05 --> Interfaces vs Alias Type

interface person_02 {
  name: string;
  surname: string;
  age: number;
}

type person_03 = {
  name: string;
  surname: string;
  age: number;
}
