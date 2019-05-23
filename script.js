let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let counter = 1;

const whoseTurn = object => {
  if (counter % 2 === 0) {
    addX(object);
    counter++;
  } else {
    addO(object);
    counter++;
    console.log(counter);
  }
};

const addX = object => {
  alert(object);
  document.getElementById(object.id).innerHTML = "<div class='x'>X</div>";
};
const addO = object => {
  alert(object);
  document.getElementById(object.id).innerHTML = "<div class='x'>O</div>";
};
