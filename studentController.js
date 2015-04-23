angular
	.module('miApp', [])
    .controller('studentCtrl', miControlador);

function miControlador() {
    var scope = this;	
    scope.alumnos = ['antonio', 'pedro', 'Lucas']
    scope.nada ='nadita';
     };