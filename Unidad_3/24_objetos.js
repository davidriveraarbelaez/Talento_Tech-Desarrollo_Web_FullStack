/*

Un objeto en JavaScript es una colección de propiedades (que puedesn ser variables)
y métodos (que son funciones) agrupados bajo un mismo nombre.
*/

const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

persona.saludar()

// Creando objetos

// 1. Notacion literal
const carro = {
    marca: "Toyota"
    modelo: "Corolla"
    año: 2024
}

// 2. Constructor

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Maria", 25);

console.log(persona1.nombre);
console.log(persona2.edad);

// Accediendo a propiedades y métodos

const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
 // Accediendo a propiedades y métodos

 // 1. Notación de punto
console.log(persona.nombre);
persona.saludar();

 // 2. Notación de corchetes
const propiedad = "edad";
console.log(persona["nombre"]);
console.log(persona[propiedad]);

// Modificando objetos


// Prototipos


// Por que utilizar objetos
