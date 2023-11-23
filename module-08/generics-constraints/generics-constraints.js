"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obterPersonMaiorQUe(person, age) {
    return person.filter(person => person.age > age);
}
const persons = [
    { name: 'João', age: 20 },
    { name: 'Rose', age: 59 },
    { name: 'Ale', age: 31 },
];
const pessoaMaior = obterPersonMaiorQUe(persons, 58);
console.log(pessoaMaior);
// Example 02 --> Generics constraints
function juntarObjetos(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2,
    };
}
const pessoa = juntarObjetos({ name: 'Rose', }, { age: 22 });
console.log(pessoa);
// Example 03 --> Type parameter in generic constraints
/*function prop<T, K>(objeto: T, chave: K) {
  return objeto[chave];
}*/
function prop2(objeto, chave) {
    return objeto[chave];
}
const pessoa4 = prop2({ nome: 'João' }, 'nome');
console.log(pessoa4);
/*const pessoa5 = prop2(
  { nome: 'João' }, 'idade'
);

console.log(pessoa5);*/
// Example 01 --> 
class Uri {
    alunos;
    professores;
    constructor(aluno, professores) {
        this.alunos = aluno;
        this.professores = professores;
    }
    setDados(alunos, professores) {
        this.alunos = alunos;
        this.professores = professores;
    }
    getDados() {
        return `
    ${this.alunos} and ${this.professores}
    `;
    }
}
const UriCap2 = new Uri('João', 'Paulo');
console.log(UriCap2.getDados);
