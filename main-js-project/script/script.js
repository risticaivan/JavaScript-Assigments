// Counter and counter output
let playerCounter = 0;
let computerCounter = 0;
let outputPlayerCounter = document.getElementById('player').innerHTML = `Player ${playerCounter}`;
let outputPomputerCounter = document.getElementById('computer').innerHTML = `Computer ${computerCounter}`;
// Getting the elemnts to output the result
let playerGot = document.getElementById('player-got');
let computerGot = document.getElementById('computer-got');
let tieResult = document.getElementById('tie');

function playRound(player, computer) {
  // function computerPlay that randomly chooses the computer value
  function computerPlay() {
    const computerArray = ['rock','paper','scissors'];
    const computerArrayIndex = Math.floor(Math.random()*3); // we get random index 0-2
    const selection = computerArray[computerArrayIndex];
    return selection;
  }
  // adding the value
  const playerSelection = document.getElementById('select').value;
  const computerSelection = computerPlay();
  console.log('--------- New Game ---------'); 
  console.log('Player:', playerSelection);
  console.log('Computer:', computerSelection);
  // lowering the cases so we can compare them easier
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();

  if(player === 'rock' 
    || player === 'paper' 
    || player === 'scissors') {

    if(player === computer) {
      tieResult.innerHTML = `Tie! Player & Computer got  ${player}`;
      playerGot.innerHTML = '';
      computerGot.innerHTML = '';
      console.log('Tie!');
    }
    else if(player == 'rock') {
      if(computer == 'paper') {
        computerGot.innerHTML = 'Computer won with  ' + computer;
        playerGot.innerHTML = '';
        tieResult.innerHTML = '';
        console.log('Computer Won!');
        computerCounter++;
      }
      else {
        playerGot.innerHTML = 'Player won with  ' + player;
        computerGot.innerHTML = '';
        tieResult.innerHTML = '';
        console.log('Player won!');
        playerCounter++;
      }
    }
    else if(player == "scissors") {
      if(computer == 'rock') {
        computerGot.innerHTML = 'Computer won with  ' + computer;
        playerGot.innerHTML = '';
        tieResult.innerHTML = '';
        console.log('Computer Won!');
        computerCounter++;
      }
      else {
        playerGot.innerHTML = 'Player won with  ' + player;
        computerGot.innerHTML = '';
        tieResult.innerHTML = '';
        console.log('Player won!');
        playerCounter++;
      }
    }
    else if(player == 'paper') {
      if(computer == 'scissors') {
        computerGot.innerHTML = 'Computer won with  ' + computer;
        playerGot.innerHTML = '';
        tieResult.innerHTML = '';
        console.log('Computer Won!');
        computerCounter++;
      }
      else {
        playerGot.innerHTML = 'Player won with  ' + player;
        computerGot.innerHTML = '';
        tieResult.innerHTML = '';
        console.log('Player won!');
        playerCounter++;
      }
    }
  } 
  else {
    alert('You must use words: Rock, Paper, Scissors');
  }
  // loging the counter and adding counter in HTML
  console.log(`Player ${playerCounter} vs Computer ${computerCounter}`);
  document.getElementById('player').innerHTML = `Player - ${playerCounter}`;
  document.getElementById('computer').innerHTML = `Computer - ${computerCounter}`;
}

/* Write a NEW function called game(). Call the playRound function inside of this one to
play a 5 round game that keeps score and reports a winner or loser at the end.
*/
function game() {
  // Counter and player selection
  let roundCounter = 0;
  let playerSelection = document.getElementById('select').value;

  if(playerSelection != "") {
    for(let i = 0; i < 5; i++) {
      playRound(player, computer);
      roundCounter++
      console.log('---------', 'Round ', roundCounter , '---------')
    }
  }
  else {
    alert('You must use words: Rock, Paper, Scissors');
  }
}
