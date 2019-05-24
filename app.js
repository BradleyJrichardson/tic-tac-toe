let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let counter = 1;
var xArray = [];
var oArray = [];
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

const whoseTurn = object => {
  if (counter % 2 === 0) {
    addX(object);
    counter++;
  } else {
    addO(object);
    counter++;
  }
};
const reset = () => {
  document.querySelectorAll(".x").forEach(function(a) {
    a.remove();
    var xArray = [];
    var oArray = [];
    let counter = 1;
    console.log(xArray);
  });
  // document.querySelectorAll("div.x").innerHTML = null;
};

const addX = object => {
  document.getElementById(object.id).innerHTML = "<div class='x'>X</div>";
  xArray.push(parseInt(object.id));
  if (checkWinX()) {
    alert("Player X wins!!!");
    result = false;
  }
};

const addO = object => {
  document.getElementById(object.id).innerHTML = "<div class='x'>O</div>";
  oArray.push(parseInt(object.id));
  if (checkWinO()) {
    alert("Player O wins!!!");
    result = false;
  }
};

const checkWinX = () => {
  let result = false;
  winningArrays.forEach(array => {
    if (array.every(v => xArray.includes(v))) {
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
