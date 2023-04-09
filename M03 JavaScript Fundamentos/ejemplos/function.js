//Existen tres formas para declarar una función en JS.
//Primera forma.
function sumaTres(x){
  return x + 3;
}

//Segunda forma.
var sumaTres = function(x){
  return x + 3;
};

//Tercer forma.
var sumaTres = (x) =>{
  return x + 3;
};

//Función: cuidadoConElConsoleLog.
function cuidadoConElConsoleLog(nombre){
  console.log(nombre);
  return nombre;
}

//Función: otraFuncion.
function otraFuncion(nombre){
  return (
    "El nombre retornado  por la función 'CuidadoConElConsoleLog' es: "+
    cuidadoConElConsoleLog(nombre)
  );
}

//Función: cuidadoConElReturn.
function cuidadoConElReturn(nombre){
  return nombre;
  console.log(nombre);
}