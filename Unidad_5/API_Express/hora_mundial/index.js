const express = require('express');
// Error: Cannot find module 'moment-timezone'
// Solución: npm install moment-timezone
const app = express();
const moment = require('moment-timezone');

app.get('/', (req, res) => {
    res.send('Hola mundo');
    }
);

app.get('/hora', (req, res) => {
    const ciudades = ['Asia/Tokyo', 'America/Argentina/Buenos_Aires', 'America/Santiago'];
    const hora = ciudades.map(ciudad => {
        return moment().tz(ciudad).format('HH:mm:ss');
    });
    res.send(hora);
}
);

app.get('/hora/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad;
    const hora = moment().tz(ciudad).format('HH:mm:ss');
    res.send(hora);
}
);

app.listen(9000, () => {
    console.log('Servidor corriendo en http://localhost:9000');
}
);