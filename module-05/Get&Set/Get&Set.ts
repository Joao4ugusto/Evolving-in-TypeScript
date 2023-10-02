export{}
// Example 01 --> Use get

class Square {
  private width: number;
  private height: number;

  constructor(width: number, height: number){
    this.width = width;
    this.height = height;
  }

  get calculateSquare(){
    return this.width * this.height;
  }
}

console.log(new Square(20, 10).calculateSquare);

// Example 02 --> use set

class Person {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  returnNamePerson(name: string){
    this.name = name;
  }
}

const person = new Person('Pedro');
console.log(person);
person.returnNamePerson('João Augusto');
console.log('My name is: ', person.name);

// Example 03 --> get [ thicker explanation ]

class Student {
  private _name: string = 'João Augusto';
  private _semester: number = 4;
  private _course: string = 'CC';

  public get nameStudent(){
   return this._name;
  } 
}

const student = new Student();
const result = student.nameStudent;
console.log(result);

// Example 04 --> set [ thicker explanation ]

class Student01 {
  name: string;
  semester: number;
  course: string;

  constructor(name: string, semester: number, course: string){
    this.name = name;
    this.semester = semester;
    this.course = course;
  }

  public get course01(){
   return this.course; 
  }

  public set courses(course: string){
   this.course = course;
  }
}
const student01 = new Student01('João Augusto', 5, 'CC');
console.log(student01.course01)
student01.courses = 'ADM';
console.log(student01);