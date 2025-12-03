// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;



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
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "Rock" && computerChoice == "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      //humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      //computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  // for (let round = 1; round <= 5; round++) {
  // console.log(`\n--- Round ${round} ---`);
  
  // Getting references to the games buttons

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");

  // Adding event listeners for the buttons

  rockButton.addEventListener("click", () => {
    console.log(playRound("Rock"));
  });

  paperButton.addEventListener("click", () => {
    console.log(playRound("Paper"));
  });

  scissorsButton.addEventListener("click", () => {
    console.log(playRound("Scissors"));
  });
     
// console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
// }
//}


