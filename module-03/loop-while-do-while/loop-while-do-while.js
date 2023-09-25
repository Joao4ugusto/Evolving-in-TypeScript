"use strict";
// Example 01 --> while
let counterWhile = 0;
while (counterWhile < 5) {
    console.log(counterWhile);
    counterWhile++;
}
;
// Example 02 --> while
let counterWhile1 = 1;
while (counterWhile1 <= 20) {
    if (counterWhile1 % 5 == 0) {
        console.log(counterWhile1);
    }
    counterWhile1++;
}
// Example 03 --> while
let counter1 = 0;
const arrayString = ['joão', 'rose', 'toby'];
while (arrayString[counter1]) {
    console.log('hi ', arrayString[counter1]);
    counter1++;
}
;
// Example 04 --> do while
let counter2 = 0;
do {
    console.log(counter2);
    counter2++;
} while (counter2 < 5);
