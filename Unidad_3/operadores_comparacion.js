/*
Operadores de comparación: Son los que se utilizan para comparar
dos valores.
    ==, ===, !=, !==, >, <, >=, <=.

    == : Permite comparar dos valores sin importar el tipo de dato.
    === : Permite comparar dos valores teniendo en cuenta el tipo de dato.
    != : Permite verificar si dos valores son diferentes sin importar el tipo de dato.
    !== : Permite verificar si dos valores son diferentes teniendo en cuenta el tipo de dato.
    > : Permite verificar si un valor es mayor que otro.
    < : Permite verificar si un valor es menor que otro.
    >= : Permite verificar si un valor es mayor o igual que otro.
    <= : Permite verificar si un valor es menor o igual que otro.
*/

// 1. Igualdad (==)

console.log(5 == 5); // true   
console.log(5 == "5"); // true
let nombre1= "David";
let nombre2 = "David";
console.log(nombre1 == nombre2); // true


// 2. Igualdad estricta (===)
console.log(5 === "5"); // False porque los valores son iguales en valor pero no en tipo de dato (número vs cadena)
let nombre3= "David";
let nombre4 = new String("David");
console.log(nombre3 === nombre4); // False porque los valores son iguales en valor pero no en tipo de dato
