//PUSH y UNSHIFT
var colores = ['amarallo', 'azul'];
colores.push('rojo');
colores.unshift('verde');
console.log(colores);

//POP y SHIFT
colores.pop();
colores.shift();
console.log(colores);

//INCLUDES
var pintores = ['Picasso', 'Velazquuez', 'Van Gogh', 'Dalí'];
var inlcuyeDali = pintores.includes('Dalí');
console.log(inlcuyeDali);

//EVERY
var numeros = [10, 6, 8, 9];
var cumplenCondicion = numeros.every((num) =>{
  return num > 5;
});
console.log(cumplenCondicion);

//SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

//JOIN
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//FOREACH
var numeros =[1, 2, 3, 4];
numeros.forEach((num) => console.log(num));
numeros.forEach( num => {
  if(num ===3){
    console.log(num)
  }
});

//MAP
var masUno = numeros.map((num) => {
  return num +1;
});
console.log(masUno);