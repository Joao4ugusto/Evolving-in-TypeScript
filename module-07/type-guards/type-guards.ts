export{}

// Example 01 --> type guards: typeof
 type alphanumeric =  number | string;

 function displayName(a: alphanumeric, b: alphanumeric){
   if(typeof a === 'number' && typeof b === 'number'){
    return a+b;
   } 

   if(typeof a === 'string' && typeof b === 'string'){
    return a.concat(b);
   }
   throw new Error('both values ​​must be of the same type');   
 } 

 console.log(displayName(10, 20));
 console.log(displayName('João', '10'));
//  console.log(displayName('João', 20));

 // Example 02 --> type guard: instanceof

 class Car {
  name: string;
  brand: string;

  constructor(name: string, brand: string){
    this.name = name;
    this.brand = brand;
  }
 }

 class Motorcycle {
  name: string;
  age: number;

  constructor(name: string, age: number){
   this.name = name;
   this.age = age;
  }
 }

 function vehicleDetails(vehicle: Car | Motorcycle){
   if(vehicle instanceof Car){
    return `The name to the Car: ${vehicle.name} and yours brand: ${vehicle.brand} `;
   } else if(vehicle instanceof Motorcycle){
    return `The name to the name: ${vehicle.name} and yours age: ${vehicle.age}`;
   }
 }

const car = new Car('Gol', 'volkswagem');
console.log(car);

const motorcycle = new Motorcycle('XR6', 2022);
console.log(motorcycle);

// Example 03 --> types guards: in

interface Animal_01 {
  group: string;
}

class Fish implements Animal_01 {
  group: string;
  colorFish: string;

  constructor(group: string, colorFish: string){
    this.group = group;
    this.colorFish = colorFish;
  }
}

class Bird implements Animal_01 {
  group: string;
  colorBird: string;

  constructor(group: string, colorBird: string){
    this.group = group;
    this.colorBird = colorBird;
  }
}

function nadar(group: string) {
  console.log(`O ${group} está nadando!`);
}

function voar(group: string) {
  console.log(`O ${group} está voando!`);
}

function mover(animal: Animal_01) {
  if ('colorFish' in animal) {
    nadar((animal as Fish).group);
  } else if ('colorBird' in animal) {
    voar((animal as Bird).group);
  }
}

mover(new Bird('Pássaro', 'Vermelho'));
mover(new Fish('Peixe', 'Azul'));