let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let p1TurnCounter = 1;
let p2TurnCounter = 1;

// document.getElementById("one").addEventListener("click", function() {
//   // document.getElementById("demo").innerHTML = "Hello World";
//   alert("hello");
// });

const whoseTurn = () => {};

const addX = objname => {
  alert(objname);
  document.getElementById(objname.id).innerHTML = "<div class='x'>X</div>";
};
const addO = objname => {
  alert(objname);
  document.getElementById(objname.id).innerHTML = "<div class='x'>O</div>";
};
