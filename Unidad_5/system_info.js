/*
Recopilación de información del sistema
Desarrollar un script que recopile la siguiente información del sistema:
- Arquitecura del sistema
- Nombre del sistema operativo
- Modelo de la CPU
- Memoria libre del sistema
- Memoria total del sistema
- Directorio raíz
- Directorio de usario
- Nombre del host
- Obtener la versión de la plataforma del sistema
- Obtener la versión de Node.js
*/

// Importar el módulo os
const os = require('os');
// Importar el módulo Process
const process = require('process');

const systemInfo = {
    osType: os.type(),                // Obtiene el nombre del sistema operativo
    architecture: os.arch(),          // Obtiene la arquitectura del sistema
    cpu: os.cpus()[0].model,          // Modelo de la CPU
    freeMemory: os.freemem(),         // Memoria libre del sistema
    /////////
    totalMemory: os.totalmem(),       // Memoria total del sistema
    rootDir: os.homedir(),            // Directorio raíz
    userDir: os.userInfo().homedir,   // Directorio de usario
    hostName: os.hostname(),          // Nombre del host
    platform: os.platform(),          // Obtener la versión de la plataforma del sistema
    nodeVersion: process.version      // Obtener la versión de Node.js
};

console.log("Información del sistema operativo");
console.log(`Nombre del sistema operativo: ${systemInfo.osType}`);
console.log(`Arquitectura: ${systemInfo.architecture}`);
console.log(`CPU: ${systemInfo.cpu}`);
console.log(`Memoria Libre: ${systemInfo.freeMemory}`);
console.log(`Memoria Total: ${systemInfo.totalMemory}`);
console.log(`Directorio raíz: ${systemInfo.rootDir}`);
console.log(`Nombre del host: ${systemInfo.hostName}`);
console.log(`Plataforma del sistema: ${systemInfo.platform}`);
console.log(`Versión de Nodejs: ${systemInfo.nodeVersion}`);