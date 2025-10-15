const log = console.log;

const randomNumber = Math.floor(Math.random() * 3);


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
  let userChoice = prompt("Choose Rock, Paper, or Scissors");
  return "You chose" +  " " + userChoice ;
}

log(getHumanChoice());
log(getComputerChoice());
