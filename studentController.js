angular
.module('miApp', [])
.controller('studentCtrl', miControlador);

function miControlador() {
    var mivar = this;                       	
    mivar.alumnos = [
	    {nombre:'antonio', curso: '3ºBUP', telefono: '912345678'},
	    {nombre:'luis', curso: '5º', telefono: '91234567'},
	    {nombre:'pedro', curso: '2ºBUP', telefono: '606789012'}
	    ];
};