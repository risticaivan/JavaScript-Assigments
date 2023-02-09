// Counter and counter output
let playerCounter = 0;
let computerCounter = 0;
let outputPlayerCounter = document.getElementById('player').innerHTML = `Player ${playerCounter}`;
let outputPomputerCounter = document.getElementById('computer').innerHTML = `Computer ${computerCounter}`;
// Getting the elemnts to output the result
let playerGot = document.getElementById('player-got');
let computerGot = document.getElementById('computer-got');
let tieResult = document.getElementById('tie');

// function computerPlay that randomly chooses the computer value
function computerPlay() {
  let computerArray = ['rock', 'paper', 'scissors'];
  let computerArrayIndex = Math.floor(Math.random() * 3); // we get random index 0-2
  let selection = computerArray[computerArrayIndex];
  return selection;
}


function playRound() {
  computerPlay();
  // adding the value and lowering the cases so we can compare them easier
  let playerSelection = document.getElementById('select').value.toLowerCase(); 
  let computerSelection = computerPlay();
  console.log('--------- New Game ---------');
  console.log('Player:', playerSelection);
  console.log('Computer:', computerSelection);

  if (playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors') {

    if (playerSelection === computerSelection) {
      tieResult.innerHTML = `Tie! Player & Computer got  ${playerSelection}`;
      playerGot.innerHTML = '';
      computerGot.innerHTML = '';
      console.log('Tie!');
    }
    else if
      (playerSelection === 'rock' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'scissors' ||
      playerSelection === 'scissors' && computerSelection === 'rock') {
      computerGot.innerHTML = 'Computer won with  ' + computerSelection;
      playerGot.innerHTML = '';
      tieResult.innerHTML = '';
      console.log('Computer Won!');
      computerCounter++;
    }
    else {
      playerGot.innerHTML = 'Player won with  ' + playerSelection;
      computerGot.innerHTML = '';
      tieResult.innerHTML = '';
      console.log('Player won!');
      playerCounter++;
    }
  }
  else {
    alert('You must use words: Rock, Paper, Scissors');
  }
  // loging the counter and adding counter in HTML
  console.log(`Player ${playerCounter} vs Computer ${computerCounter}`);
  document.getElementById('player').innerHTML = `Player : ${playerCounter}`;
  document.getElementById('computer').innerHTML = `Computer : ${computerCounter}`;
}

function game() {
  // Counter and player selection
  let roundCounter = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
    roundCounter++
    console.log('---------', 'Round ', roundCounter, '---------')
  }
}