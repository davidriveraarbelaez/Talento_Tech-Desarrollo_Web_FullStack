/*
Manejo de errores en JavaScript

Los errores en JavaScript pueden ser de dos tipos:
- Errores de sintaxis: Ocurren cuando el código no sigue las reglas de sintaxis del lenguaje.
- Errores de lógica: Ocurren cuando el código no funciona

Manejo de errores con try...catch
- try: Define un bloque de código que se va a probar en busca de errores.
- catch: Define un bloque de código que se ejecuta si se produce un error en el bloque try.

*/

fetch ('https://api.github.com/users/octocat')
    .then(response => {
        if (!response.ok){
            throw new Error('Error en la petición');
    }
    return response.json()
    })
    .then(data => {
        //
    })
    .catch(error => {
        console.log("Ha ocurrido un error: ",error);
    });    