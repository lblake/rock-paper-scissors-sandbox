const getRandomMove = () => {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === 'scissors' && moveTwo === 'paper') ||
    (moveOne === 'rock' && moveTwo === 'scissors') ||
    (moveOne === 'paper' && moveTwo === 'rock')
  ) {
    return 'Player One wins!';
  }

  return 'Player Two wins!';
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById('outcome')) {
    const outcome = document.body.lastChild;
    // document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  document.querySelector('#player-one-move__img').src = `images/${moveOne}.png`;
  document.querySelector('#player-one-move__name').innerText = `${moveOne}`;

  document.querySelector('#player-two-move__img').src = `images/${moveTwo}.png`;
  document.querySelector('#player-two-move__name').innerText = `${moveTwo}`;

  document.querySelector('#outcome').innerText = `${getOutcome(
    moveOne,
    moveTwo
  )}`;
};

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', playGame);
