//FOR
var suma = 0;
suma += 1;
suma += 2;
suma += 3;
suma += 4;

console.log(suma);

for(let i = 0; i < 5; i++){
  suma = suma +1;
  console.log('Variable de iteración: ', i);
}

console.log('Variable suma: ',suma);

//WHILE
suma = 0;
while(suma < 3){
  suma += 1;
  console.log(suma);
}

// switch (expresión) {
//   case valor1:
//     //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
//     [break;]
//   case valor2:
//     //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
//     [break;]
//   ...
//   case valorN:
//     //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
//     [break;]
//   default:
//     //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//     [break;]
// }

