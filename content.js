var d = document.getElementById("show_notification_cadre_count");
d.style.fontSize = "10em";

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("cadre_support").click();
document.getElementById("cadre_support").click();

var button = document.createElement("input");
button.className = 'btn btn-danger btn-lg';
button.setAttribute("type", "button");
button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#myModal");              
button.setAttribute("value", "Masz zgłoszenia, które musisz ocenić...");


sleep(2000).then(() => {
	var list = document.querySelector("#cadre_notifications > li:first-child > a > span");
	//console.log(list);
	if(list == null) {
		console.log("null");
	} else {
		document.getElementsByClassName('navbar')[0].appendChild(button); 
		console.log("zgłoszenia");
	}
});

/*var test = document.getElementById("cadre_notifications");

var div1 = document.createElement('div');
div1.id = 'myModal';
div1.className = 'modal fade';
div1.setAttribute("role", "dialog");     

var innerDiv1m = document.createElement('div');
innerDiv1m.className = 'modal-dialog modal-sm';
div1.appendChild(innerDiv1m);              

var innerDiv2m = document.createElement('div');
innerDiv2m.className = 'modal-content';
innerDiv1m.appendChild(innerDiv2m);

var innerDiv3 = document.createElement('div');
innerDiv3.className = 'modal-header';
innerDiv2m.appendChild(innerDiv3);

var buttonM = document.createElement("button");
buttonM.className = 'close';
buttonM.setAttribute("data-dismiss", "modal");
buttonM.setAttribute("aria-hidden", "true");
buttonM.setAttribute("value", "Close");
innerDiv3.appendChild(buttonM); 

var headerM = document.createElement("H4");
headerM.className = 'modal-title';
innerDiv3.appendChild(headerM);

var innerDiv31 =  document.createElement('div');
innerDiv31.className = 'modal-body';
innerDiv2m.appendChild(innerDiv31);

var para =  document.createElement('p'); 
innerDiv31.appendChild(para);
para.innerHTML = test;



var innerDiv32 =  document.createElement('div');
innerDiv32.className = 'modal-footer';
innerDiv2m.appendChild(innerDiv32);

var closeButton = document.createElement("input");
closeButton.className = 'btn btn-default';
closeButton.setAttribute("data-dismiss", "modal");
closeButton.setAttribute("type", "button");
closeButton.setAttribute("value", "Close");
innerDiv32.appendChild(closeButton);

document.getElementsByTagName('body')[0].appendChild(div1); */