// Random Number Guessing Game

let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

function guessNumber() {
    let userGuess = parseInt(prompt(`Guess a number between ${min} and ${max}:`));

    attempts++;

    if (userGuess === randomNumber) {
        alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        // Reset the game if you want to play again
        resetGame();
    } else if (userGuess < randomNumber) {
        alert("Too low! Try again.");
        guessNumber();
    } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
        guessNumber();
    } else {
        alert("Please enter a valid number.");
        guessNumber();
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;
    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        guessNumber();
    }
}
guessNumber();
