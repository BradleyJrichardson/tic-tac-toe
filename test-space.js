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

let xArray = [1, 3, 4, 2];

const checkWinX = () => {
  let result = false;
  winningArrays.forEach(array => {
    if (array.every(v => xArray.includes(v))) {
      result = true;
    }
  });
  return result;
};

console.log(checkWinX());
