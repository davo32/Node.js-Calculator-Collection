const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      display.value = "";
      return;
    }

    if (button.id === "equals") {
      try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
      } catch (e) {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
