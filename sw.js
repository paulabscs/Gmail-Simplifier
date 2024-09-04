//Author: paulabscs
//service worker WIP

chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        if (request.message === "messageSent"){
            receivedSignal();
            sendResponse({threat: "I told popup you said that to me!"});
	}
    }
);

(async () => {
try{
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = await chrome.tabs.sendMessage(tab.id, {greeting: "popup said hello to me!"});
  // unfinished
  console.log(response);
} catch {
console.log('catch');
}
})();


function receivedSignal(){
	console.log("background has received")
}

