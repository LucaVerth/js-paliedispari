// Even or Odd game

// ask player to enter a number
const evenOdd = prompt("Even or Odd:");
let game = true;
let errorMessage = "";

// control the user inputs
if (evenOdd !== "even" && evenOdd !== "odd") {
  game = false;
  errorMessage =
    "Please enter even or odd correctly (without uppercase letters)";
}

let playerNum = parseInt(prompt("Please choose a number from 1 to 5"));
if (playerNum < 1 || playerNum > 5) {
  game = false;
  errorMessage = "Please enter a number between 1 and 5";
}
console.log("valid game", game);
console.log("Error", errorMessage);

// stored variables for random number, Sum of both numbers and final output
let pcNum = randomPcNum(1, 5);
let sumNum = playerNum + pcNum;
let funcOutputNum = oddOrEven(sumNum);

console.log(evenOdd);
console.log(playerNum);
console.log(pcNum);
console.log("total: " + sumNum);
console.log(oddOrEven(sumNum));

//check if number is even or odd and compare them to user input
if (funcOutputNum === evenOdd) {
  console.log("you win!");
  finalResult = "You win!";
}
if (funcOutputNum !== evenOdd) {
  console.log("you lose!");
  finalResult = "You lose!";
}

// html print section
let output = `You choose: ${evenOdd} <br> Your number is: ${playerNum} <br> Computer rolls a: ${pcNum} <br> The sum of the two numbers is ${sumNum} therefore ${funcOutputNum} <br> <strong>${finalResult}</strong>`;

if (!game) {
  output = errorMessage;
}

document.querySelector(".result").innerHTML = output;

// functions used to get random computer number and check if number is even or odd
function randomPcNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function oddOrEven(sumNum) {
  if (sumNum % 2 == 0) {
    return "even";
  }
  return "odd";
}
