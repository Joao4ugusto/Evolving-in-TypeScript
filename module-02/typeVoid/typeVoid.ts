// Transpiring TS code to JS: CTRL + SHIFT + B --> TSC BUILD/WATCH

// Example 01 --> Function Void

function logError(errorMessage: string ): void {
  console.log(errorMessage);
};

logError('Required - name!');

// Example 02 --> Function Void

const errorLog = (messageError: string): void => {
  console.log(messageError);
}

errorLog('Required field - Surname!');

// Example 03 --> Variable void

let variableVoid: void;
// variableVoid = 1;
// variableVoid = null;
variableVoid = undefined;