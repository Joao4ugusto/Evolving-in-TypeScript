// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// Example 01 --> Numeric Enums
enum Languages {
  Portugues,
  Espanhol,
  Ingles,
  Frances
}
console.log(Languages);

// Example 02 --> String enums
enum Day {
  second = 'SEG',
  third = 'TER',
  fourth = 'QUA',
  fifth = 'QUI',
  friday = 'SEX',
}
console.log(Day);

// Example 03 --> const enums
const enum Comida {
  pizza = 'pizza',
  salad = 'salad',
  barbecue = 'barbecue',
  pasta = 'pasta',
}

function comida(c: Comida){
  return 'Comidas mais apetitosas!';
}

console.log(comida(Comida.pasta));
console.log(comida(Comida.pizza));

// Example 04 --> when to use enums ?
enum Task {
  Todo,
  Progress,
  Done,
};

const taskDone = {
  id: 1,
  status: Task.Done,
  description: 'Task done'
};

if( taskDone.status == Task.Done){
   console.log('send E-mail');
};