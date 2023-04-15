class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(){
    console.log('Hola mi nobmres es '+ this.nombre+ '. Tengo '+this.edad);
  }
}

class Programador extends Persona{
  constructor(nombre, edad, añosDeExperiencia){
    super(nombre, edad);
    this.añosDeExperiencia = añosDeExperiencia;
  }

  codear(){
    console.log('Soy '+this.nombre+'. Codeo desde hace '+this.añosDeExperiencia+' años.');
  }
}

var humberto = new Persona('Humberto', 25);
var programador = new Programador('Maria', 23, 4);
humberto.saludar();
programador.codear();

programador.saludar();

