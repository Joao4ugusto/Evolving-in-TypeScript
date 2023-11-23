export{}
// Example 01 --> Generics constraints

interface Person {
  name: string;
  age: number;
}

function obterPersonMaiorQUe<T extends Person>(person: T[], age: number): T[] {
  return person.filter(person => person.age > age);
}

const persons: Person[] = [
   {name: 'João', age: 20 },
   {name: 'Rose', age: 59 },
   {name: 'Ale', age: 31 },
]

const pessoaMaior = obterPersonMaiorQUe(persons, 58);
console.log(pessoaMaior);


// Example 02 --> Generics constraints

function juntarObjetos<U , V>(objeto1: U , objeto2: V){
  return {
    ... objeto1 ,
    ... objeto2 ,
  }
}

const pessoa = juntarObjetos(
  {name: 'Rose', },
  {age: 22},
)

console.log(pessoa);

// Example 03 --> Type parameter in generic constraints

/*function prop<T, K>(objeto: T, chave: K) {
  return objeto[chave];
}*/

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
  return objeto[chave];
}

const pessoa4 = prop2(
  { nome: 'João' }, 'nome'
);

console.log(pessoa4);

/*const pessoa5 = prop2(
  { nome: 'João' }, 'idade'
);

console.log(pessoa5);*/


