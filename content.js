var d = document.getElementById("show_notification_count");
d.style.fontSize = "10em";

setInterval(function () {
	location.href="javascript:countNotifications(); void 0";
},1000);

if (localStorage.getItem('ranger')===null)
	localStorage.setItem('ranger','0');
var rangers = ["https://i.imgur.com/bofm0HI.png","https://i.imgur.com/jxDaurc.jpg", "https://i.imgur.com/CxNVfRU.jpg", "https://i.imgur.com/4PuDRce.png", "https://i.imgur.com/nuNFQgg.jpg", "https://i.imgur.com/M6PwDcw.jpg","https://i.imgur.com/aDbOTBj.jpg"];
var sounds = ["6dzien", "notify", "power","kiedystobylo"];

window.setInterval(function(){
	let currentNotifications = localStorage.getItem('notifications');
	let up = localStorage.getItem('up');
	let checkNotifications = document.getElementById('show_notification_count').dataset.count;
	chrome.storage.local.get('sound', function(items) {
		playSound = items.sound;
		if (up > currentNotifications) {
			localStorage.setItem('up',checkNotifications);
			location.reload();
		}
		if (checkNotifications > currentNotifications) {
			currentNotifications = checkNotifications;
			localStorage.setItem('notifications',checkNotifications);

			if (currentNotifications > up) {
				chrome.runtime.sendMessage({type: "alertUser", value: sounds[playSound]});
				notifyMe();
			}
			localStorage.setItem('up',checkNotifications);
		} else {
			currentNotifications = checkNotifications;
			localStorage.setItem('notifications',checkNotifications);
		}
		changeTitle();
	});
	
}, 1000);
var odd = true;
function changeTitle() {
	if (localStorage.getItem('notifications')!=="") {
		if (odd) {
			document.title = 'Zgłoszenia - ' + localStorage.getItem('notifications') + ' - TeamBox';
			odd = false;
		} else {
			document.title = "TeamBox"; 
			odd = true;
		}
	} else {
		document.title = "TeamBox"; 
	}
}
//działa tylko na https albo z flagą --unsafely-treat-insecure-origin-as-secure="http://teambox.pl"
function notifyMe() {
	let d = new Date(),
			h = (d.getHours()<10?'0':'') + d.getHours(),
			m = (d.getMinutes()<10?'0':'') + d.getMinutes();
	let i = h + ':' + m;
	if (Notification.permission !== "granted") {
		Notification.requestPermission();
	console.log("nie"); }
	else {
		//let ranger = localStorage.getItem('ranger');
		chrome.storage.local.get('ranger', function(items) {
			ranger = items.ranger;
			var notification = new Notification("It's Morphin' Time!", {
				//icon: "https://i.imgur.com/bofm0HI.png",
				icon: rangers[ranger],
				body: "Godzina: " + i,
			});
			notification.onclick = function () {
				window.open("http://teambox.pl");      
			};
		});
	}
}