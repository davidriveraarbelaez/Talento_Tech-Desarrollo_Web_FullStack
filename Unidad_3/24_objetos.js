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
persona.edad = "edad"; // Modificando una propiedad, cambiando la edad de la persona
persona.ciudad = "Madrid"; // Agregando una propiedad, agregando la ciudad de la persona


// Prototipos
/*
Es otro objeto que se utiliza como plantilla para crear otros objetos. Otro objeto que hereda propiedades
y métodos de otro objeto.

Esto permite la creación de prototipos para definir comportamientos comunes a varios objetos.

*/

// Creando un prototipo
function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function()
{
    console.log("Hace un sonido");
}

// Objeto basado en el prototipo
const perro = new Animal("Fido");
perro.hacerSonido(); // Imprime "Hace un sonido"

// ¿Por qué utilizar objetos?

/*
- Organización del código.
- Reutilización de código.
- Modelado del mundo real.

*/

/*
Conceptos clave adicionales
- this: Se refiere al objeto actual dentro de un método.
- Constructor: Una función especial para crear objetos.
- Prototipo: Un objeto del cual heredan otros objetos.
- Clases: Una sintaxis más moderna para definir objetos (Introducida en ES6).
*/

/*
Ejemplos prácticos
- Crear una tienda en línea.
- Desarrollar un juego.
- Crear una aplicación de gestión de tareas.
*/