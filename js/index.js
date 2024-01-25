let numOfWon = 0;
let numOfLost = 0;

for (let i = 1; i <= 5; i++) {
  let guessNumber = parseInt(
    prompt("First Open your console. Then Enter a number from 1 to 5: ")
  );
  let randomNumber = Math.floor(Math.random() * 5) + 1;

  guessNumber == randomNumber
    ? (console.log("You have won..."), numOfWon++)
    : (console.log("You have lost. Random number was " + randomNumber),
      numOfLost++);
}

document.write("Total Number of won: " + numOfWon + "</br>");
document.write("Total Number of lost: " + numOfLost);
