# Pasos a seguir

## Instalación

1. Crear un nuevo proyecto
```bash
mkdir mi-api
cd mi-api
npm init -y
npm install express
```

2. Crear un archivo `index.js`
```javascript   
// prueba de funcionamiento inicial
console.log('Hola Mundo');
```

3. Ejecutar el archivo `index.js`
```bash
node index.js
```

4. Crear el servidor, en el archivo index.js
```javascript
const express = require('express'); // importar express
const app = express(); // crear una instancia de express
const PORT = 8000; // puerto en el que se ejecutará el servidor


```