const div16 = document.querySelector('#grid-container');
const arr16 = [...Array(16 * 16).keys()];

arr16.forEach(value => {
	div = document.createElement(`div.div${value}`);
	div.classList.add('cell');
	div16.appendChild(div);
})

