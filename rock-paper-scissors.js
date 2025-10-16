const log = console.log;

const randomNumber = Math.floor(Math.random() * 3);

let humanScore = 0;
let computerScore = 0;
let score = `Score You:${humanScore} - Computer:${computerScore}`;

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
    computerScore++;
    return "You lose! Paper beats Rock"; 
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  } else if ( humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++
    return "You lose! Rock beats scissors";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    return "you lose! Scissors beats Paper";
  } else if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//log(getHumanChoice());
//log(getComputerChoice());
log(playRound(humanSelection.toLowerCase(), computerSelection.toLowerCase()));
log(score);