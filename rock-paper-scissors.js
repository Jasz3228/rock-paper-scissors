let humanScore = 0;
let computerScore = 0;
let gameOver = false; // Flag to check if the game is over

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    return "Rock";
  } else if ( randomNumber == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice) {
  if (gameOver) return; // Prevent further rounds if the game is over


  const computerChoice = getComputerChoice();
  let result;

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "Rock" && computerChoice == "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  // Update the score display after each round
  updateScore();

  return result;
}

// Update the score display
function updateScore() {
  // Find the score elements in the DOM update their content
  const humanScoreDisplay = document.getElementById("human-score");
  const computerScoreDisplay = document.getElementById("computer-score")

  // Display the current scores
  humanScoreDisplay.textContent = `You: ${humanScore}`;
  computerScoreDisplay.textContent =`Computer: ${computerScore}`;

  // Check if anyone has reached 5 points
  if (humanScore === 5) {
    winnerDiv.textContent = "You won the game!";
    gameOver = true;
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Sorry you lose Better luck next time!";
    gameOver = true;
  }
}

// Getting references to the games buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get results
const resultsDiv = document.getElementById("results");
const winnerDiv = document.getElementById("winner");

updateScore();

// Adding event listeners for the buttons
rockButton.addEventListener("click", () => {
  resultsDiv.textContent = playRound("Rock");
});

paperButton.addEventListener("click", () => {
  resultsDiv.textContent = playRound("Paper");

});

scissorsButton.addEventListener("click", () => {
  resultsDiv.textContent = playRound("Scissors");
});





