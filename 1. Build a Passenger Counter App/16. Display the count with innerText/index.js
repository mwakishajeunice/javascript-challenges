// grab the count-el element, store it in a countEl variable
let countEL = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;

  // set countEl's innerText to the count
  countEL.innerText = count;
}
