//get elements from DOM
const gridBox = document.querySelector(".gridBox");
let box = document.createElement("div");
box.classList.add("box");
let boxNum = prompt("How many pixels wide do you want the grid to be?");
gridBox.setAttribute("style", `grid-template-columns: repeat(${boxNum}, 1fr)`);

//create grid
for (let x = 0; x < boxNum; x++) {
  for (let y = 0; y < boxNum; y++) {
    gridBox.appendChild(box.cloneNode(true));
  }
}

//change color after hovering over with mouse
function changeColor(e) {
  if (e.target.matches(".box")) {
    e.target.style.backgroundColor = "black";
  }
}
const newBoxes = document.querySelector(".gridBox");
newBoxes.addEventListener("mouseover", changeColor);
