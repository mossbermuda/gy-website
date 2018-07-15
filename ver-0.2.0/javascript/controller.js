/*
Javascript
Copyright @2016																
Godet and Young Hardware Limited Website version: 1.1.0
Designed and Built by Peter J. Sousa (Moss)
Controls various navigation and menu objects.
controller.js
*/
var droppedDown = 0;

function slideFeedback (radioNum) {
		document.getElementById('radio0').style.backgroundColor = "#3E474F";
		document.getElementById('radio1').style.backgroundColor = "#3E474F";
		document.getElementById('radio2').style.backgroundColor = "#3E474F";
		document.getElementById('radio3').style.backgroundColor = "#3E474F";
		document.getElementById('radio4').style.backgroundColor = "#3E474F";
		document.getElementById('radio5').style.backgroundColor = "#3E474F";

		document.getElementById('radio' + radioNum).style.backgroundColor = "#2E353B";

}

function categoryReset () {
		droppedDown = 0;
		document.getElementById('catdropdown').style.display = "none";
		document.getElementById('catSymbolTop').style.backgroundColor = "#A9A9A9";
		document.getElementById('catSymbolTop').style.width = "50%";
		document.getElementById('catSymbolTop').style.marginLeft = "25%";
		document.getElementById('catSymbolMid').style.backgroundColor = "#A9A9A9";
		document.getElementById('catSymbolMid').style.width = "50%";
		document.getElementById('catSymbolMid').style.marginLeft = "25%";
		document.getElementById('catSymbolBtm').style.backgroundColor = "#A9A9A9";
		document.getElementById('catSymbolBtm').style.width = "50%";
		document.getElementById('catSymbolBtm').style.marginLeft = "25%";
}

function dropDown (open) {
	// If the drop down menu is Up - drop the menu down and set droppedDown to 1
	if (droppedDown == 0) {
		document.getElementById('catdropdown').style.display = "initial";
		droppedDown = droppedDown + open;
		document.getElementById('catSymbolTop').style.backgroundColor = "#595959";
		document.getElementById('catSymbolTop').style.width = "20%";
		document.getElementById('catSymbolTop').style.marginLeft = "40%";

		document.getElementById('catSymbolMid').style.backgroundColor = "#595959";
		document.getElementById('catSymbolMid').style.width = "20%";
		document.getElementById('catSymbolMid').style.marginLeft = "40%";

		document.getElementById('catSymbolBtm').style.backgroundColor = "#595959";
		document.getElementById('catSymbolBtm').style.width = "20%";
		document.getElementById('catSymbolBtm').style.marginLeft = "40%";
	}
	// If the drop down menu is Down - raise the menu and set droppedDown to 0
	else if (droppedDown == 1) {
		categoryReset();
	}
}

setInterval(function() {
	var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    var y = "";
    if ((hour >= 8) && (day < 17) && (day != 0)) {
        y = "Open Now";
    } else {
        y = "Closed Now";
    }
    document.getElementById('open-close').innerHTML = y;
    document.getElementById('storeHRS').style.display = "initial";

}, 10000);

