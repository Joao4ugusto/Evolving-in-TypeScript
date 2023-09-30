// Example 01 --> classes
export{ };

class Person1  {
   name: string;
   surname: string;

   constructor(name: string, surname:string){
    this.name = name;
    this.surname = surname;
   }

   displayName(): string {
    return `${this.name} ${this.surname}`;
   }
}

const person: Person1 = new Person1('João', 'Augusto');
console.log(person.displayName());

// Example 02 --> class (no constructor)

class Student {
   codStudent: number | undefined;
   nameStudent: string | undefined; 
}

const student = new Student();

const codStudent: number =  student.codStudent = 120;
const nameStudent: string = student.nameStudent = 'João Augusto'

console.log("cod: ", codStudent, "name: ", nameStudent );

 // Example 03 --> class (with constructor)

class Student1 {
   codStudent: number;
   nameStudent: string;

   constructor(codStudent: number, nameStudent: string){
      this.codStudent = codStudent;
      this.nameStudent = nameStudent;
   };

   listStudent(): void {
      console.log(this.codStudent);
      console.log(this.nameStudent)
   };
}

const student1 = new Student1(1002, 'João Augusto');

console.log(student1.codStudent, student1.nameStudent);

