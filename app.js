var dificulty = 6;
var booldif = "hard";
var colors = generateRandomColors(dificulty);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var ebtn = document.querySelector("#ebtn");
var hbtn = document.querySelector("#hbtn");
var h1 = document.querySelector("h1");
hbtn.classList.add("selected");



//boton de selecion de dificulta HARD
	hbtn.addEventListener("click", function () {
		hbtn.classList.add("selected");
		ebtn.classList.remove("selected");
		booldif = "hard";
		dificulty = 6;
		reset();
	})

//boton de selecion de dificulta EASY
	ebtn.addEventListener("click", function () {
		hbtn.classList.remove("selected");
		ebtn.classList.add("selected");
		booldif = "easy";
		dificulty = 3;
		reset();
		for (var i = 3; i < 6 ; i++) {
		squares[i].style.background = "#232323";
		}
})

init();
//funcion inicial, inicializa todo el proceso
function init () {

	colorDisplay.textContent = pickedColor;

//Recorrido de los cuadros para colocarles los colores
	for (var i = 0; i < dificulty ; i++) {

	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function () {
		console.log(this.style.background);

		clickedColor = this.style.background;
		if ( clickedColor === pickedColor) {
			changeColors(clickedColor);
			messageDisplay.textContent = "Winning";
			reset.textContent = "Play Again"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "try again";
			}
		})
	}
	// console.log(colors);
}


//Funcion para cambiar todos los cuadros con el el cuadro del color ganador y el h1
function changeColors(color) {
	if (booldif === "hard") {
		for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = pickedColor;

	}
	}
	if (booldif === "easy") {
		for (var i = 0; i < 3; i++) {
		squares[i].style.background = pickedColor;

	}
	}

	h1.style.background = pickedColor;
}

//generar colores aleatoreos en los 6 o 3 cuadros
function generateRandomColors(dificulty) {
	var newcolors = [];

	for (var i = 0; i < dificulty; i++) {
		num = randomColor();
		newcolors.push(num);
	}
	return newcolors;
}

//generar el color ganador
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//genera el rgb random de un solo color
function randomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}


// Function for new colors
function reset() {
	colors = generateRandomColors(dificulty);
	console.log(dificulty);
	pickedColor = pickColor();
	h1.style.background = "#006CC1";
	messageDisplay.textContent = "";
	reset.textContent = "New colors";
	init();
}
resetButton.addEventListener("click", reset)

