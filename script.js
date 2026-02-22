let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High, Try again!..";
        gameResult.style.backgroundColor = "red";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low, Try again!..";
        gameResult.style.backgroundColor = "red";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right..";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide a valid input....";
        gameResult.style.backgroundColor = "red";
    }
}
