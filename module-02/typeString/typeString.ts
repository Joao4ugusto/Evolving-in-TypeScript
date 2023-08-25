// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// Example 01 --> Single quotes
let fullName: string = 'João Augusto';
console.log(fullName);
//  Example 02 --> double quotes
let functionCompany: string = "Developer FullStack";
console.log(functionCompany);
// Example 03 --> Back ticks
let nameCompany: string = 'Microsoft';
let employeeData: string = `welcome ${fullName}! you will be ${functionCompany} at company ${nameCompany} `;
console.log(employeeData);