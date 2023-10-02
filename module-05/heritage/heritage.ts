export{}
// Example 01 

class Animal {
  toMove(distance: number){
    console.log('Animal moved:',distance,'KM');
  }
}

class Dog extends Animal {
  bark(){
    console.log('Au, Au!');
  }
}

const animal = new Dog();
animal.bark();
animal.toMove(20);

// Example 02

class Person {
  constructor(private name: string, private surname: string){
   this.name = name;
   this.surname = surname;
  }

  fullName(): string {
     return `My full name is: ${this.name} ${this.surname}`
  }
   
  firstName():string {
    return `my first name: ${this.name}`
  }
}

class Employee extends Person {
   constructor(name: string, surname: string, private employee: string ){
    super(name, surname);
   }

   returnName(): string {
    return super.fullName() + `, and Im ${this.employee}`;
   }
}

const employee = new Employee('João', 'Oliveira', 'Developer');
console.log(employee.fullName());
console.log(employee.returnName());

