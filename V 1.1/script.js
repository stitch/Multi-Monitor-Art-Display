// Check for the document ready state, or everything will be null etc on startup. 
// we have to start with this.
var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid ); 
	loadAnimations();
	setTimeout(function () {animate()}, 100); // wait for animations to load
    // do your work
}, 1000 );


function loadAnimations()
{
	loadAnimation("sa007");
	loadAnimation("websites");
	loadAnimation("stitch");
}

function loadAnimation(moduleName){
	fileBase = "Animations/" + moduleName + "/";

	// bijbehorende scripts laden
	var fileref=document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", fileBase + "javascript.js");
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	// bijbehorende css laden
	var fileref=document.createElement("link")
	fileref.setAttribute("rel", "stylesheet")
	fileref.setAttribute("type", "text/css")
	fileref.setAttribute("href", fileBase + "style.css")
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

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