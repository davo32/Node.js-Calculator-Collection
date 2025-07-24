//index.js
import inquirer from "inquirer";

async function calculator() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "num1",
        message: "Please Enter First Number: ",
        validate: (value) =>
          !isNaN(parseFloat(value)) || "Please enter a valid number",
        filter: Number,
      },
      {
        type: "list",
        name: "op",
        message: "Select Operator: ",
        choices: ["+", "-", "*", "/"],
      },
      {
        type: "input",
        name: "num2",
        message: "Enter second number: ",
        validate: (value) =>
          !isNaN(parseFloat(value)) || "Please enter a valid number.",
        filter: Number,
      },
    ]);

    const { num1, op, num2 } = answers;
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
          return;
        }
        result = num1 / num2;
        break;
      }
      default: {
        console.log("Invalid Operator.");
        return;
      }
    }
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error);
  }
}

calculator();
