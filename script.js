const gridContainer = document.querySelector('#grid-container');
const clearButton = document.querySelector('#clear-grid');
const gridDeffiner = () => document.querySelectorAll('.cell');


function createGrid(rows) {
	const gridArr = [...Array(rows * rows).keys()];
	gridArr.forEach(value => {
		div = document.createElement(`div`);
		div.classList.add('cell');
		gridContainer.appendChild(div);
	})
}


function hoveringStyle(e) {
	e.target.classList.add('hovered');
}


function newGridRows() {
	let newGrid = 0;
	do {
		newGrid = parseInt(prompt('What is the size of the new grid (Max 100)?'));
	} while (newGrid > 100);
	return newGrid;
}

function resetStyle() {
	gridCells.forEach(cell => cell.classList.remove('hovered'));
	let cells = document.querySelectorAll('.cell');;
	cells.forEach(cell => gridContainer.removeChild(cell))
	let newGrid = newGridRows();
	createGrid(newGrid);	
	const newGridCells = gridDeffiner();
	newGridCells.forEach(cell => cell.addEventListener('mouseover', hoveringStyle))
	document.documentElement.style.setProperty('--row', `${newGrid}`);
}

createGrid(16);
const gridCells = gridDeffiner();

gridCells.forEach(cell => cell.addEventListener('mouseover', hoveringStyle));
clearButton.addEventListener('click', resetStyle);
