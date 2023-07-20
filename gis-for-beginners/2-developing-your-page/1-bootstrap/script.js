let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (number) {
  document
    .getElementById("number-" + number)
    .addEventListener("click", function () {
      let currentValue = document.getElementById("text-input").value;
      document.getElementById("text-input").value = currentValue + number;
    });
});

document.getElementById("c_id_button").addEventListener("click", function () {
  document.getElementById("text-input").value = "";
});

let savedNumber = 0;
document.getElementById("add_button").addEventListener("click", function () {
  let currentValue = document.getElementById("text-input").value;
  savedNumber = parseInt(currentValue) + parseInt(savedNumber);
  document.getElementById("text-input").value = "";
});

document.getElementById("equals_button").addEventListener("click", function () {
  let currentValue = document.getElementById("text-input").value;
  document.getElementById("text-input").value =
    parseInt(currentValue) + parseInt(savedNumber);
});
