//seteando los paises
var chile = {flag:'<img src="image/flag-chile.png">',name:'Chile',carrier: '+569',max:'8'};
var peru = {flag:'<img src="image/flag-peru.png">',name:'Perú',carrier:'+51',max:'9'};
var mexico = {flag:'<img src="image/flag-mexico.png">',name:'México',carrier:'+521',max:'10'};
var usa = {flag:'<img src="image/flag-usa.png">',name:'Estados Unidos',carrier:'+1',max:'10'};

//$("#demo").intlTelInput();

function countrySelector(x){
//	document.getElementById('country-option').innerHTML =  x[0];
	// Store
	localStorage.setItem("flag", x[0]); //?????????
	// Retrieve
	document.getElementById('country-option').innerHTML = localStorage.getItem("flag");
}