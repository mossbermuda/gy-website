onload = function otherStoreHours() {
	var d = new Date();
	var day = d.getDay();
	var hour = d.getHours();
if ((hour >= 9) && (hour < 17) && ((day == 1) || (day == 2) || (day == 3))) {
		document.getElementById("storeHRSOther").src = "../images/newopentime.png";       
	} else {
		document.getElementById("storeHRSOther").src = "../images/newclosetime.png";
	}
}



