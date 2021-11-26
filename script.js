const clearButton = document.querySelector("#clear-grid");
const main = document.querySelector("main");
const buttonsDiv = document.querySelector("#buttons-div");
const gridContainer = document.querySelector("#grid-container");

const colorize = false;

const createGrid = (rows) => {
  if (rows < 2 && grid > 100) rows = 16;
  const grid = document.querySelector(".grid");
  grid.remove();
  const newGrid = document.createElement("div");
  newGrid.setAttribute("class", "grid");
  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.addEventListener("mousemove", changeCellBackground);
    div.classList.add("cell");
    grid.appendChild(div);
  }
  gridContainer.append(grid);
};

const changeCellBackground = (event) => {
  event.target.style.backgroundColor = "black";
};

createGrid(16);
clearButton.addEventListener("click", createGrid);
