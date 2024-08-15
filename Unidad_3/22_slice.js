/*
slice --> Recortar arrays

El método slice es una herramienta útil para extraer una porción de un array y
crear un nuevo array con los elementos seleccionados. Es decir, nos permite 
"cortar" un pedazo de un array original sin modificarlo.

nuevoArray = arrayOriginal.slice(inicio, fin);

arrayOriginal: El array del cual queremos extraer una porción.
inicio: El índice desde el cual queremos comenzar a extraer los elementos.
fin: El índice hasta el cual queremos extraer los elementos.

¿Cómo funciona?

- Crear un nuevo array: slice() siempre devuelve un nuevo array, nunca 
modifica el array original.
- Índices: Funcionan de manera similar a como lo hacen en otros lenguajes: 
El primer elemento tiene índice 0.
- Índices negativos: Podemos usar índices negativos para contar desde el final 
del array. Por ejemplo, -1 sería el último elemento, -2 el penúltimo, y así 
sucesivamente.

*/

const frutas = ['manzana', 'pera', 'naranja', 'guayaba', 'uva', 'limon', 'papaya'];
// Extraer desde el indice 1 hasta el 3 (sin incluir el 3)
const algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // 'pera' 'naranja'

// Mostrar las dos ultimas frutas
const UltimasFrutas = frutas.slice(-2);
console.log(UltimasFrutas); // 'limon' 'papaya'

/*
¿Cuándo utilizar slice()?
- Copiar una parte de un array.
- Crear subarrays.
- Evitar mutaciones accidentales.

NO CONFUNDIR CON SPLICE!!!! 
slice crea un nuevo array sin modificar el original.
splice modifica el array original eliminando o reemplazando elementos


*/