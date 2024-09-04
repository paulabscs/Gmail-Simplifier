//Author: paulabscs
//checks the domain of the website

'use strict';

console.log("This is a popup script!")
var dev = document.getElementById('Devisualize')

function ISgmail(event) {
	console.log("This is a isgmail!")
	if (location.hostname === 'mail.google.com' || location.hostname.endsWith('.google.com')){
		console.log("in gmail");
		chrome.runtime.sendMessage({message: "messageSent"}, function (response) {console.log(response);});
		window.close();
		
	} else { console.log("not in gmail"); }
}

dev.addEventListener('click', ISgmail);