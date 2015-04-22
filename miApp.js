angular
.module("miApp",[])
.controller("acumuladorCtrl", elConstructor);

function elConstructor(){
	var mivar = this;
 mivar.cantidad=0;
 mivar.acumulado=0;
 mivar.sumar = function () {
	 mivar.acumulado += parseInt mivar.cantidad);
	}
 mivar.restar = function(){
	 mivar.acumulado -= parseInt mivar.cantidad);
	}
};