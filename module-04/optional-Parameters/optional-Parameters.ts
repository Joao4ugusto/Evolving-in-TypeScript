export { };

// Example 01 --> Optional Parameters

function informDataPerson(idPerson: number, name: string, email?: string ){
  console.log('Id employee: ', idPerson, 'Name: ', name);
  if(email != undefined) console.log('Email: ', email);
};

informDataPerson(1 , 'João', 'joaoaugusto311016@gmail.com');

// Example 02 --> Optional Parameters

function messageLog(message: string, userId?: number){
   const hourLog = new Date().toLocaleTimeString();

   console.log(hourLog, message, userId || 'user not logged in');
};

messageLog('Hi');
messageLog('Hello', 100);

// Example 03 --> 

type Person = {
  idEmployee: number,
  name: string,
  age?: number,
  email?: string 
};

let person: Person;

person = {
 idEmployee: 100,
 name: 'João'
};

console.log(person);

