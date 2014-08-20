// Check for the document ready state, or everything will be null etc on startup. 
// we have to start with this.
var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid ); 
	animate();
    // do your work
}, 100 );


// debug function for loading the right page (while multiple people are working on it)
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) { 
		clearScreen();
        websitesInitialize(); // left
    }
    else if(event.keyCode == 39) {
		clearScreen();
        demosceneInitialize(); // right
    }
});



function animate(){
	// scheduleAnimation(animationRoutine, startMinute);
	scheduleAnimationModule("sa007", 0);
	scheduleAnimationModule("stitch", 1);
	scheduleAnimationModule("websites", 2);
	scheduleAnimationModule("stitch", 3);
	scheduleAnimationModule("sa007", 4);
	scheduleAnimationModule("websites", 5);
	scheduleAnimationModule("sa007", 6);
	scheduleAnimationModule("stitch", 7);
	scheduleAnimationModule("websites", 8);
	scheduleAnimationModule("stitch", 9);
	scheduleAnimationModule("sa007", 10);
	scheduleAnimationModule("websites", 11);
	scheduleAnimationModule("sa007", 12);
	scheduleAnimationModule("stitch", 13);
	scheduleAnimationModule("websites", 14);
	scheduleAnimationModule("stitch", 15);
	scheduleAnimationModule("sa007", 16);
	scheduleAnimationModule("websites", 17);
	scheduleAnimationModule("sa007", 18);
	scheduleAnimationModule("stitch", 19);
	scheduleAnimationModule("websites", 20);
	scheduleAnimationModule("stitch", 21);
	scheduleAnimationModule("sa007", 22);
	scheduleAnimationModule("websites", 23);
	scheduleAnimationModule("sa007", 24);
	scheduleAnimationModule("stitch", 25);
	scheduleAnimationModule("websites", 26);
	scheduleAnimationModule("stitch", 27);
	scheduleAnimationModule("sa007", 28);
	scheduleAnimationModule("websites", 29);
	scheduleAnimationModule("sa007", 30);
	scheduleAnimationModule("stitch", 31);
	scheduleAnimationModule("websites", 32);
	scheduleAnimationModule("stitch", 33);
	scheduleAnimationModule("sa007", 34);
	scheduleAnimationModule("websites", 35);
	scheduleAnimationModule("sa007", 36);
	scheduleAnimationModule("stitch", 37);
	scheduleAnimationModule("websites", 38);
	scheduleAnimationModule("stitch", 39);
	scheduleAnimationModule("sa007", 40);
	scheduleAnimationModule("websites", 41);
	scheduleAnimationModule("sa007", 42);
	scheduleAnimationModule("stitch", 43);
	scheduleAnimationModule("websites", 44);
	scheduleAnimationModule("stitch", 45);
	scheduleAnimationModule("sa007", 46);	
	scheduleAnimationModule("websites", 47);
	scheduleAnimationModule("sa007", 48);
	scheduleAnimationModule("stitch", 49);
	scheduleAnimationModule("websites", 50);
	scheduleAnimationModule("stitch", 51);
	scheduleAnimationModule("sa007", 52);
	scheduleAnimationModule("websites", 53);
	scheduleAnimationModule("sa007", 54);
	scheduleAnimationModule("stitch", 55);
	scheduleAnimationModule("websites", 56);
	scheduleAnimationModule("stitch", 57);
	scheduleAnimationModule("sa007", 58);
	scheduleAnimationModule("websites", 59);
	
	// restart this sequence every hour
	setTimeout("animate()", 3600000); // one hour
}

// this will schedule something for a minute of the hour. if minute has passed, it will do for the next hour.
// minute is 0 to 59
// @see http://www.w3schools.com/jsref/jsref_obj_date.asp
var previousModule = null;
function scheduleAnimationModule(moduleName, minute) {

	var now = new Date();
	var future = new Date();
	
	if (minute >= now.getMinutes()) {
		// schedule for this hour
		future.setMinutes(minute);
	} else {
		// schedule for next hour
		future.setMinutes(minute + 60);
	}
	
	var timeUntillHappening = future.getTime() - now.getTime();
	
	setTimeout(moduleName + "Initialize()", timeUntillHappening); // module handles it own initialization. (better call that.)
	// console.log("animation" + animationRoutine + " scheduled for seconds: " + timeUntillHappening / 1000);
	
	// also schedule the Clear method of the previous module, just 150 ms second earlier.
	if (previousModule != null) {
		setTimeout(previousModule + "Clear()", timeUntillHappening - 150);
	}
	
	previousModule = moduleName;
	// Call the Clear routine.
}

// generic routine to clear all screens for the next animation to rebuild and show things
function clearScreen(){
	if (document.body != null) {
		document.body.innerHTML = '';
	}
}

// note: this does not clear the previous div if you set it twice.
function displayURLOnMonitor(monitorname, url){
	
	var contentDiv = document.createElement('div');
	var monitor = document.getElementById(monitorname);
	if (monitor != null){
		contentDiv.setAttribute("id", "content");
		contentDiv.innerHTML =  '<iframe src="' + url + '" width="1356" height="764" scrolling="no" seamless></iframe>';
		monitor.appendChild(contentDiv);
		monitor.setAttribute("style", "background-color: white");
	}
	
}

// END GENERIC STUFF!
///////////

/**
	<MODULE Websites>
*/
function websitesInitialize(){
	clearScreen();
	displayURLOnMonitor("monitor1", "https://hack42.nl/gallery/v/Spacecam/");
	displayURLOnMonitor("monitor2", "https://hack42.nl/spacestate/1wire/plattegrond.php#contentSub");
	displayURLOnMonitor("monitor3", "https://hack42.nl/wiki/Activiteiten?useskin=chick#toekomstig");
	displayURLOnMonitor("monitor4", "https://twitter.com/hack42");
}

function websitesClear(){
	clearScreen();
}
/**
	</MODULE websites>	
*/


/**
	<MODULE demoscene>
*/
function demosceneInitialize(){
	clearScreen();
		
	displayURLOnMonitor("monitor1", "http://www.p01.org/releases/MINAMI_DISTRICT/MINAMI_DISTRICT.unpacked.htm");
	displayURLOnMonitor("monitor2", "http://301.untergrund.net/elevated.html");
	displayURLOnMonitor("monitor3", "http://301.untergrund.net/elevated.html");
	displayURLOnMonitor("monitor4", "http://scoopex1988.org/released/prods/2012/RadioTherapy/");
}

function demosceneClear(){
	clearScreen();
}
/**

	</MODULE demoscene>	
*/




/**
	<MODULE STITCH>
	
*/
/** Start Stitch */
var stitchIntervalHandle1 = null;
var stitchIntervalHandle2 = null;
var stitchIntervalHandle3 = null;
var stitchIntervalHandle4 = null;

function stitchInitialize()
{
	clearScreen();
	stitchArt(); // start the show
}

function stitchArt()
{
	
	stitchIntervalHandle1 = window.setInterval(function() { stitchRandomizeMonitorColor("monitor1") }, 3000 + Math.random() * 2000);
	stitchIntervalHandle2 = window.setInterval(function() { stitchRandomizeMonitorColor("monitor2") }, 3000 + Math.random() * 2000);
	stitchIntervalHandle3 = window.setInterval(function() { stitchRandomizeMonitorColor("monitor3") }, 3000 + Math.random() * 2000);
	stitchIntervalHandle4 = window.setInterval(function() { stitchRandomizeMonitorColor("monitor4") }, 3000 + Math.random() * 2000);
	
	// clearInterval(id); id = handle van setInterval. Moet global etc. 
}

// clear this mess
function stitchClear(){

	// kill handles before you become epileptic.
	if (stitchIntervalHandle1 != null)
	clearInterval(stitchIntervalHandle1);
	
	if (stitchIntervalHandle2 != null)
	clearInterval(stitchIntervalHandle2);
	
	if (stitchIntervalHandle3 != null)
	clearInterval(stitchIntervalHandle3);
	
	if (stitchIntervalHandle4 != null)
	clearInterval(stitchIntervalHandle4);
	
	// reset background to natural color
	var monitor = document.getElementById("monitor1");
	if (monitor != null){
		monitor.setAttribute("style", "background-color: white");
	}
	
	var monitor = document.getElementById("monitor2");
	if (monitor != null){
		monitor.setAttribute("style", "background-color: white");
	}
	
	var monitor = document.getElementById("monitor3");
	if (monitor != null){
		monitor.setAttribute("style", "background-color: white");
	}
	
	var monitor = document.getElementById("monitor4");
	if (monitor != null){
		monitor.setAttribute("style", "background-color: white");
	}
}

function stitchRandomizeMonitorColor(monitorName){
	var monitor = document.getElementById(monitorName);
	if (monitor != null){
		monitor.setAttribute("style", "background-color: " + stitchGetRandomColor());
	}
}

function stitchGetRandomColor() {	
	var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
	return colors[Math.floor(Math.random() * colors.length)];
};

/**

	</MODULE STITCH>	
*/

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