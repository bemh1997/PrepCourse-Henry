// FOR
var arr = [1, 2, 3, 4, 5];
for(var i  = 0; i < arr.length; i++){
  console.log(arr[i]);
}

function encontrarLetrP(string){
  var letras = string.split('');
  //CÓDIGO EQUIVALENTE.
  // letras.forEach(element => {
  //   if(element ==='p'){
  //     console.log('Sí contiene la letra p.');
  //   }
  // });
  for(let i = 0;i <letras.length;i++){
    if(letras[i]==='p'){
      console.log('Sí contiene la letra p.');
    }
  }
}

encontrarLetrP('Javascript');
encontrarLetrP('Henry');

//WHILE
var arr = [];
while (arr.length < 5){
  arr.push('Humberto');
}

console.log(arr);
