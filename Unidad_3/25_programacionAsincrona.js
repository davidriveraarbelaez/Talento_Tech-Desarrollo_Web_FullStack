/*
Programación asíncrona en JavaScript: Callbacks y promesas

¿Por qué la programación asíncrona?

En JavaScript, muchas operaciones como peticiones a servidores, operaciones de entrada/salida o animaciones
pueden llevar tiempo. Si el código se ejecuta de forma sincrónica, la ejecución se bloquearía hasta que estas
operaciones terminen, haciendo que la interfaz de usuario se vuelva lenta e incluso se congele.

La programación asíncrona permite que el código continúe ejecutándose mientras se espera que una operación
asíncrona se complete. Esto hace que las aplicaciones sean más responsivas y eficientes.


*/

/*
Callbacks: Funciones que se pasan como argumento a otra función y se ejecuta cuando una tarea asíncrona ha
terminado.
*/

function obtenerDatos(callback){
    // Simular una operacion asincrona, por ejemplo, una peticion a un servidor
    setTimeout(() => {
        const datos = {
            nombre: 'Juan',
            edad: 30
        };
        callback(datos);
    }, 2000);
}

obtenerDatos((datos)=>{
    console.log(datos);
});

// callback hell

/*
Promesa: Es un objeto que representa el eventual cumplimiento (o rechazo) de una operacion asincrona y su
valor resultante. Tiene los siguientes estados:

- Pending: La operacion no se ha completado todavia.
- Fulfilled: La operacion se completo con exito.
- Rejected: La operacion fallo.
*/

function ObtenerDatos(){
    return new Promise((resolver, reject) =>{
        // Simula una operacion asincrona
        setTimeout(()=>{
            const datos ={
                nombre: 'Ana', edad: 25
            };
            resolver(datos);
            },2000);
        });
}

ObtenerDatos()
    .then(datos => {
        console.log(datos);
    })
    .catch(error =>{
        console.error(error);
    });

/*
Ventajas de las promesas:
- Encadenamiento.
- Manejo de errores.
- Legibilidad.
*/

/*
Async/Await

Es una sintaxis que hace que las promesas se vean mas como codigo sincrono, mejorando la legibilidad.
*/

async function obtenerDatosAsync() {
    try{
        const datos = await obtenerDatos();
        console.log(datos);
    }catch(error){
        console.error(error);
    }    
}
obtenerDatosAsync();


/* 
Casos de uso.

Callbacks: Operaciones simples y cuando no se necesita un manejo de errores muy sofisticado.
Promesas: Son ideales para manejar multiples operaciones asincronas de forma secuencial o en paralelo.
Async/Await: Hace que el codigo con promesas sea mas legible y similar al codigo sincrono.

*/