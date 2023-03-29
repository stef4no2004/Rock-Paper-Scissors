function getComputerChoice(){
    const listOfWeapons = ['rock','paper','scissors'];
    let computerChoice = listOfWeapons[Math.floor(Math.random()*listOfWeapons.length)];
    return computerChoice
}
//This function gets the computer to choose randomly between the three elements of the game
function playRound() {
    let playerSelection = prompt('Choose your weapon!').toLowerCase();
    const computerChoice = getComputerChoice()
    if (computerChoice == playerSelection) {
      alert('It\'s a tie you both have choosen the same weapon')
    }
    if (computerChoice == 'rock' && playerSelection == 'paper') {
      alert('You won paper beats rock')
    }
    if (computerChoice == 'rock' && playerSelection == 'scissors') {
      alert('You lost rock beats scissors')
    }
    if (computerChoice == 'paper' && playerSelection == 'scissors') {
      alert('You won scissors beats paper')
    }
    if (computerChoice == 'paper' && playerSelection == 'rock') {
      alert('You lost paper beats rock')
    }
    if (computerChoice == 'scissors' && playerSelection == 'rock') {
      alert('You won rock beats paper')
    }
    if (computerChoice == 'scissors' && playerSelection == 'paper') {
      alert('You lost scissors beats paper')
    }
    if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection !=  'paper') {
      alert('This is not a valid weapon!')
    }
  }
  //This function defines the relationship between the three elements of the game
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();