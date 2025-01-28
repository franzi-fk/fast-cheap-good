const fast = document.querySelector("#check-fast");
const cheap = document.querySelector("#check-cheap");
const good = document.querySelector("#check-good");

fast.addEventListener("change", function () {
  if (cheap.checked === true && good.checked === true) {
    good.checked = false;
  }
});

cheap.addEventListener("change", function () {
  if (fast.checked === true && good.checked === true) {
    fast.checked = false;
  }
});

good.addEventListener("change", function () {
  if (fast.checked === true && cheap.checked === true) {
    cheap.checked = false;
  }
});
