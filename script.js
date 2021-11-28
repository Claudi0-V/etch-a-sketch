const root = document.querySelector(":root");
const main = document.querySelector("main");
const buttonsDiv = document.querySelector("#buttons-div");
const newGridButton = document.querySelector(".new-grid");
const sizeSelectButton = document.querySelector("#size-selector");
const gridSizeValue = document.querySelector("#grid-size-value");
const clearButton = document.querySelector(".clear");
const modalContainer = document.querySelector(".modal-container");
const gridContainer = document.querySelector("#grid-container");
const colorizeToggle = document.querySelector("#colorize");
const colorize = false;

const randomColor = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
const createGrid = (rows) => {
  if (rows < 2 || rows > 100) rows = 16;
  const grid = document.querySelector(".grid");
  grid.remove();
  const newGrid = document.createElement("div");
  newGrid.setAttribute("class", "grid");
  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.addEventListener("mousemove", changeCellBackground);
    div.classList.add("cell");
    newGrid.appendChild(div);
  }
  root.style.setProperty("--rows", `${rows}`);
  gridContainer.append(newGrid);
};

const changeCellBackground = (event) => {
  if (colorize) {
    event.target.style.backgroundColor = randomColor();
  } else {
    event.target.style.backgroundColor = "black";
  }
};

createGrid(16);
newGridButton.addEventListener("click", () =>
  modalContainer.style.setProperty("display", "flex")
);

sizeSelectButton.addEventListener("click", () => {
  createGrid(parseInt(gridSizeValue.value));
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
colorizeToggle.addEventListener("change", () => (colorize = !colorize));
