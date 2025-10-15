const log = console.log;

const randomNumber = Math.floor(Math.random() * 3);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  if (randomNumber == 0) {
    return "Computer chose Rock";
  } else if ( randomNumber == 1) {
    return "Computer chose Paper";
  } else {
    return "Computer chose Scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper, or Scissors");
  return "You chose" +  " " + humanChoice ;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Paper") {
    return "You lose! Paper beats Rock"
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// log(getHumanChoice());
// log(getComputerChoice());
log(playRound(humanSelection.toLowerCase(), computerSelection.toLowerCase()));