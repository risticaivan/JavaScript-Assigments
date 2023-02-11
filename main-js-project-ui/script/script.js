// Getting the elemnts to output the result
const outcomeDisplay = document.getElementById('outcome');
const playerResultDisplay = document.getElementById('player-result');
const computerResultDisplay = document.getElementById('computer-result');
const outcomeChoiceDisplay = document.getElementById('outcome-choice');
const playerCounterDisplay = document.getElementById('player-result');
const computerCounterDisplay = document.getElementById('computer-result');
let btnValue = document.querySelectorAll(".btn-value");
// Setting couter to 0
let playerCounter = 0;
let computerCounter = 0;
// function computerPlay that randomly chooses the computer value
function computerPlay() {
  let computerArray = ['rock', 'paper', 'scissors'];
  return computerArray[Math.floor(Math.random() * 3)];
}
// Getting btn value
let playerSelection;
btnValue.forEach(btn => btn.addEventListener('click', (e) => {
  playerSelection = e.target.value
  playRound()
}))
// Counter and counter output
function playRound() {
  let computerSelection = computerPlay();
  console.log('--------- New Game ---------');
  console.log('Player:', playerSelection);
  console.log('Computer:', computerSelection);
  outcomeChoiceDisplay.innerText = 'Player: ' + playerSelection + ' VS ' + 'Computer: ' + computerSelection;

  if (playerSelection === computerSelection) {
    console.log('Tie!');
    outcomeDisplay.innerText = 'It is a tie!';
  }
  else if
    (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('Computer Won!');
    outcomeDisplay.innerText = 'Computer Won!';
    computerCounter++;
    computerCounterDisplay.innerText = 'Computer: ' + computerCounter;
  }
  else {
    console.log('Player won!');
    outcomeDisplay.innerText = 'Player won!';
    playerCounter++;
    playerCounterDisplay.innerText = 'Player: ' + playerCounter;

  }
  // loging the counter and adding counter in HTML
  console.log(`Player ${playerCounter} vs Computer ${computerCounter}`);
  if (playerCounter == 5) {
    outcomeChoiceDisplay.innerText = `YOU WIN ${playerCounter} TO ${computerCounter}`;
    alert(`YOU WIN ${playerCounter} TO ${computerCounter}`);
  }
  if (computerCounter == 5) {
    outcomeChoiceDisplay.innerText = `YOU LOST ${playerCounter} TO ${computerCounter}`;
    alert(`YOU LOST ${playerCounter} TO ${computerCounter}`);
  }
}

