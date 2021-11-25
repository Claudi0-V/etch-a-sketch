const clearButton = document.querySelector("#clear-grid");
const main = document.querySelector("main");
const buttonsDiv = document.querySelector("#buttons-div");
const colorize = false;

const getGridCells = () => document.querySelectorAll(".cell");

const createGrid = (rows) => {
  if (rows < 2 && grid > 100) rows = 16;
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.remove();
  const newGrid = document.createElement("div");
  newGrid.setAttribute("id", "grid-container");
  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.addEventListener("mousemove", changeCellBackground);
    div.classList.add("cell");
    newGrid.appendChild(div);
  }
  buttonsDiv.parentNode.insertBefore(newGrid, buttonsDiv.nextSibling);
};

const changeCellBackground = (event) => {
  event.target.style.backgroundColor = "black";
};

const newGridRows = () => {
  let newGrid;
  do {
    newGrid = parseInt(
      prompt("What is the size of the new grid (Min 1, Max 100)?")
    );
  } while (newGrid > 100 || newGrid < 1);
  return newGrid;
};

createGrid(16);
const gridCells = getGridCells();

clearButton.addEventListener("click", newGrid);

