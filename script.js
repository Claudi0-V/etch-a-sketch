const gridContainer = document.querySelector('#grid-container');


function createGrid(row, column) {

const gridArr = [...Array(row * column).keys()];
gridArr.forEach(value => {
	div = document.createElement(`div`);
	div.classList.add('cell');
	gridContainer.appendChild(div);
})

}


function hoveringStyle(e) {
	e.target.classList.add('hovered');
}

createGrid(16, 16);


const gridCells = document.querySelectorAll('.cell');



gridCells.forEach(cell => cell.addEventListener('mouseover', hoveringStyle))