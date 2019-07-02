const express = require('express');//importando express

const server = express(); // instaciando 

server.use(express.json());

//query params = ?teste=1
//route params = /users/1
//request body = {"name": "leo", "email": "leo@mail"}
//query params - server.get('/teste', (req, res) => {
//const nome = req.query.nome;
const users = ['Leandro', 'Vidal', 'joão', 'zé'];

server.get('/users', (req, res) => {
  return res.json(users);
})

  server.get('/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json(users[index]);
})

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
})

server.put('/users/:index', (req, res) => {
  const {index} = req.params;
  const {name} = req.body;

  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index',(req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});


server.listen(3000);
