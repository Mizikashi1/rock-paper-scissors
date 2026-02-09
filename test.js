let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let result = Math.floor(Math.random()* 3);
    if (result === 1) {
        return 'rock';
    } else if (result === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let userInput = prompt('Rock, Paper, Scissors').toLowerCase();
        return userInput;
}

function playRound(computerChoice, humanChoice){
    const howToWin = {
        rock: "scissors",
        paper: "rock",
        scissors: 'paper'
    };
    
    if (humanChoice === computerChoice) {
      alert(`It's a tie! \n you picked "${humanChoice}" and your opponent picked "${computerChoice}"`);
    } else if (howToWin[humanChoice] === computerChoice) {
        humanScore++
      alert(`You win! \nYou: ${humanChoice} \nbot: ${computerChoice}`);
    } else {
        computerScore++
      alert(`You Lose! \nYou: ${humanChoice} \nbot: ${computerChoice}`);
    }
}


function playGame() {
    while (humanScore != 5 && computerScore != 5) {
      playRound(getComputerChoice(), getHumanChoice());
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    }

    if (humanScore === 5) {
      alert("Congrats!");
    } else {
      alert("You've lost!");
    }
}

playGame();