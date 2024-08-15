/*

Estos métodos son herramientas fundamentales para trabajar con arrays en JavaScript. Nos permiten
añadir o quitar elementos del final de un array de forma sencilla y eficiente.

push(): Este método se utiliza para agregar uno o más elementos al final de un array. Los elementos 
añadidos se convierten en los nuevos últimos elementos del array.

pop(): Este método se utiliza para eliminar el último elemento de un array y devolverlo. Si el array
está vacío, pop() devolverá undefined.

*/

let frutas = ["manzana", "banano"];
console.log(frutas); // ["manzana", "banano"]
// Agregar elementos al final del array (push())
Nuevasfrutas = frutas.push("Pera", "Uva"); // ["manzana", "banano", "Pera", "Uva"]
console.log(Nuevasfrutas); // ["manzana", "banano", "Pera", "Uva"]


let Frutas = ["manzana", "banano", "pera"];
let ultimaFruta = frutas.pop(); // ["manzana", "banano", "pera"] --> ["manzana", "banano"]
console.log(Frutas); // ["manzana", "banano"]
console.log(ultimaFruta); // "pera"

// Lista de tareas

let tareas = [];

// Agregar tareas
tareas.push('Realizar el taller del bootcamp');
tareas.push('Comprar un regalo para mi si lo entrego a tiempo');

// Mostrar la lista de tareas
lista_Tareas = tareas;
console.log("Lista de tareas: " + lista_Tareas); // Lista de tareas: [ 'Realizar el taller del bootcamp', 'Comprar un regalo para mi si lo entrego a tiempo' ]

// Completar un tarea
tareaCompletada = tareas.pop();
console.log("Tarea completada: " + tareaCompletada);

// Mostrar las tareas pendientes
console.log("Tareas pendientes: " + tareas);
