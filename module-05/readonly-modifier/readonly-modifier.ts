export{};
// Example 01 --> Use readonly

class Employee {
  readonly birthDate: Date;

  constructor(birthDate: Date){
    this.birthDate = birthDate;
  }
}

const employee = new Employee(new Date(2002, 10, 31));

console.log(employee);

// Example 02 --> use of readonly implicitly

class Employee01 {
  constructor(readonly birthDate: Date){
    this.birthDate = birthDate;
  }
}

const employee01 = new Employee01(new Date(2002, 10, 31));

console.log(employee01);

// Example 03 

class Employee02 {
  name: string;
  readonly codEmployee: number;

  constructor(name: string, codEmployee: number){
    this.name = name;
    this.codEmployee = codEmployee;
  }
}

const employee02 = new Employee02('João Augusto', 200);

console.log(employee02.name);
console.log(employee02.codEmployee);

// Example 04 --> use interface

interface Iemployee {
  name: string;
  codEmployee: number;
}

const Iemployee03: Readonly<Iemployee> = {
  name: 'João Augusto',
  codEmployee: 200,
}

// Iemployee03.name = 'João Augusto';
// Iemployee03.codEmployee = 300;
console.log(Iemployee03);

const Iemployee04: Iemployee = {
  name: 'João Oliveira',
  codEmployee: 230,
}

console.log(Iemployee04);

