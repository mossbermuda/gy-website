onload = function storeHours() {
	var d = new Date();
	var day = d.getDay();
	var hour = d.getHours();
	if ((hour >= 8) && (hour < 17) && (day != 0)) {
		document.getElementById("storeHR").src = "../images/openNow.png";
        
	} else {
		document.getElementById("storeHR").src = "../images/closedNow.png";
	}
}