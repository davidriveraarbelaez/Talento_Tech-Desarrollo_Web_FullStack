/*
Filter y reduce son herramientas para manipular arrays, son métodos.

filter(): Crea un nuevo array con los elementos que cumplen una condición dada.
reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.

nuevoArray = arrayOriginal.filter(function(elemento)){
    // Retorna true si el elemento cumple la condición, false si no
});
*/

// filter()
const numeros = [1, 2, 3, 4, 5]; // Array de números
const numerosPares = numeros.filter(numero => numero % 2 === 0); // Filtra los números pares
console.log(numerosPares); // [2, 4]

// reduce()
const Numeros = [1, 2, 3, 4, 5]; // Array de números
const suma = Numeros.reduce((acumulador, numero) => acumulador + numero, 0); // Suma todos los números
console.log(suma); // 15

valorAcumulado = array.reduce(function(acumulador, elemento){
    // Cuerpo de la función,  realizamos cálculos con el acumulador y el elemento actual
}, valorInicial)); // Valor inicial del acumulador

/* Casos de uso comunes

filter():
- Obtener elementos que cumplan una cierta condición.
- Filtrar elementos duplicados.
- Crear subconjuntos de datos.

reduce():
- Calcular sumas, promedios, máximos, mínimos.
- Contar elementos.
- Crear objetos a partir de arrays
*/

// Ejemplo:  Análisis de datos de usuarios

const usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 22 },
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Laura", edad: 27},
    { nombre: "Carlos", edad: 32},
    { nombre: "Sofía", edad: 29},
    { nombre: "Diego", edad: 31},
    { nombre: "Valentina", edad: 26},
    { nombre: "Andrés", edad: 33},
    { nombre: "Camila", edad: 24}
    ];
  
// Obtener usuarios mayores de 30 años filter()
const usuariosMayores = usuarios.filter(usuario => usuario.edad > 30);
console.log("Usuarios mayores de 30 años" + usuariosMayores);

// Obtener la edad promedio de los usuarios reduce()
const edadPromedio = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0) / usuarios.length;
console.log("Edad promedio de los usuarios: " + edadPromedio);

/* Ventajas de utilizar filter y reduce
- Código más conciso y legible.
- Funcional.
- Eficiencia

*/