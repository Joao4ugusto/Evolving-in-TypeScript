export{};
// Example 01 --> Default Parameters

function discount(price: number, discount = 0.08){
   return price * (1 - discount);
};

console.log(discount(100));

// Example 02 --> Default parameters

function displayName(name: string, surname = 'Oliveira'){
   return name + ' ' + surname;
};

console.log(displayName('João'));

