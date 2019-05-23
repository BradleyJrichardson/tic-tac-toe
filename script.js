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

const checkWinX = xArray => {
  return winningArrays.forEach(array => {
    return xArray.includes(array);
  });
};

console.log(checkWinX([1, 3, 4, 2]));

const addX = object => {
  document.getElementById(object.id).innerHTML = "<div class='x'>X</div>";
  xArray.push(parseInt(object.id));
  if (checkWinX()) {
    alert("winner");
  }
};

const addO = object => {
  document.getElementById(object.id).innerHTML = "<div class='x'>O</div>";
  oArray.push(parseInt(object.id));
};
