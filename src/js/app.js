// TODO: write code here
const img = document.createElement('img');
img.setAttribute('src', 'images/goblin.png');
img.classList.add('image');

const allCells = document.getElementsByClassName('cell');

function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(allCells.length));
}

function setImageOnCell(index) {
  for (const cell of allCells) {
    if (allCells[index] === cell) allCells[index].appendChild(img);
  }
}

function start() {
  const rndIndex = getRandomIndex();
  setImageOnCell(rndIndex);
}

setInterval(() => start(), 1000);
start();
