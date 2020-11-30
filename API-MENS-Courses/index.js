const express = require('express');
const api = express();
const port = 3000;
const cursos = ['Angular', 'Bootstrap', 'Ionic'];

api.use(express.json());

//Middleware global
api.use((req, res, next) => {
    console.log(`Requisição chamada: ${req.url}`);
    return next();
})

// Middleware 
function checkCurso(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'Nome do curso não informado' })
    }

    return next();
}

//Middleware index
function checkIndexCurso(req, res, next){
    const curso = cursos[req.params.id];
    if(!curso){
        return res.status(400).json({error: "Curso não encontrado"})
    }

    req.curso = curso;
    return next();
}

api.get('/cursos', (req, res) => {
    return res.json(cursos);
});

api.get('/cursos/:id', checkIndexCurso, (req, res) => {
    // const { id } = req.params;

    // return res.json(cursos[id]);
    return res.json(req.curso)
})

api.post('/cursos', checkCurso, (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
});

api.delete('/cursos/:id', checkIndexCurso, (req, res) => {
    const { id } = req.params;

    cursos.splice(id, 1);

    return res.send(cursos);
});

api.put('/cursos/:id', checkCurso, (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    cursos[id] = name;

    return res.json(cursos);
})

api.listen(port, () => {
    console.log('Servidor ouvindo na porta: ' + port);
})

