var atuendos = {
  manos:['Guantes', 'Anillos '],
  pies: ['Zapatos', 'Tenis'],
};

//DOT-NOTACION
console.log(atuendos.manos);

//BRACKTE-NOTACION
atuendos['piernas'] = ['Bermudas','Pantalones'];
console.log(atuendos['piernas']);

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos){
  comidas[propUno] = ['Frutas', 'Vegetales']; 
  comidas[propDos] = ['Hamburguesa', 'Papas fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);