const gridContainer = document.querySelector('#grid-container');


function createGrid(row, column) {

const gridArr = [...Array(row * column).keys()];

gridArr.forEach(value => {
	div = document.createElement(`div.div${value}`);
	div.classList.add('cell');
	gridContainer.appendChild(div);
})

}


gridArr(16, 16);