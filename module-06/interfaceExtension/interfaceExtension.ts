export{};

// Example 01 --> interfaces with extends

interface Animal {
  name: string;
  age: number;
  size: string;
};

interface Dog extends Animal {
  race: string;
}

const dog: Dog = {
  name: 'Toby',
  age: 2,
  size: 'average',
  race: 'bull Dog'
}

console.log(dog);

// Example 02 --> Multiple Interface Extension

interface Dog_01 {
  name: string;
}

interface Cat_01 {
  name: string;
}

interface   Animal_01 extends Dog_01, Cat_01 {
  age: number;
}

const animal_01: Animal_01 = {
  name: 'Rabito',
  age: 5.
} 

console.log(animal_01);

// Example 03 --> use of omit

interface Employee {
  id: number;
  name: string;
  wage: number;
}

interface Developer extends Omit<Employee, 'id' | 'wage' > {
  id: string;
  wage: string;
  programminglanguag: string;
}

const developer: Developer = {
  id: '0001',
  name: 'João Augusto',
  wage: '10k',
  programminglanguag: 'Js/ts',
}

console.log(developer);

// Exemplo 04 - use of pipe

interface Employee_02 {
  id: number | string;
  name: string;
  wage: number | string;
}

interface Developer_02 extends Employee_02 {
  id: string;
  wage: string;
  programminglanguag: string;
}

const developer_02: Developer_02 = {
  id: 'js-123',
  name: 'Glaucia Lemos',
  wage: '10k',
  programminglanguag: 'JavaScript',
}

console.log(developer_02)