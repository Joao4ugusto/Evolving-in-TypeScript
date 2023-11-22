
// Example 01 --> Generics classes

class Box<T> {
  private item: T;

  constructor(item: T){
    this.item = item;
  }

  setItens(item: T){
    this.item = item;
  }

  getItens(){
    return this.item;
  }
}

const boxString = new Box<string>('João Augusto');
console.log(boxString);

// Example 02 --> Generics classes
class Estudante<T, U> {
  private id?: T;
  private nome?: U;

  setValor(id: T, nome: U): void {
    this.id = id;
    this.nome = nome;
  }

  retornarValor(): void {
    console.log(`Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`);
  }
}

const estudante = new Estudante<number, string>();

estudante.setValor(101, "João Augusto");
estudante.retornarValor();

const estudanteSecundario = new Estudante<string, string>();

estudanteSecundario.setValor("201", "Rose");
estudanteSecundario.retornarValor(); 