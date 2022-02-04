const boxes = document.querySelectorAll('.box');
// const rebelImage = document.querySelectorAll('#rebelImage')
// const empireImage = document.querySelectorAll('#empireImage')
const text = document.querySelector('#whoWon');
const strategy = document.querySelector('#strategy');
const restartBtn = document.querySelector('#surrenderButton');
const spaces = [];
// const tick_circle = rebelImage;
// const tick_x = empireImage;
const tick_circle = 'Rebels';
const tick_x = 'Empire';
let currentPlayer = tick_circle;

//board listeners
const drawBoard = () => {
  boxes.forEach((box, i) => {
    let styleString = '';
    box.style = styleString;
    box.addEventListener('click', boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  console.log(e);
  if (!spaces[id]) {
    console.log(spaces[id]);
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    //playerWon helper function
    if (playerWon()) {
      text.innerText = `${currentPlayer} won!`;
      //slow down?
      restart();
      return;
    }
    //playerDraw helper function
    if (playerDraw()) {
      return;
    }
    currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
  }
};

//boolean logic
const playerWon = () => {
  //wins top
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins up to top`;
      return true;
    }
    //wins left
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the left`;
      return true;
    }
    //wins diagonaly
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
  //wins right
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the right`;
      return true;
    }
    //wins bottom
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the bottom`;
      return true;
    }
  }
  //wins vertically_middle
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins vertically on middle`;
      return true;
    }
    //wins horizontally_middle
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
      return true;
    }
    //wins diagonally
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
};

//player tie
const playerDraw = () => {
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) draw++;
  });
  if (draw === 9) {
    text.innerText = `Draw`;
    restart();
  }
};


//restart function
const restart = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    //box inner text
    boxes.forEach((box) => {
      box.innerText = "";
    });
    //whoWon line
    text.innerText = ` `;
    //strategy line
    strategy.innerText = ``;
  }, 1000);
};
restartBtn.addEventListener('click', restart);
restart();
drawBoard();