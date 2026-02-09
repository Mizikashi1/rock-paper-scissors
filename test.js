let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let result = Math.floor(Math.random()* 3);
    console.log ('bot: '+result)
    if (result === 1) {
        return 'rock';
    } else if (result === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let userChoice = prompt('Rock, Paper, Scissors').toLowerCase();
    console.log ('user: '+userChoice)
    if (userChoice === 'rock') {
        return 'rock';
    } else if (userChoice === 'paper') {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === )
}
getComputerChoice();
getHumanChoice();