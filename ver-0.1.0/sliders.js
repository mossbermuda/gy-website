var currToolSlide = 0;
var currPlumbSlide = 0;
var currHomeSlide = 0;
var currPaintSlide = 0;
var currElectSlide = 0;
var currMarineSlide = 0;
var currLumberSlide = 0;
var currAboutSlide = 0;

var max = 4;
var maxFour = 3;
var maxThree = 2;
var maxTwo = 1;
var min = 0;

function toolSliderChange(next, select) {
	for (var i = 0; i < 5; i++) {
		document.getElementById('toolBox' + i).style.display = "none";
		document.getElementById('toolSelect' + i).style.width = "10.0vw";
		document.getElementById('toolSelect' + i).style.fontSize = "1.7vw";
		document.getElementById('toolSelect' + currToolSlide).style.color = "#808080";
	}

	if (next == 0) {
		currToolSlide = select;
	}

	else if (next == 1) {
		if (currToolSlide == max) {
			currToolSlide = min;
		}
		else {
			currToolSlide = currToolSlide + 1;
		}
	}

	else if (next == -1) {
		if (currToolSlide == min) {
			currToolSlide = max;
		}
		else {
			currToolSlide = currToolSlide - 1;
		}
	}
	document.getElementById('toolBox' + currToolSlide).style.display = "initial";
	document.getElementById('toolSelect' + currToolSlide).style.width = "15.0vw";
	document.getElementById('toolSelect' + currToolSlide).style.fontSize = "2.6vw";
	document.getElementById('toolSelect' + currToolSlide).style.color = "#000000";
}

function plumbSliderChange(next, select) {
	for (var i = 0; i < 5; i++) {
		document.getElementById('plumbBox' + i).style.display = "none";
		document.getElementById('plumbSelect' + i).style.width = "10.0vw";
		document.getElementById('plumbSelect' + i).style.fontSize = "1.7vw";
		document.getElementById('plumbSelect' + currPlumbSlide).style.color = "#808080";
	}

	if (next == 0) {
		currPlumbSlide = select;
	}

	else if (next == 1) {
		if (currPlumbSlide == max) {
			currPlumbSlide = min;
		}
		else {
			currPlumbSlide = currPlumbSlide + 1;
		}
	}

	else if (next == -1) {
		if (currPlumbSlide == min) {
			currPlumbSlide = max;
		}
		else {
			currPlumbSlide = currPlumbSlide - 1;
		}
	}
	document.getElementById('plumbBox' + currPlumbSlide).style.display = "initial";
	document.getElementById('plumbSelect' + currPlumbSlide).style.width = "15.0vw";
	document.getElementById('plumbSelect' + currPlumbSlide).style.fontSize = "2.6vw";
	document.getElementById('plumbSelect' + currPlumbSlide).style.color = "#000000";
}

function homeSliderChange(next, select) {
	for (var i = 0; i < 5; i++) {
		document.getElementById('homeBox' + i).style.display = "none";
		document.getElementById('homeSelect' + i).style.width = "10.0vw";
		document.getElementById('homeSelect' + i).style.fontSize = "1.7vw";
		document.getElementById('homeSelect' + currHomeSlide).style.color = "#808080";
	}

	if (next == 0) {
		currHomeSlide = select;
	}

	else if (next == 1) {
		if (currHomeSlide == max) {
			currHomeSlide = min;
		}
		else {
			currHomeSlide = currHomeSlide + 1;
		}
	}

	else if (next == -1) {
		if (currHomeSlide == min) {
			currHomeSlide = max;
		}
		else {
			currHomeSlide = currHomeSlide - 1;
		}
	}
	document.getElementById('homeBox' + currHomeSlide).style.display = "initial";
	document.getElementById('homeSelect' + currHomeSlide).style.width = "15.0vw";
	document.getElementById('homeSelect' + currHomeSlide).style.fontSize = "2.6vw";
	document.getElementById('homeSelect' + currHomeSlide).style.color = "#000000";
}
	
function paintSliderChange(next, select) {
	for (var i = 0; i < 4; i++) {
		document.getElementById('paintBox' + i).style.display = "none";
		document.getElementById('paintSelect' + i).style.width = "8.0vw";
		document.getElementById('paintSelect' + i).style.fontSize = "1.5vw";
		document.getElementById('paintSelect' + currPaintSlide).style.color = "#808080";
	}

	if (next == 0) {
		currPaintSlide = select;
	}

	else if (next == 1) {
		if (currPaintSlide == maxFour) {
			currPaintSlide = min;
		}
		else {
			currPaintSlide = currPaintSlide + 1;
		}
	}

	else if (next == -1) {
		if (currPaintSlide == min) {
			currPaintSlide = maxFour;
		}
		else {
			currPaintSlide = currPaintSlide - 1;
		}
	}
	document.getElementById('paintBox' + currPaintSlide).style.display = "initial";
	document.getElementById('paintSelect' + currPaintSlide).style.width = "10.667vw";
	document.getElementById('paintSelect' + currPaintSlide).style.fontSize = "2.4vw";
	document.getElementById('paintSelect' + currPaintSlide).style.color = "#000000";
}

function electSliderChange(next, select) {
	for (var i = 0; i < 3; i++) {
		document.getElementById('electBox' + i).style.display = "none";
		document.getElementById('electSelect' + i).style.width = "15.0vw";
		document.getElementById('electSelect' + i).style.fontSize = "2.0vw";
		document.getElementById('electSelect' + currElectSlide).style.color = "#808080";
	}

	if (next == 0) {
		currElectSlide = select;
	}

	else if (next == 1) {
		if (currElectSlide == maxThree) {
			currElectSlide = min;
		}
		else {
			currElectSlide = currElectSlide + 1;
		}
	}

	else if (next == -1) {
		if (currElectSlide == min) {
			currElectSlide = maxThree;
		}
		else {
			currElectSlide = currElectSlide - 1;
		}
	}
	document.getElementById('electBox' + currElectSlide).style.display = "initial";
	document.getElementById('electSelect' + currElectSlide).style.width = "20.0vw";
	document.getElementById('electSelect' + currElectSlide).style.fontSize = "2.6vw";
	document.getElementById('electSelect' + currElectSlide).style.color = "#000000";
}

function aboutSliderChange(next, select) {
	for (var i = 0; i < 3; i++) {
		document.getElementById('aboutBox' + i).style.display = "none";
		document.getElementById('aboutSelect' + i).style.width = "15.0vw";
		document.getElementById('aboutSelect' + i).style.fontSize = "2.0vw";
		document.getElementById('aboutSelect' + currAboutSlide).style.color = "#808080";
	}

	if (next == 0) {
		currAboutSlide = select;
	}

	else if (next == 1) {
		if (currAboutSlide == maxThree) {
			currAboutSlide = min;
		}
		else {
			currAboutSlide = currAboutSlide + 1;
		}
	}

	else if (next == -1) {
		if (currAboutSlide == min) {
			currAboutSlide = maxThree;
		}
		else {
			currAboutSlide = currAboutSlide - 1;
		}
	}
	document.getElementById('aboutBox' + currAboutSlide).style.display = "initial";
	document.getElementById('aboutSelect' + currAboutSlide).style.width = "20.0vw";
	document.getElementById('aboutSelect' + currAboutSlide).style.fontSize = "2.6vw";
	document.getElementById('aboutSelect' + currAboutSlide).style.color = "#000000";
}

function marineSliderChange(next, select) {
	for (var i = 0; i < 3; i++) {
		document.getElementById('marineBox' + i).style.display = "none";
		document.getElementById('marineSelect' + i).style.width = "10.0vw";
		document.getElementById('marineSelect' + i).style.fontSize = "1.5vw";
		document.getElementById('marineSelect' + currMarineSlide).style.color = "#808080";
	}

	if (next == 0) {
		currMarineSlide = select;
	}

	else if (next == 1) {
		if (currMarineSlide == maxThree) {
			currMarineSlide = min;
		}
		else {
			currMarineSlide = currMarineSlide + 1;
		}
	}

	else if (next == -1) {
		if (currMarineSlide == min) {
			currMarineSlide = maxThree;
		}
		else {
			currMarineSlide = currMarineSlide - 1;
		}
	}
	document.getElementById('marineBox' + currMarineSlide).style.display = "initial";
	document.getElementById('marineSelect' + currMarineSlide).style.width = "12.667vw";
	document.getElementById('marineSelect' + currMarineSlide).style.fontSize = "2.4vw";
	document.getElementById('marineSelect' + currMarineSlide).style.color = "#000000";
}

function lumberSliderChange(next, select) {
	for (var i = 0; i < 2; i++) {
		document.getElementById('lumberBox' + i).style.display = "none";
		document.getElementById('lumberSelect' + i).style.width = "20.0vw";
		document.getElementById('lumberSelect' + i).style.fontSize = "2.0vw";
		document.getElementById('lumberSelect' + currLumberSlide).style.color = "#808080";
	}

	if (next == 0) {
		currLumberSlide = select;
	}

	else if (next == 1) {
		if (currLumberSlide == maxTwo) {
			currLumberSlide = min;
		}
		else {
			currLumberSlide = currLumberSlide + 1;
		}
	}

	else if (next == -1) {
		if (currLumberSlide == min) {
			currLumberSlide = maxTwo;
		}
		else {
			currLumberSlide = currLumberSlide - 1;
		}
	}
	document.getElementById('lumberBox' + currLumberSlide).style.display = "initial";
	document.getElementById('lumberSelect' + currLumberSlide).style.width = "30.0vw";
	document.getElementById('lumberSelect' + currLumberSlide).style.fontSize = "2.6vw";
	document.getElementById('lumberSelect' + currLumberSlide).style.color = "#000000";
}