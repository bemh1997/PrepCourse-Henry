// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

//KEYS
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

//BUCLE FOR-IN
var mundo ={
  continentes: 7,
  paises: 195,
  ocenaos: 5
};

for(var prop in mundo){
  console.log('Esta es la propiedad '+prop);
  console.log('Esta es el valor: '+mundo[prop]);
}

//THIS
var mascota = {
  animal: 'Perro',
  raza: 'Pastor Alemán',
  amistoso: true,
  dueño: 'Humberto Bernal',
  info: function (){
    console.log('Mi perro es un '+ this.raza);
  }
};

mascota.info();