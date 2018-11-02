var ranger = document.getElementById("ranger");
var sound = document.getElementById("sound");

setRanger();
createSelect();
setSound();

ranger.addEventListener("change", function() {
	changeRanger();
});
sound.addEventListener("change", function() {
	changeSound();
});

function changeRanger() {
	let x = document.getElementById("ranger").value;
	chrome.storage.local.set({'ranger': x});
	chrome.storage.local.get('ranger', function(items) {
		x = items.ranger;
		console.log(x);
	});
}
function setRanger() {
	let x;
	chrome.storage.local.get('ranger', function(items) {
		x = items.ranger;
		var select = document.getElementById('ranger');
		var option;
		for (var i=0;i<=5;i++) {
			option = select.options[i];
			if (option.value == x) {
				option.setAttribute('selected', true);
				return; 
			} 
		}
	});
}

function changeSound() {
	let x = document.getElementById("sound").value;
	chrome.storage.local.set({'sound': x});
	chrome.storage.local.get('sound', function(items) {
		x = items.sound;
		console.log(x);
	});
}
function setSound() {
	let x;
	chrome.storage.local.get('sound', function(items) {
		x = items.sound;
		var select = document.getElementById('sound');
		var option;
		for (var i=0;i<=5;i++) {
			option = select.options[i];
			if (option.value == x) {
				option.setAttribute('selected', true);
				return; 
			} 
		}
	});
}

function createSelect() {
	for (let i=0;i<4;i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.id = 's'+i;
		opt.innerHTML = i;
		sound.appendChild(opt);
	}
}