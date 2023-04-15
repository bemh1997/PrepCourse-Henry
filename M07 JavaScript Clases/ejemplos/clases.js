// //FUNCION CONSTRUCTORA
// function Auto(puertas, color, marca, año,ruedas) {
//   this.puertas = puertas;
//   this.color = color;
//   this.marca = marca;
//   this.año = año;
//   this.ruedas = ruedas;

//   this.informacion = function(){
//     console.log('Este es un '+this.marca+' de color '+this.color);
//   };
// }

// var miPrimerAuto = new Auto(2,'Negro', 'Lamborghini',2018,4);

// miPrimerAuto.informacion();
// console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);

//EXPRESION DE CLASE
class Auto{
  constructor(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
  }

  informacion(){
    console.log("Este es un "+this.marca+" de color "+this.color);
  }
}

let miSegundoAuto = new Auto(4,'Negro','Mclaren',2015,4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
miSegundoAuto.informacion();
