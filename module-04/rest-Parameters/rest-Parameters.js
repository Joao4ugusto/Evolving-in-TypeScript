"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 
function sumNumber(...numbers) {
    let total = 0;
    numbers.forEach((numbers) => (total += numbers));
    return total;
}
;
console.log(sumNumber(10, 20, 20));
// Example 02
function fair(phrase, ...fruits) {
    return phrase + fruits;
}
console.log(fair('list of fruits to grow ', '🍌', '🍉', '🍇', '🍊'));
// Example 03 
class Products {
    displayProduct(...products) {
        for (const product of products) {
            console.log(product);
        }
    }
}
const departamentComputing = new Products();
console.log('my Produscts: ');
departamentComputing.displayProduct('mouse', 'webcam', 'headseat');
