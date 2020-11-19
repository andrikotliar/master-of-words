const letter = document.querySelector('#letter');
const generateBtn = document.querySelector('#generate');
const mode = document.querySelector('#mode');

let fullAlphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'];

let gameAlphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'І', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Х', 'Ш', 'Ю', 'Я'];

let colors = ['#d32f2f', '#1faa00', '#ff6d00', '#546e7a', '#00e676', '#e53935', '#5c007a', '#f06292', '#3d5afe', '#ff9800'];

function randomLetter(alphabet) {
	let index = Math.floor(Math.random() * alphabet.length);
	let colorIndex = Math.floor(Math.random() * colors.length);
	letter.textContent = alphabet[index];
	letter.style.color = colors[colorIndex];
}

function generateLetter() {
	if(mode.value == 'short') {
		randomLetter(gameAlphabet);
	}
	else {
		randomLetter(fullAlphabet);
	}
}

generateBtn.addEventListener('click', generateLetter);