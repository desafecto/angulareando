angular
.module("miApp",[])
.controller("acumuladorCtrl", elConstructor);

function elConstructor(){
	var scope = this;
	scope.cantidad=0;
	scope.acumulado=0;
	scope.sumar = function () {
		scope.acumulado += parseInt(scope.cantidad);
	}
	scope.restar = function(){
		scope.acumulado -= parseInt(scope.cantidad);
	}
};