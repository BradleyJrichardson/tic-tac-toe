let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let counter = 1;
let xArray = [];
let oArray = [];
let versingComputer = false;
let versingHuman = false;
const winningArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
const reset = () => {
  document.querySelectorAll(".x").forEach(function(a) {
    a.remove();
  });
  document.querySelectorAll(".space").forEach(function(a) {
    a.style.background = "white";
  });
  xArray = [];
  oArray = [];
  counter = 1;
  result = false;
  versingComputer = false;
  versingHuman = false;
};

const human = () => {
  document.querySelector("div.versing").innerHTML = "Currently versing a Human";
  versingHuman = true;
};

const computer = () => {
  document.querySelector("div.versing").innerHTML =
    "Currently versing a Computer";
  versingComputer = true;
};

const whoseTurn = object => {
  if (versingHuman) {
    if (counter % 2 === 0) {
      addO(object);
      counter++;
    } else {
      addX(object);
      counter++;
    }
  } else if (versingComputer) {
    if (counter % 2 === 0) {
      computeraddO();
      counter++;
    } else {
      addX(object);
      counter++;
      whoseTurn();
    }
  } else {
    alert("please choose a setting");
  }
};

const computeraddO = () => {
  let choices = [].concat.apply([], board);
  let arrayXY = xArray.concat(oArray);
  choices = choices.filter(function(item) {
    return arrayXY.indexOf(item) === -1;
  });
  let randomAnswer = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById(randomAnswer).innerHTML = "<div class='x'>O</div>";
  oArray.push(parseInt(randomAnswer));
  if (checkWinO()) {
    alert("Computer wins!!!");
  }
};

const addX = object => {
  document.getElementById(object.id).innerHTML = "<div class='x'>X</div>";
  xArray.push(parseInt(object.id));
  if (checkWinX()) {
    alert("Player X wins!!!");
  }
};

const addO = object => {
  document.getElementById(object.id).innerHTML = "<div class='x'>O</div>";
  oArray.push(parseInt(object.id));
  if (checkWinO()) {
    alert("Player O wins!!!");
  }
};

const checkWinX = () => {
  let result = false;
  winningArrays.forEach(array => {
    if (array.every(v => xArray.includes(v))) {
      array.forEach(e => {
        document.getElementById(e).style.background = "green";
      });
      result = true;
    }
  });
  return result;
};

const checkWinO = () => {
  let result = false;
  winningArrays.forEach(array => {
    if (array.every(v => oArray.includes(v))) {
      result = true;
    }
  });
  return result;
};

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
module.exports = { sum, mul, sub, div };
