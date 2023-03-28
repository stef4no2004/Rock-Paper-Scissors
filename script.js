function getComputerChoice(){
    //create array of (rock, paper, scissors)
    const listOfWeapons = new Array ('Rock','Paper','Scissors');
    //make computer choose randomly between the objects of the array
    let computerChoice = listOfWeapons[Math.floor(Math.random()*listOfWeapons.length)];
    return computerChoice
}
getComputerChoice();
//Create function that starts a round
function playRound(playerSelection, computerSelection) {
    let getPlayerSelection = prompt('Choose your weapon!');
    const computerChoice = getComputerChoice()
    if (computerChoice == getPlayerSelection) {
      alert('It\'s a tie you both have choosen the same weapon')
    }
    if (computerChoice == 'Rock' && getPlayerSelection == 'Paper') {
      alert('You won paper beats rock')
    }
    if (computerChoice == 'Rock' && getPlayerSelection == 'Scissors') {
      alert('You lost rock beats scissors')
    }
    if (computerChoice == 'Paper' && getPlayerSelection == 'Scissors') {
      alert('You won scissors beats paper')
    }
    if (computerChoice == 'Paper' && getPlayerSelection == 'Rock') {
      alert('You lost paper beats rock')
    }
    if (computerChoice == 'Scissors' && getPlayerSelection == 'Rock') {
      alert('You won rock beats paper')
    }
    if (computerChoice == 'Scissors' && getPlayerSelection == 'Paper') {
      alert('You lost scissors beats paper')
    }
  }
  playRound();
