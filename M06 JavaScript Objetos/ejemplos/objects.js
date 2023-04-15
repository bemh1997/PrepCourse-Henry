var deportes = {
  conBalon:["Football",'Basketball','Rugby'],
  sinBalon:['Boxeo','Surf','Trekking'],
};

var persona = {
  nombre: 'Lucas',
  edad: 26,
  estudios: {esProgramador: true}
};  

//ACCEDER
console.log(persona.edad);

//ASIGNAR
persona.nombre = 'Martín';
persona.edad = 32;
console.log(persona);

//CREAR
var autos={};
autos.marcas = ['Ford','Audi','Lamborghini'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

//PECULIARIDAD: FUNCIONES DENTRO DE OBJETOS.
var misFunciones = {
  saludar: function(){
    console.log('Hola');
  },
};

misFunciones.saludar();