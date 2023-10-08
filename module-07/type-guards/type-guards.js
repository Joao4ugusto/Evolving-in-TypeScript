"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayName(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('both values ​​must be of the same type');
}
console.log(displayName(10, 20));
console.log(displayName('João', '10'));
//  console.log(displayName('João', 20));
// Example 02 --> type guard: instanceof
class Car {
    name;
    brand;
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
class Motorcycle {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function vehicleDetails(vehicle) {
    if (vehicle instanceof Car) {
        return `The name to the Car: ${vehicle.name} and yours brand: ${vehicle.brand} `;
    }
    else if (vehicle instanceof Motorcycle) {
        return `The name to the name: ${vehicle.name} and yours age: ${vehicle.age}`;
    }
}
const car = new Car('Gol', 'volkswagem');
console.log(car);
const motorcycle = new Motorcycle('XR6', 2022);
console.log(motorcycle);
class Fish {
    group;
    colorFish;
    constructor(group, colorFish) {
        this.group = group;
        this.colorFish = colorFish;
    }
}
class Bird {
    group;
    colorBird;
    constructor(group, colorBird) {
        this.group = group;
        this.colorBird = colorBird;
    }
}
function nadar(group) {
    console.log(`O ${group} está nadando!`);
}
function voar(group) {
    console.log(`O ${group} está voando!`);
}
function mover(animal) {
    if ('colorFish' in animal) {
        nadar(animal.group);
    }
    else if ('colorBird' in animal) {
        voar(animal.group);
    }
}
mover(new Bird('Pássaro', 'Vermelho'));
mover(new Fish('Peixe', 'Azul'));
