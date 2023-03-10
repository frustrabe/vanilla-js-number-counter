// setting initial count
let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;
    console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
  });
});
