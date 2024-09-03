const express = require('express');
const router = express.Router();
const Estudiante = require('../modelos/curso');
const curso = require('../modelos/curso');

router.get('/', async (req, res) =>{
    const estudiantes = await Estudiante.find();
    res.send(estudiantes);
})

router.get('/:id', async (req, res) =>{
    const estudiantes = await Estudiante.findById(req.params.id);
    res.send(estudiantes);
})

router.post('/', async (req,res) =>{
    const estudiantes = new Estudiante({
        Nombre: req.body.Nombre,
        Apellido : req.body.Apellido,
        CC: req.body.CC,
        Promedio: req.body.Promedio,
        Cursos: req.body.Cursos
    })

    await curso.save().catch((err) => {
        console.log(err);        
    });
    res.send(curso);
});

router.put('/', async (req,res) =>{
    const estudiantes = await Estudiante.findByIdAndUpdate(req.params.id,{
        Promedio: req.body.Promedio,
        Cursos: req.body.Cursos,
    }, { new: true});
    res.send(estudiantes);
});

router.delete('/', async (req,res) =>{
    await Estudiante.findByIdAndDelete(req.params.id);    
    res.send(estudiantes);
});

module.exports = router;