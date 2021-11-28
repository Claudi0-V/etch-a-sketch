const main = document.querySelector("main");
const buttonsDiv = document.querySelector("#buttons-div");
const gridContainer = document.querySelector("#grid-container");
const colorizeToggle = document.querySelector("#colorize");
const clearButton = document.querySelector(".clear");

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
/*
newGridButton.addEventListener("click", () =>
  modalContainer.style.setProperty("display", "flex")
);

sizeSelectButton.addEventListener("click", () => {
  createGrid(gridSizeValue.value);
  modalContainer.style.setProperty("display", "none");
});
clearButton.addEventListener("click", () => {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) =>
    cell.style.setProperty("background-color", "white")
  );
});

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    event.target.style.setProperty("display", "none");
  }
});
*/
