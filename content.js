
console.log("welcome to contentjs for Gmail simplifier");

(async () => {
  const response = await chrome.runtime.sendMessage({greeting: "hello"});
  // message passing - unfinished
  console.log(response);
})();

HIDEbar();

function HIDEbar() {
	var elements = document.getElementsByClassName('aeN WR baA nH oy8Mbf')// alternatively use querySelectorAll();
	console.log("elements.length");
	console.log(elements.length);
	for (var i = 0, l = elements.length; i < l; i++) {
		elements[i].style.display = 'none';
	}
}


function receivedSignal(){
	console.log("content has recieved")
}