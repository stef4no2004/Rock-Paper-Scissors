function getComputerChoice(){
    //create array of (rock, paper, scissors)
    const listOfWeapons = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    //make computer choose randomly between the objects of the array
    let computerChoice = listOfWeapons[Math.floor(Math.random()*listOfWeapons.length)];
    return(computerChoice)
}
getComputerChoice();
//Create function that starts a round
function playRound(playerSelection, computerSelection){
    //Get the players choice via a  prompt
    let getPlayerSelection = prompt('Choose your weapon!');
    //Define how three elements of the game interact
    //Rock
    for (getComputerChoice == 'Rock'; getPlayerSelection == 'Rock';) {
        alert('It\'s a tie you both have choosen the same weapon')
    }
    for (getComputerChoice == 'Rock'; getPlayerSelection == 'Paper';) {
        alert('You won paper beats rock')
    }
    for (getComputerChoice == 'Rock'; getPlayerSelection == 'Scissors';) {
        alert('You lost rock beats scissors')
    }
    //Paper 
    for (getComputerChoice == 'Paper'; getPlayerSelection == 'Paper';) {
        alert('It\'s a tie you both have choosen the same weapon')
    }
    for (getComputerChoice == 'Paper'; getPlayerSelection == 'Scissors';) {
        alert('You won scissors beats paper')
    }
    for (getComputerChoice == 'Paper'; getPlayerSelection == 'Rock';) {
        alert('You lost paper beats rock')
    }
    //Scissors
    for (getComputerChoice == 'Scissors'; getPlayerSelection == 'Scissors';) {
        alert('It\'s a tie you both have choosen the same weapon')
    }
    for (getComputerChoice == 'Scissors'; getPlayerSelection == 'Rock';) {
        alert('You won rock beats paper')
    }
    for (getComputerChoice == 'Scissors'; getPlayerSelection == 'Paper';) {
        alert('You lost scissors beats paper')
    }
}
playRound();