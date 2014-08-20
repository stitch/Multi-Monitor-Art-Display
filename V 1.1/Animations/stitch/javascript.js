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