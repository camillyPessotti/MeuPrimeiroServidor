const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// const listaPessoas = [
//     { id: 1, nome: "Camilly", idade: 17 },
//     { id: 2, nome: "Bruna", idade: 17 },
//     { id: 3, nome: "João", idade: 17 }
// ];

// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });

// app.get('/api/pessoas', (req, res) => {
//     console.log(req);

//     res.send(listaPessoas);
// });

// app.post('/api/pessoas', (req, res) => {
//     const pessoa = req.body;
//     pessoa.id = listaPessoas.length + 1;
//     listaPessoas.push(pessoa);
//     res.json(pessoa);
// });

// app.put('/api/pessoas/:id', (req, res) => {
//     const id = req.params.id;
//     const pessoa = req.body;
//     const index = listaPessoas.findIndex(p => p.id == id);
//     pessoa.id = id;
//     listaPessoas[index] = pessoa;
//     res.json(pessoa);
// });

// app.get('/api/pessoas/:id', (req, res) => {
//     const id = req.params.id;
//     const pessoa = listaPessoas.find(p => p.id == id);
//     res.send(pessoa);
// });

// app.delete('/api/pessoas/:id', (req, res) => {
//     const id = req.params.id;
//     const index = listaPessoas.findIndex(p => p.id == id);
//     listaPessoas.splice(index, 1);
//     res.json(listaPessoas);
// });


const listaUsuarios = [
    { id: 1, nome: "Camiss", senha: "1" },
    { id: 2, nome: "Briuna", senha: "1" },
    { id: 3, nome: "Joaozadarada", senha: "1"}
];

app.get('/', (req, res) => {
    res.send('Servidor rodando')
})

app.get('/api/usuarios', (req, res) => {
    console.log(req);

    res.send(listaUsuarios);
});

app.post('/api/usuarios', (req, res) => {
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
    res.json(usuario);
});

app.put('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    const index = listaUsuarios.findIndex(u => u.id == id);
    usuario.id = id;
    listaUsuarios[index] = usuario;
    res.json(usuario);
});

app.get('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = listaUsuarios.find(u => u.id == id);
    res.send(usuario);
});

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(u => u.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios);
});


app.listen(port, () => {
    console.log(`Example, app listening at https://localhost:${port}`);
});