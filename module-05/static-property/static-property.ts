export{}

// Example 01 --> static property

class Employee {
  static hiring: number = 0;

  constructor(private name: string, private surname: string, private title: string){
    Employee.hiring++;
  }
}

const person1 = new Employee('João', 'Augusto', 'Developer');
const person2 = new Employee('João', 'Oliveira', 'Developer');

console.log(Employee.hiring);

// Example 02 --> static methods

class Employee_01 {
  private static hiring = 0;

  constructor(
    private name: string,
    private surname: string,
    private title: string,
  ) {
    Employee_01.hiring++;
  }

  public static returnHiring() {
    return Employee_01.hiring;
  }
}

const employee_01 = new Employee_01(
  'João',
  'Augusto',
  'Developer Advocate',
);

const funcionario_02 = new Employee_01('Jurema', 'Lemos', 'Professora');
console.log(Employee_01.returnHiring());

// ==> Exemplo 03 - static property
type Race = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Dog {
  public name: string;
  public age: number;
  public races: Race[];
  public static QTD_dog = 0;

  constructor(name: string, age: number, races: Race[]) {
    this.name = name;
    this.age = age;
    this.races = races;

    Dog.QTD_dog++;
    console.log(Dog.QTD_dog);
  }

  public displayInformation(): void {
    console.log(`O cachorro ${this.name} tem ${this.age}.`);
  }
}

const dog_01 = new Dog('Pipoca', 4, ['Spitz Alemão']);
const dog_02 = new Dog('Farofa', 6, ['Yorkshire']);



