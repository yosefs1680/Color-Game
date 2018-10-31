
	var numSquares = 6;	
	var colors = [];
	var pickedColor;

	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var modeButtons = document.querySelectorAll(".mode");

	init();

	function init() {		
		setupModeButtons();
		setupSquares();
		reset();
	}

	//add click listeners to buttons
	function setupModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				modeButtons[2].classList.remove("selected");
				this.classList.add("selected");
				if (this.textContent === "Easy") {
					numSquares = 3;
				} else if (this.textContent === "Medium"){
					numSquares = 6;
				} else //case of Very Hard:
					numSquares = 9;
				//shorter way to write the condition by 'ternary operator': 
				//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				reset();
			});
		}
	}
	//add click listeners to squares
	function setupSquares(){
		for(var i = 0; i < squares.length; i++) {		
			squares[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
				if (clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!!!";
					resetButton.textContent = "Play Again?";
					changeColor(pickedColor);
					h1.style.backgroundColor = clickedColor;
				}
				else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			});
		}
	}

	function reset() {
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors"
		messageDisplay.textContent = "";
		//change colors of squares
		for(var i = 0; i < squares.length; i++) {
			if (colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];}
			else {
				squares[i].style.display = "none";}			
		}
		h1.style.backgroundColor = "steelblue";
	}

	//pick one of the colors from the colors array
 	function pickColor() {
 		var random = Math.floor(Math.random() * colors.length);
 		return colors[random]; 
 	}
	
	resetButton.addEventListener("click", function() {
		reset();
	});
	
	//change all squares to the correct color
	function changeColor(color) {
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}
	
  	function generateRandomColors(num) {
  		var arr = [];
  		for(var i = 0; i < num; i++) {
  			arr.push(randomColor());
  		}
  		return arr;
  	}

  	function randomColor() {
  		//pick red between 0 - 255
  		var r = Math.floor(Math.random() * 256);
  		//pick green
  		var g = Math.floor(Math.random() * 256);
  		//pick blue
  		var b = Math.floor(Math.random() * 256);

  		return "rgb(" + r + ", " + g + ", " + b + ")";
  	}