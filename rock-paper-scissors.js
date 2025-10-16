const log = console.log;

const randomNumber = Math.floor(Math.random() * 3);

let humanScore = 0;
let computerScore = 0;
let score = `Score You:${humanScore} - Computer:${computerScore}`;

function getComputerChoice() {
  if (randomNumber == 0) {
    return "Rock";
  } else if ( randomNumber == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper, or Scissors");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//log(getHumanChoice());
//log(getComputerChoice());
log(playRound(humanSelection.toLowerCase(), computerSelection.toLowerCase()));
score = `Score You:$humanScore} - Computer:${computerScore}`;
log(score);