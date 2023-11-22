"use strict";
// Example 01 --> Generics classes
class Box {
    item;
    constructor(item) {
        this.item = item;
    }
    setItens(item) {
        this.item = item;
    }
    getItens() {
        return this.item;
    }
}
const boxString = new Box('João Augusto');
console.log(boxString);
// Example 02 --> Generics classes
class Estudante {
    id;
    nome;
    setValor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    retornarValor() {
        console.log(`Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`);
    }
}
const estudante = new Estudante();
estudante.setValor(101, "João Augusto");
estudante.retornarValor();
const estudanteSecundario = new Estudante();
estudanteSecundario.setValor("201", "Rose");
estudanteSecundario.retornarValor();
