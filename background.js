chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "alertUser":
			console.log(message.value);
			var audio = new Audio(message.value+'.mp3');
			audio.play();
			break;
	}
});
