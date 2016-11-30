/* Funcionalidad que permite el select de paises, con banderas y prefijos
	Parte del repaso del 23 de noviembre de 2016 */
var paises = [
	{
		nombre: "chile",
		prefijo: "+569",
		bandera: "image/flag-chile.png",
		maximo: "8"	
	},
	{
		nombre: "peru",
		prefijo: "+519",
		bandera: "image/flag-peru.png",
		maximo: "9"
	},
	{
		nombre: "mexico",
		prefijo: "+529",
		bandera: "image/flag-mexico.png",
		maximo: "10"
	},
	{
		nombre: "usa",
		prefijo: "+1",
		bandera: "image/flag-usa.png",
		maximo: "10"
	}
];

// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// solo queda modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);
//para setear el maximo de numeros en el input
$('#input-num').attr('maxlength', pais.maximo);


//////

$('#countries a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_pulsado = $(this).find('span').html();

	// lo guardo en localStorage
	window.localStorage.setItem('nombre_pais', pais_pulsado);
});





//al clickear NEXT

$('#next').on('click', function(n){
	//revisar primero si puso el numero completo
	var telefono = $('#input-num').val();
	if ( telefono.length == pais.maximo){
	var code = "LAB-";
    var s= '';
    var randomchar=function(){
        var n= Math.floor(Math.random()*62);
        if(n<10) return n; //1-10
        if(n<36) return String.fromCharCode(n+55); //A-Z
        return String.fromCharCode(n+61); //a-z
    }
    while(s.length< 3) s+= randomchar();
    code += s;

	
	//lo guardo en localStorage
	window.localStorage.setItem('codigo',code);

	//mandando la alerta con el code
	//alert('your validation code is: ' + code + '. Remember it.');
	console.log('holi');
} else {
	alert('Please, write your phone number.');
	console.log('holo :c');
	return;
};
});

 