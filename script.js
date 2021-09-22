const clearButton = document.querySelector('#clear-grid');
const main = document.querySelector('main');
const buttonsDiv = document.querySelector('#buttons-div');

const getGridCells = () => document.querySelectorAll('.cell');

const createGrid = (rows) => {
	const gridContainer = document.querySelector('#grid-container');
	gridContainer.remove();
	const newGrid = document.createElement('div');
	newGrid.setAttribute('id', 'grid-container');
	for (let i = 0; i < rows * rows; i++) {
		const div = document.createElement('div');
		div.classList.add('cell');
		newGrid.appendChild(div);
	}
	buttonsDiv.parentNode.insertBefore(newGrid, buttonsDiv.nextSibling)
}

const hoveringStyle = (e) => {
	e.target.classList.add('hovered');
}

const newGridRows = () => {
	let newGrid;
	do {
		newGrid = parseInt(prompt('What is the size of the new grid (Min 1, Max 100)?'));
	} while (newGrid > 100 || newGrid < 1);
	return newGrid;
}

const newGrid = () => {
	const newGrid = newGridRows();
	createGrid(newGrid);	
	const newGridCells = getGridCells();
	newGridCells.forEach(cell => cell.addEventListener('mouseover', hoveringStyle))
	document.documentElement.style.setProperty('--rows', `${newGrid}`);
}

createGrid(16);
const gridCells = getGridCells();

gridCells.forEach(cell => cell.addEventListener('mouseover', hoveringStyle));
clearButton.addEventListener('click', newGrid);