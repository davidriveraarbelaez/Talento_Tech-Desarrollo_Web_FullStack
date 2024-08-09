/*
Función: Un bloque de código reutilizable que realiza una tarea específica.
Se define con la palabra clave function seguida del nombre de la función y paréntesis que pueden contener argumentos.
Puede ser llamada desde cualquier parte del código
*/

function saludar(nombre) {
    console.log("Hola, " + nombre);
}

saludar("Juan")

/*
Método: Una función que pertenece a un objeto. Se accede a través de la notación de punto después del nombre del objeto
*/

const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

persona.saludar();

/* Diferencias clave:

Característica |      Función      |  Método 
Pertenencia    | Independiente     | Pertenece a un objeto
Acceso         | Llamada directo   | A través de un objeto
this           | No tiene contexto | Se refiere al objeto actual
*/

/*
¿Cuándo utilizar cada uno?
* Funciones:
    - Tareas generales que no están ligadas a un objeto en particular.
    - Código reutilizables en diferentes partes del programa.

* Métodos:
    - Acciones específicas de un objeto.
    - Manipulación de propiedades del objeto.
*/

// Función para sumar dos números

function sumar(a, b) {
    return a + b;
}


// Objeto carro con un método para acelerar

const carro = {
    velocidad: 0,
    acelerar: function(cantidad) {
        this.velocidad += cantidad;
        console.log("Velocidad actual: " + this.velocidad + " km/h")
    }
};

carro.acelerar();
console.log(carro.velocidad)

// usamos la función
const resultado = sumar(5, 3);
console.log(resultado)

// usamos el método
carro.acelerar(20);
console.log(carro.velocidad)
