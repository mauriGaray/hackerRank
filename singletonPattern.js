class Persona {
  constructor(nombre, apellido, edad) {
    if (Persona.intancia) {
      console.log(Persona.obj);
      return Persona.obj;
    }

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    Persona.obj = this;
    Persona.intancia = true;
  }
}

const lucas = new Persona("lucas", "gomez", 25);
let maria = new Persona("maria", "rey", 56);
const paulo = new Persona();

console.log(lucas);
console.log(maria);
console.log(paulo);
