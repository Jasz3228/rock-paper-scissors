const log = console.log;

const randomNumber = Math.floor(Math.random() * 3);


function getComputerChoice() {
  if (randomNumber == 0) {
    return "Rock";
  } else if ( randomNumber == 1) {
    return "Paper";
  } else {
    return "scissors";
  }
}



log(getComputerChoice());