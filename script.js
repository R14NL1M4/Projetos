const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        currentInput = eval(currentInput);
      } catch {
        currentInput = "Erro";
      }
    } else {
      currentInput += value;
    }
    display.textContent = currentInput;
  });
});
