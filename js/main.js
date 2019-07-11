const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
  player: 0,
  computer: 0,
  draw: 0
}

// Play game
function play(e) {
  restart.style.display = 'inline-block';
  // console.log(e.target.id);
  const playerChoice = e.target.id;
  // Cpu choice
  const computerChoice = getComputerChoice();

  // console.log(playerChoice, computerChoice);
  const winner = getWinner(playerChoice, computerChoice);

  // console.log(playerChoice, computerChoice, winner);
  showWinner(winner, computerChoice);
}

// Get computer Choice
function getComputerChoice(){
  // generate random number
  const random = Math.random();
  if(random < 0.34) {
    return 'rock';
  }
  else if(random <= 0.67) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

// Get game winner
function getWinner(p, c) {
  if(p === c) {
    return 'draw';
  }
  else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  }
  else if (p === 'paper') {
    if(c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  }
  else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

// Show Winner
function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // inc player score
    scoreBoard.player++;
    // show modal results
    result.innerHTML = `<h1 class="text-win">You Win!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
     // inc player score
     scoreBoard.computer++;
     // show modal results
     result.innerHTML = `<h1 class="text-lose">You Lose!</h1>
     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong></p>`;
  } else {
    scoreBoard.draw++;

    result.innerHTML = `<h1 class="text-draw">It's a Draw!</h1>
     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong></p>`;
  }

  // Show score
  score.innerHTML = `
  <p>Player: ${scoreBoard.player}</p>
  <p>Computer: ${scoreBoard.computer}</p>
  <p>Draw: ${scoreBoard.draw}`;

  modal.style.display = 'block';
}

// Restart game
function restartGame(){
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  scoreBoard.draw = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    <p>Draw: 0`;
}

// Clear Modal
function clearModal(e){
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event Listeners
// loop thru choices
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);