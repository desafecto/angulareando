function Agenda (titulo, inc) {
  this.titulo = titulo;
  this.contenido = contenido;
};

Agenda.prototype = {
	titulo: function(){ return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre){ return _contenido[nombre];  },
    borrar: function(nombre){ delete _contenido[nombre];  },
    toJSON: function(){ return JSON.stringify(_contenido);}	
}

var amigos = new Agenda("Amigos", 
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
			 });