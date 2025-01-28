const fast = document.querySelector("#check-fast");
const cheap = document.querySelector("#check-cheap");
const good = document.querySelector("#check-good");

let lastChecked = null;
let count = 0;

fast.addEventListener("change", check);

cheap.addEventListener("change", check);

good.addEventListener("change", check);

function check(parameter) {
  const checkbox = parameter.target;
  if (checkbox.checked === true) {
    count++;
    if (count > 2) {
      lastChecked.checked = false;
    }
  } else count--;
  lastChecked = checkbox;
}
