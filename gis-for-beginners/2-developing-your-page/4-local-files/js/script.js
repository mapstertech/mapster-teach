$(document).ready(function () {

  console.log("YO")
  // // First we create a single example function
  // document.getElementById('number-1').addEventListener('click', function() {
  //   document.getElementById('calculator-text').value = 1;
  // })

  // Now we make that concatenate instead of just change it
  // document.getElementById('number-1').addEventListener('click', function() {
  //   const currentValue = document.getElementById('calculator-text').value;
  //   document.getElementById('calculator-text').value = currentValue + "1";
  // })

  // Now we can make this work through a loop!
  const arrayOfNumberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  arrayOfNumberButtons.forEach(function (thisNumber) {
    $("#number-" + thisNumber).on("click", function () {
      const currentValue = $("#calculator-text").val();
      $("#calculator-text").val(currentValue + thisNumber);
    });
  });

  // Now let's try adding a number directly
  // document.getElementById('operation-add').addEventListener('click', function() {
  //   const currentValue = document.getElementById('calculator-text').value;
  //   document.getElementById('calculator-text').value = parseInt(currentValue) + 400;
  // })

  // Now let's try storing the number and clearing the input
  let lastNumberInputted = 0;
  $("#operation-add").on("click", function () {
    lastNumberInputted = $("#calculator-text").val();
    $("#calculator-text").val("");
  });

  // Now let's try adding the number when the user presses equals
  $("#operation-equals").on("click", function () {
    const currentValue = $("#calculator-text").val();
    $("#calculator-text").val(
      parseInt(lastNumberInputted) + parseInt(currentValue)
    );
  });
});

// // Woo!
