"use strict";
// Example 01 --> use of loops for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
;
// Example 02 --> use of loop for 'of'
const arrayNumber = [10, 20, 30, 40, 50];
for (let i of arrayNumber) {
    console.log(i);
}
;
// Example 03 --> use of loop for 'in'
const arrayNumber01 = [5, 4, 3, 2, 1];
for (const i in arrayNumber01) {
    console.log(i);
}
;
// sort()
const order = arrayNumber01.sort();
console.log(order);
