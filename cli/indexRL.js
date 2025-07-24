//indexRL.js

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator() {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter Operator (+,-,*,/): ", (op) => {
      rl.question("Enter second number: ", (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        let result;

        switch (op) {
          case "+": {
            result = num1 + num2;
            break;
          }
          case "-": {
            result = num1 - num2;
            break;
          }
          case "*": {
            result = num1 * num2;
            break;
          }
          case "/": {
            if (num2 === 0) {
              console.log("Cannot Divide by Zero.");
              rl.close();
              return;
            }
            result = num1 / num2;
            break;
          }
          default: {
            console.log("Invalid Operator.");
            rl.close();
            return;
          }
        }
        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

calculator();
