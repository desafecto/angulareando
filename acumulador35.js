angular
.module("miapp", [])
.controller('miAppCtrl', function(){
	scope = this;
	scope.titulo = "Sumador-restador gilipollesco II";
	scope.cantidad = null;
	scope.acumulado = 0;
	scope.valor = 0;
	scope.sumar = function(){
		scope.acumulado += parseInt(scope.cantidad);
		scope.cantidad = 0;
	};
	scope.restar = function(){
		scope.acumulado -= parseInt(scope.cantidad);
		scope.cantidad = 0;
	};

});