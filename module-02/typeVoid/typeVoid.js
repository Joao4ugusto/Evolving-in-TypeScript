"use strict";
// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH
// Example 01 --> Function Void
function logError(errorMessage) {
    console.log(errorMessage);
}
;
logError('Required - name!');
// Example 02 --> Function Void
const errorLog = (messageError) => {
    console.log(messageError);
};
errorLog('Required field - Surname!');
// Example 03 --> Variable void
let variableVoid;
// variableVoid = 1;
// variableVoid = null;
variableVoid = undefined;
