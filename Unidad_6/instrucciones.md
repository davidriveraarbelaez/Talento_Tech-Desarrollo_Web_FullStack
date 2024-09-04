# Instrucciones Unidad 6

1. Crear un proyecto base
* Crea una carpeta principal para tu proyecto. Esta carpeta contendrá todas las dependencias y se utilizará como base para todos tus ejercicios.
``` bash
mkdir expressjs-exercises
cd expressjs-exercises
```

2. Inicializar un Proyecto con package.json
* Dentro de esta carpeta, inicializa un proyecto Node.js. Esto creará un archivo package.json donde se definirán las dependencias del proyecto.

``` bash
npm init -y
```

3. Instalar Dependencias

* Instala Express.js y cualquier otra dependencia que necesites para tus ejercicios.

``` bash
npm install express
```

4. Crear Carpetas para los Ejercicios

* Dentro de la carpeta principal (expressjs-exercises), crea subcarpetas para cada ejercicio. Cada subcarpeta contendrá el código específico de ese ejercicio.

``` bash
mkdir ejercicio1
mkdir ejercicio2
```

5. Reutilizar las Dependencias

* En lugar de instalar Express.js en cada ejercicio, puedes utilizar la instalación existente desde la carpeta principal.
* Crea los archivos index.js o el archivo de entrada que vayas a usar dentro de cada subcarpeta de ejercicio, por ejemplo:

```javascript

// ejercicio1/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde el ejercicio 1');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

```

6. Ejecutar los Ejercicios

* Para ejecutar un ejercicio, navega a la subcarpeta correspondiente y ejecuta el archivo usando Node.js.

```bash
node ejercicio1/index.js
```

* Como las dependencias ya están instaladas en la carpeta principal (**expressjs-exercises/node_modules**), no necesitarás instalarlas nuevamente para cada ejercicio.

7. Utilizar un archivo .gitignore

* Si estás versionando tu proyecto con Git, asegúrate de añadir **node_modules/** a tu archivo **.gitignore** para evitar que las dependencias se incluyan en tu repositorio.