let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let humanScoreDisplay = document.createElement("p");
let computerScoreDisplay = document.createElement("p");
let humanScore = 0;
let computerScore = 0;

document.body.append(humanScoreDisplay, computerScoreDisplay);
humanScoreDisplay.textContent = "Human: " + humanScore;
computerScoreDisplay.textContent += "\nComputer: " + computerScore;

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerChoice, humanChoice) {
  const howToWin = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    alert(
      `It's a tie! \n you picked "${humanChoice}" and your opponent picked "${computerChoice}"`,
    );
  } else if (howToWin[humanChoice] === computerChoice) {
    humanScore++;
    humanScoreDisplay.textContent = 'Human: ' +humanScore;
    alert(`You win! \nYou: ${humanChoice} \nbot: ${computerChoice}`);
  } else {
    computerScore++;
    computerScoreDisplay.textContent = 'Computer: ' +computerScore;
    alert(`You Lose! \nYou: ${humanChoice} \nbot: ${computerChoice}`);
  }
  checkWin();
}

function selectItem() {
  rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
  });
  
  paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
  });
  
  scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
  });
}

function checkWin() {
  let winMsg = "You won the game!\nFinal Score: \nYou: "+humanScore+"\nComputer: "+computerScore;
  let loseMsg = "You lost against the bot!\nFinal Score: \nComputer: "+computerScore+"\nYou: "+humanScore;
  if (humanScore === 5) {
    alert(winMsg);
    
    restartGame();
  } else if (computerScore ===  5) {
    alert(loseMsg);
    restartGame();
  }
}


function restartGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = "Human: " + humanScore;
  computerScoreDisplay.textContent = "Computer: " + computerScore;
}

selectItem()
