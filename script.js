var css = document.querySelector("textarea");
var color1 = document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("RandomBtn");
var button2 = document.getElementById("copy");
var tooltip = document.querySelector("span");
console.log(body);

function colorPicker(){
	body.style.background = "linear-gradient(to right ," 
	+color1.value 
	+"," 
	+color2.value 
	+")";

	showGradient();
	
}

function copyText(){
	var copy = document.getElementById("textArea");
	copy.select();
	document.execCommand("copy");

}

function showGradient(){

	css.textContent = body.style.background + ";";
}

function getRandomColor(){
 var hue =  [Math.floor(Math.random() * 256),  Math.floor(Math.random() * 256 ), Math.floor(Math.random() * 256)];

 var hue1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)];
 
 body.style.background = "linear-gradient(to right, rgb(" + hue[0] + "," + hue[1] + "," + hue[2] + "), rgb(" + hue1[0] + "," + hue1[1] + "," + hue1[2] + ")";


showGradient();
}

color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);

button.addEventListener("click",getRandomColor);
button2.addEventListener("click",copyText);



