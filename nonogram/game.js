//Container
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//Create a menu
let header = document.createElement('ul');
header.className = 'header';
container.appendChild(header);

//5x5 10x10 15x15 menu item
let fiveSizeField = document.createElement('li');
fiveSizeField.className = 'fiveSizeField';
fiveSizeField.textContent = '5x5';
header.appendChild(fiveSizeField);

let tenSizeField = document.createElement('li');
tenSizeField.textContent = '10x10';
tenSizeField.className = 'tenSizeField';
header.appendChild(tenSizeField);

let fifteenSizeField = document.createElement('li');
fifteenSizeField.textContent = '15x15';
fifteenSizeField.className = 'fifteenSizeField';
header.appendChild(fifteenSizeField);

//5x5 picture chose
let fiveSizePics = document.createElement('ul');
fiveSizePics.className = 'fiveSizePics';
fiveSizeField.appendChild(fiveSizePics);

let mushroom = document.createElement('li');
mushroom.className = 'mushroom';
mushroom.textContent = 'mushroom';
fiveSizePics.appendChild(mushroom);

let heart = document.createElement('li');
heart.className = 'heart';
heart.textContent = 'heart';
fiveSizePics.appendChild(heart);

let duck = document.createElement('li');
duck.className = 'duck';
duck.textContent = 'duck';
fiveSizePics.appendChild(duck);

let boat = document.createElement('li');
boat.className = 'boat';
boat.textContent = 'boat';
fiveSizePics.appendChild(boat);

let dumbbell = document.createElement('li');
dumbbell.className = 'dumbbell';
dumbbell.textContent = 'dumbbell';
fiveSizePics.appendChild(dumbbell);

//10x10 picture chose
let tenSizePics = document.createElement('ul');
tenSizePics.className = 'tenSizePics';
tenSizeField.appendChild(tenSizePics);

let flower = document.createElement('li');
flower.className = 'flower';
flower.textContent = 'flower';
tenSizePics.appendChild(flower);

//15x15 picture chose
let fifteenSizePics = document.createElement('ul');
fifteenSizePics.className = 'fifteenSizePics';
fifteenSizeField.appendChild(fifteenSizePics);

let house = document.createElement('li');
house.className = 'house';
house.textContent = 'house';
fifteenSizePics.appendChild(house);

//Create a game field
let canvas = document.createElement('canvas');
canvas.className = 'canvas';
canvas.width = window.innerWidth < 700 ? window.innerWidth - 50 : 700;
canvas.height = canvas.width;
const ctx = canvas.getContext('2d');
container.appendChild(canvas);

//Create a menu below
let footer = document.createElement('ul');
footer.className = 'footer';
container.appendChild(footer);

//Footer item
let resetGame = document.createElement('li');
resetGame.className = 'resetGame';
resetGame.textContent = 'Reset game';
footer.appendChild(resetGame);

let timer = document.createElement('li');
timer.className = 'timer';
footer.appendChild(timer);

let minutes = document.createElement('span');
minutes.className = 'minutes';
minutes.textContent = '00';
timer.appendChild(minutes);

let colon = document.createElement('span');
colon.className = 'colon';
colon.textContent = ':';
timer.appendChild(colon);

let seconds = document.createElement('span');
seconds.className = 'seconds';
seconds.textContent = '00';
timer.appendChild(seconds);

let saveGame = document.createElement('li');
saveGame.textContent = 'Save game';
saveGame.className = 'saveGame';
footer.appendChild(saveGame);

//FooterSecound row

let footerSecond = document.createElement('ul');
footerSecond.className = 'footerSecond';
container.appendChild(footerSecond);

let continueLastGame = document.createElement('li');
continueLastGame.textContent = 'Continue';
continueLastGame.className = 'continueLastGame';
footerSecond.appendChild(continueLastGame);

let random = document.createElement('li');
random.textContent = 'Random';
random.className = 'random';
footerSecond.appendChild(random);

let solutionBtn = document.createElement('li');
solutionBtn.textContent = 'Solution';
solutionBtn.className = 'solutionBtn';
footerSecond.appendChild(solutionBtn);

//FooterThird row

let footerThird = document.createElement('ul');
footerThird .className = 'footerThird';
container.appendChild(footerThird );

let darkMode = document.createElement('li');
darkMode.textContent = 'Dark mode';
darkMode.className = 'darkMode';
footerThird.appendChild(darkMode);

let winners = document.createElement('li');
winners.textContent = 'Winners';
winners.className = 'winners';
footerThird.appendChild(winners);

let sound = document.createElement('li');
sound.textContent = 'Sound off';
sound.className = 'sound';
footerThird.appendChild(sound);


let cellSize = 100;
let field;
let clickCount = 0;
let gameName;
let gameDifficulty;
let isDarkMode;
let volume = 1;
drawField();
//Audio
const clickSound = new Audio('./sounds/click.mp3');
const winSound = new Audio('./sounds/win.mp3');


//Pictures for 5x5
let pictures = [
  { 
    difficulty: '5x5',
    name: 'mushroom',
    numCells: 7,
    rowClues: [[0, 3], [0, 5], [0, 1], [0, 1], [0, 1]],
    colClues: [[0, 1], [0, 2], [0, 5], [0, 2], [0, 1]],
    solution: [
      [false, true, true, true, false],
      [true, true, true, true, true],
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false]
    ]
  },
  {
    difficulty: '5x5',
    name: 'heart',
    numCells: 7,
    rowClues: [[1, 1], [0, 5], [0, 5], [0, 3], [0, 1]],
    colClues: [[0, 2], [0, 4], [0, 4], [0, 4], [0, 2]],
    solution: [
      [false, true, false, true, false],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [false, true, true, true, false],
      [false, false, true, false, false]
    ]
  },
  {
    difficulty: '5x5',
    name: 'duck',
    numCells: 7,
    rowClues: [[0, 2], [0, 3], [1, 2], [0, 4], [0, 4]],
    colClues: [[0, 3], [0, 2], [0, 5], [0, 5], [0, 1]],
    solution: [
      [false, false, true, true, false],
      [false, false, true, true, true],
      [true, false, true, true, false],
      [true, true, true, true, false],
      [true, true, true, true, false]
    ]
  },
  {
    difficulty: '5x5',
    name: 'boat',
    numCells: 7,
    rowClues: [[0, 1], [0, 2], [0, 2], [0, 1], [0, 5]],
    colClues: [[0, 1], [2, 1], [0, 5], [0, 1], [0, 1]],
    solution: [
      [false, false, true, false, false],
      [false, true, true, false, false],
      [false, true, true, false, false],
      [false, false, true, false, false],
      [true, true, true, true, true]
    ]
  },
  {
    difficulty: '5x5',
    name: 'dumbbell',
    numCells: 7,
    rowClues: [[1, 1], [2, 2], [0, 5], [2, 2], [1, 1]],
    colClues: [[0, 3], [0, 5], [0, 1], [0, 5], [0, 3]],
    solution: [
      [false, true, false, true, false],
      [true, true, false, true, true],
      [true, true, true, true, true],
      [true, true, false, true, true],
      [false, true, false, true, false]
    ]
  },
  {
    difficulty: 'medium',
    name: 'dumbbell',
    numCells: 12,
    rowClues: [[1, 1], [2, 2], [0, 5], [2, 2], [1, 1]],
    colClues: [[0, 3], [0, 5], [0, 1], [0, 5], [0, 3]],
    solution: [
      [false, true, false, true, false],
      [true, true, false, true, true],
      [true, true, true, true, true],
      [true, true, false, true, true],
      [false, true, false, true, false]
    ]
  }
];


for (let i = 0; i < pictures.length; i++) {
  let pictureElement = document.querySelector('.' + pictures[i].name);
  if (pictureElement) {
    pictureElement.addEventListener('click', function() {
      selectPicture(pictures[i]);
    });
  }
}

//Attributes for selected picture and generation of field
function selectPicture(selectedPicture) {
  console.log('Selected picture:', selectedPicture.name, selectedPicture.numCells);
  gameDifficulty = selectedPicture.difficulty;
  gameName = selectedPicture.name;
  rowClues = selectedPicture.rowClues;
  colClues = selectedPicture.colClues;
  solution = selectedPicture.solution;
  numCells = selectedPicture.numCells;
  cellSize = canvas.width / numCells;
  field = Array.from({ length: numCells }, () => Array(numCells).fill(false));
  console.log(cellSize, canvas.width, numCells );
  const fontSizePercentage = 60;
  const fontSize = (cellSize * fontSizePercentage) / 100;
  ctx.font = `bold ${fontSize}px Arial`;
  drawField();
  drawClue();
  clickCount = 0;
}

//Draw field according to chosen parameters
function drawField() {
  console.log(isDarkMode);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 1; i < 7; i++) {
      ctx.beginPath();
      ctx.strokeStyle = isDarkMode ? 'gainsboro' : 'rgba(33, 37, 51)';
      if (i === 1) {
        ctx.moveTo(cellSize * 2, i * cellSize);
      } else {
        ctx.moveTo(0, i * cellSize);
      }
      ctx.lineTo(canvas.width, i * cellSize);
      ctx.stroke();
      if (i === 1) {
        ctx.lineWidth = 5;
      } else {
        ctx.lineWidth = 1;
      }
  }
  for (let j = 1; j < 7; j++) {
      ctx.beginPath();
      ctx.strokeStyle = isDarkMode ? 'gainsboro' : 'rgba(33, 37, 51)';
      if (j === 1) {
        ctx.moveTo(j * cellSize, cellSize * 2);
      } else {
        ctx.moveTo(j * cellSize, 0);
      }
      ctx.lineTo(j * cellSize, canvas.height);
      ctx.stroke();
      if (j === 1) {
        ctx.lineWidth = 5;
      } else {
        ctx.lineWidth = 1;
      }
  }
}

//Draw clues for chosen picture
function drawClue() {
  console.log('drawClue ');
  for (let i = 0; i < rowClues.length; i++) {
    ctx.fillStyle = isDarkMode ? 'gainsboro' : 'rgba(33, 37, 51)';
    const clues = rowClues[i];
    console.log(clues);
    if (clues[0] > 0) {
      console.log('yes');
      ctx.fillText(clues[0], cellSize * 0.35, cellSize * (i + 2.7));
    }
    if (clues[1] > 0) {
      ctx.fillText(clues[1], cellSize * 1.35, cellSize * (i + 2.7));
    } 
  }
  for (let j = 0; j < colClues.length; j++) {
    const clues = colClues[j];
    if (clues[0] > 0) {
      ctx.fillText(clues[0], cellSize * (j + 2.35), cellSize *0.7);
    }
    if (clues[1] > 0) {
      ctx.fillText(clues[1], cellSize * (j + 2.35) , cellSize * 1.7);
    } 
  }
}


//Draw cell black or gray
function drawCells(i, j) {
  const cellX = j * cellSize;
  const cellY = i * cellSize;
    if (field[i][j]) {
      ctx.fillStyle = isDarkMode ? 'gainsboro' : 'rgba(33, 37, 51)';
      ctx.fillRect(cellX, cellY, cellSize, cellSize); 
    } else {
      ctx.fillStyle = isDarkMode ? 'rgba(33, 37, 51)' :'gainsboro';
      ctx.fillRect(cellX, cellY, cellSize, cellSize);
      ctx.strokeRect(cellX, cellY, cellSize, cellSize);
    }
}

//Insert by left button
canvas.addEventListener('click', function (event) {
  clickCount++;
  if (clickCount === 1) {
    timerStart();
  };
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const clickedRow = Math.floor(y / cellSize);
  const clickedCol = Math.floor(x / cellSize);
  console.log(clickedCol, clickedRow);
  if (clickedCol > 1 && clickedRow > 1) {
    if (volume == 1) {
      clickSound.play();
    }
    field[clickedRow][clickedCol] = (!field[clickedRow][clickedCol])
    console.log (field[clickedRow][clickedCol]);
    drawCells(clickedRow, clickedCol);
  }
  if (checkSolution()) {
    if (volume == 1) {
       winSound.play();
    }
    setTimeout(function () {
      alert(`Great! You have solved the nonogram in ${minutesCount * 60 + secondsCount} seconds!`);
    }, 400);
    saveWinner();
  }
  const clickedPositionString = `${clickedRow}-${clickedCol}`;
  if (xPositions.has(clickedPositionString)) {
    xPositions.delete(clickedPositionString);
  }
});

//Check of result
function checkSolution() {
  for (let i = 2; i < field.length; i++) {
    for (let j = 2; j < field[i].length; j++) {
      if (field[i][j] !== solution[i - 2][j - 2]) {
        return false;
      }
    }
  }
  return true;
}

//Insert X by right button
const xPositions = new Set();
let xColor;
canvas.addEventListener('contextmenu', function (event) {
  if (volume == 1) {
    clickSound.play();
  }
  event.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const clickedRow = Math.floor(y / cellSize);
  const clickedCol = Math.floor(x / cellSize);
  const cellX = clickedCol * cellSize;
  const cellY = clickedRow * cellSize;
  console.log("clicked", clickedRow, clickedCol);
  if ((clickedRow > 1) && (clickedCol > 1)) {
    const clickedPositionString = `${clickedRow}-${clickedCol}`;
    console.log('Clicked Position:', clickedPositionString);
    if (xPositions.has(clickedPositionString)) {
      xPositions.delete(clickedPositionString);
      clearCell(cellX, cellY);
      console.log('Deleted:', clickedPositionString);
    } else {
      drawX(cellX, cellY);
      xPositions.add(clickedPositionString);
    }
    console.log('xPositions:', Array.from(xPositions));
  }
});

function clearCell(cellX, cellY) {
  ctx.fillStyle = isDarkMode ? 'rgb(33, 37, 51)' : 'gainsboro';
  ctx.fillRect(cellX, cellY, cellSize, cellSize);
  ctx.strokeRect(cellX, cellY, cellSize, cellSize);
}

// Function to draw 'X' at the given cell
function drawX(cellX, cellY) {
  console.log(cellX, cellY, isDarkMode);
  ctx.fillStyle = isDarkMode ? 'rgba(33, 37, 51)' : 'gainsboro';
  ctx.fillRect(cellX, cellY, cellSize, cellSize);
  ctx.strokeRect(cellX, cellY, cellSize, cellSize);
  ctx.fillStyle = isDarkMode ? 'gainsboro' : 'rgba(33, 37, 51)';
  ctx.textAlign = 'center';
  ctx.fillText('X', cellX + cellSize / 2, cellY + cellSize / 1.5);
}

function updateXColors() {
  xPositions.forEach((posString) => {
    const [row, col] = posString.split('-');
    const cellX = col * cellSize;
    const cellY = row * cellSize;
    drawX(cellX, cellY);
  });
}

//Reset game
resetGame.addEventListener('click', function() {
  for (let i = 2; i < field.length; i++) {
    for (let j = 2; j < field[i].length; j++) {
      field[i][j] = false; 
      const cellX = j * cellSize;
      const cellY = i * cellSize;
      ctx.fillStyle = isDarkMode ? 'rgba(33, 37, 51)' :'gainsboro';
      ctx.fillRect(cellX, cellY, cellSize, cellSize);
      ctx.strokeRect(cellX, cellY, cellSize, cellSize);
    }
  }
  clickCount = 0;
});


//Timer
const secondsTimer = document.querySelector('.seconds');
const minutesTimer = document.querySelector('.minutes');
let secondsCount = 0;
let minutesCount = 0;
let interval;

const timerStart = () => {
  clearInterval(interval);
  secondsCount = 0;
  minutesCount = 0;
  secondsTimer.innerHTML = '00';
  minutesTimer.innerHTML = '00';

  const startTimer = () => {
    secondsCount++;
    if (secondsCount < 10) {
      secondsTimer.innerHTML = '0' + secondsCount;
    } else if (secondsCount < 60) {
      secondsTimer.innerHTML = secondsCount;
    } else {
      minutesCount++;
      minutesTimer.innerHTML = minutesCount < 10 ? '0' + minutesCount : minutesCount;
      secondsCount = 0;
      secondsTimer.innerHTML = '00';
    }
  };
  interval = setInterval(startTimer, 1000);
};

//Save game
saveGame.addEventListener('click', function () {
  alert(`Game ${gameName} saved!`);
  saveGameData();
});

function saveGameData() {
    const gameData = {
    gameName: gameName,
    field: field,
    rowClues: rowClues,
    colClues: colClues,
    clickCount: clickCount,
    solution: solution,
    secondsCount: secondsCount,
    minutesCount: minutesCount
  }
  localStorage.setItem('pictureData', JSON.stringify(gameData))
}

let countContinueClick;
continueLastGame.addEventListener('click', function () {
  countContinueClick = 1;
  const savedData = localStorage.getItem('pictureData');
  console.log('save' + savedData);
  if (savedData) {
    loadGameData();
  } else {
    alert('No saved game found.');
  }
});

function loadGameData() {
  const savedData = localStorage.getItem('pictureData');
  if (savedData) {
    console.log('saver' + savedData);
    const parsedGameData = JSON.parse(savedData);
    gameName = parsedGameData.gameName;
    field = parsedGameData.field;
    rowClues = parsedGameData.rowClues;
    colClues = parsedGameData.colClues;
    solution = parsedGameData.solution;
    clickCount = parsedGameData.clickCount;
    secondsCount = parsedGameData.secondsCount;
    minutesCount = parsedGameData.minutesCount;

    drawField();
    drawClue();
    console.log('After loading game data - drawClue called');
    for (let i = 2; i < field.length; i++) {
      for (let j = 2; j < field[i].length; j++) {
        console.log(i,j);
        drawCells(i, j);
      }
    }
  }
}

//Dark mode
darkMode.addEventListener('click', function() {
  isDarkMode = document.body.classList.toggle('dark');
  console.log(isDarkMode)
  drawField();
  drawClue();
  for (let i = 2; i < field.length; i++) {
    for (let j = 2; j < field[i].length; j++) {
      drawCells(i, j);
    }
  }
  updateXColors();
});

//Random picture
random.addEventListener('click', function() {
   const randomIndex = Math.floor(Math.random() * (pictures.length - 1));
   selectPicture(pictures[randomIndex]);
});

//Solution
solutionBtn.addEventListener('click', function() {
  console.log(solution);
  for (let i = 2; i < field.length; i++) {
    for (let j = 2; j < field[i].length; j++) {
      const cellX = j * cellSize;
      const cellY = i * cellSize;
        if (solution[i-2][j-2]) {
          ctx.fillStyle = isDarkMode ? 'gainsboro' : 'rgba(33, 37, 51)';
          ctx.fillRect(cellX, cellY, cellSize, cellSize); 
        } else {
          ctx.fillStyle = isDarkMode ? 'rgba(33, 37, 51)' :'gainsboro';
          ctx.fillRect(cellX, cellY, cellSize, cellSize);
          ctx.strokeRect(cellX, cellY, cellSize, cellSize);
        }
    }
  }
});

//Sound off/on
let isSoundOn = true;
sound.addEventListener('click', function() {
  console.log('sound',isSoundOn);
  isSoundOn= !isSoundOn;
  console.log('Sound is ' + (isSoundOn ? 'on' : 'off'));
  if (isSoundOn) {
    volume = 1;
    sound.textContent = 'Sound off';
  } else {
    volume = 0;
    sound.textContent = 'Sound on';
  }
});

//Winners
let savedWinners = JSON.parse(localStorage.getItem('winners')) || [];

function saveWinner() {
  const winData = {
    gameName: gameName,
    gameDifficulty: gameDifficulty,
    secondsCount: secondsCount,
    minutesCount: minutesCount
  };
  savedWinners.push(winData);
  if (savedWinners.length > 5) {
    savedWinners = savedWinners.slice(-5);
  }
  localStorage.setItem('winners', JSON.stringify(savedWinners));
}

winners.addEventListener('click', function() {
  if (savedWinners.length === 0) {
    return alert("You don't have any wins.");
  } else {
    savedWinners.sort((a, b) => {
      const timeA = a.minutesCount * 60 + a.secondsCount;
      const timeB = b.minutesCount * 60 + b.secondsCount;
      return timeA - timeB;
    });
    let message = 'Last 5 Best Wins:\n';
    savedWinners.forEach((winner, index) => {
      const minutes = winner.minutesCount < 10 ? `0${winner.minutesCount}` : winner.minutesCount;
      const seconds = winner.secondsCount < 10 ? `0${winner.secondsCount}` : winner.secondsCount;
      const time = `${minutes}:${seconds}`;
      message += `Winner ${index + 1}: Game - ${winner.gameName}, difficulty - ${winner.gameDifficulty}, time - ${time}\n`;
    });
    alert(message);
  }
});
