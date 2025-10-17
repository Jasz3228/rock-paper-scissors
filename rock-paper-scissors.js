
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    return "rock";
  } else if ( randomNumber == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper, or Scissors")
  return choice.toLowerCase(); 
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice == "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  for (let round = 1; round <= 5; round++) {
  console.log(`\n--- Round ${round} ---`);
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  const result = playRound(humanSelection, computerSelection);
  console.log(result);
  console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }
}


playGame();

//log(getHumanChoice());
//log(getComputerChoice());
//console.log(playRound(humanSelection, computerSelection));


