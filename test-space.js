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

const checkWinX = xArray => {
  return winningArrays.forEach(array => {
    return xArray.includes(array);
  });
};

console.log([1, 3, 4, 2].some(e => [1, 2, 3].includes(e)));