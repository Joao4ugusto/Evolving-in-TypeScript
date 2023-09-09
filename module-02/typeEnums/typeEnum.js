"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> Numeric Enums
var Languages;
(function (Languages) {
    Languages[Languages["Portugues"] = 0] = "Portugues";
    Languages[Languages["Espanhol"] = 1] = "Espanhol";
    Languages[Languages["Ingles"] = 2] = "Ingles";
    Languages[Languages["Frances"] = 3] = "Frances";
})(Languages || (Languages = {}));
console.log(Languages);
// Example 02 --> String enums
var Day;
(function (Day) {
    Day["second"] = "SEG";
    Day["third"] = "TER";
    Day["fourth"] = "QUA";
    Day["fifth"] = "QUI";
    Day["friday"] = "SEX";
})(Day || (Day = {}));
console.log(Day);
function comida(c) {
    return 'Comidas mais apetitosas!';
}
console.log(comida("pasta" /* Comida.pasta */));
console.log(comida("pizza" /* Comida.pizza */));
// Example 04 --> when to use enums ?
var Task;
(function (Task) {
    Task[Task["Todo"] = 0] = "Todo";
    Task[Task["Progress"] = 1] = "Progress";
    Task[Task["Done"] = 2] = "Done";
})(Task || (Task = {}));
;
const taskDone = {
    id: 1,
    status: Task.Done,
    description: 'Task done'
};
if (taskDone.status == Task.Done) {
    console.log('send E-mail');
}
;
