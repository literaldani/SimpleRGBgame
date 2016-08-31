var dificulty = 6;
var booldif = "hard";
var colors = randomrgb(dificulty);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var newColors = document.querySelector("#newColors");
var ebtn = document.querySelector("#ebtn");
var hbtn = document.querySelector("#hbtn");
var h1 = document.querySelector("h1");


init();

function init () {
	hbtn.classList.add("selected");

	hbtn.addEventListener("click", function () {
		hbtn.classList.add("selected");
		ebtn.classList.remove("selected");
		booldif = "hard";
	})
	ebtn.addEventListener("click", function () {
		hbtn.classList.remove("selected");
		ebtn.classList.add("selected");	
		booldif = "easy";
	})
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {

	squares[i].style.background = colors[i];	

	squares[i].addEventListener("click",function () {
		console.log(this.style.background);
		
		clickedColor = this.style.background;
		if ( clickedColor === pickedColor) {
			changeColors(clickedColor);
			messageDisplay.textContent = "Winning";
			newColors.textContent = "Play Again"
		} else {
			this.style.background = "#232323";	
			messageDisplay.textContent = "try again";
		}
	})
}
}



function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = pickedColor;	

	}
	h1.style.background = pickedColor;
}

function randomrgb(dificulty) {
	var newcolors = [];

	for (var i = 0; i < dificulty; i++) {
		num = randomColor();
		newcolors.push(num);
	}
	return newcolors;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}


// Function for new colors

newColors.addEventListener("click", function () {
	colors = randomrgb(6);
	pickedColor = pickColor();
	h1.style.background = "#232323";
	messageDisplay.textContent = "";
	newColors.textContent = "New colors";
	init();
	
})