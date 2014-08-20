/**
	</MODULE SA007>	

*/
// clears screen content and sets the needed HTML tags.
function sa007Initialize(){
	clearScreen();
	/**
	Bootcode, creating the articles to store some text
	*/
	
	var contentDiv = document.createElement('div');
	
	var monitor1 = document.getElementById("monitor1");
	if (monitor1 != null){
		contentDiv.setAttribute("id", "content");
		contentDiv.innerHTML =  '<article id="sa007Werkwoord"></article>';
		monitor1.appendChild(contentDiv);
		monitor1.setAttribute("style", "background-color: white");
	}
	
	var monitor2 = document.getElementById("monitor2");
	if (monitor2 != null){
		contentDiv.setAttribute("id", "content");
		contentDiv.innerHTML =  '<article id=\"sa007Iets\"></article>';
		monitor2.appendChild(contentDiv);
		monitor2.setAttribute("style", "background-color: white");
	}
	
	
	var monitor3 = document.getElementById("monitor3");
	if (monitor3 != null){
		contentDiv.setAttribute("id", "content");
		contentDiv.innerHTML =  '<article id=\"sa007Voorzetsel\"></article>';
		monitor3.appendChild(contentDiv);
		monitor3.setAttribute("style", "background-color: white");
	}
	
	
	var monitor4 = document.getElementById("monitor4");
	if (monitor4 != null){
		contentDiv.setAttribute("id", "content");
		contentDiv.innerHTML =  '<article id=\"sa007Voornaamwoord\"></article>';
		monitor4.appendChild(contentDiv);
		monitor4.setAttribute("style", "background-color: white");
	}

	// start the show
	sa007Art();
}

var sa007IntervalHandle1 = null;
var sa007IntervalHandle2 = null;
var sa007IntervalHandle3 = null;
var sa007IntervalHandle4 = null;

function sa007Art() {
	
	/**
	Settings
	*/
	var minimumTime = 5000; // default 5000
	var maxRandomTime = 5000; // default 5000


	/**
	The program
	As i'm looking now, i don't understand why this routine is kept being called... ah, interval. Done. 
	*/
	sa007IntervalHandle1 = window.setInterval("sa007Werkwoord()",minimumTime + Math.random() * maxRandomTime);
	sa007IntervalHandle2 = window.setInterval("sa007Iets()",minimumTime + Math.random() * maxRandomTime);
	sa007IntervalHandle3 = window.setInterval("sa007Voorzetsel()",minimumTime + Math.random() * maxRandomTime);
	sa007IntervalHandle4 = window.setInterval("sa007Voornaamwoord()",minimumTime + Math.random() * maxRandomTime);
}

function sa007Clear(){
	if (sa007IntervalHandle1 != null)
		clearInterval(sa007IntervalHandle1);
	if (sa007IntervalHandle2 != null)
		clearInterval(sa007IntervalHandle2);
	if (sa007IntervalHandle3 != null)
		clearInterval(sa007IntervalHandle3);
	if (sa007IntervalHandle4 != null)
		clearInterval(sa007IntervalHandle4);
}

function sa007ToonWillekeurigWoord(id, woorden) {
	var woord = woorden[Math.floor(Math.random() * woorden.length)];
	var locatie = document.getElementById(id);
	if (locatie != null){
		locatie.innerHTML = woord;
	}
}

function sa007Werkwoord() {
  sa007ToonWillekeurigWoord("sa007Werkwoord", ["Doe", "Zeg", "Heb", "Maak", "Wil"]);
};

function sa007Iets() {
  sa007ToonWillekeurigWoord("sa007Iets", ["Iets", "Niks", "Meer", "Wat", "Alles"]);
};

function sa007Voorzetsel() {
  sa007ToonWillekeurigWoord("sa007Voorzetsel", ["Met", "Van", "Aan", "Tegen", "Voor"]);
};

function sa007Voornaamwoord() {
  sa007ToonWillekeurigWoord("sa007Voornaamwoord", ["Mij", "Ons", "Hen", "Jullie", "Henk", "Chriet"]);
};

/**

	</MODULE SA007>	
*/