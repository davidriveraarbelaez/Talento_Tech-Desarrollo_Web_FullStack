/*
Instrucciones: Instalar la libreria express-validator

npm install express-validator

*/

const express = require('express'); // Importa express
const { body, validationResult} = require('express-validator');
const app = express();
const port = 3000;          // Establece el puerto 3000

const validationUser = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe ser de mínimo 6 caracteres')

];

app.use(express.json())

app.post('/users', validationUser, (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const user = req.body;
    console.log(user);
    res.json({message: "Usuario creado exitosamente!"})
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});