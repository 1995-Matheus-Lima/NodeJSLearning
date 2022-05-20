const express = require('express');
const { json, status } = require('express/lib/response');
const server = express();

server.use(express.json());

let cursos = ['Algebra linear Computacional','PDS2', 'Matemática Discreta','Calculo 1']

server.get('/cursos', (req, res) =>{
  res.send(cursos);
});

server.get('/cursos/:id',(req,res) => {
  id = req.params.id;
  res.send(cursos[id]);
});

server.post('/cursos',(req,res)=>{
  nome = req.query.nome;
  res.status(201).send('curso foi criado com sucesso');
  cursos.push(nome);
  console.log(cursos);
});

server.delete('/cursos/:id', (req,res)=>{
  id = req.params.id;
  nameDeletede = cursos[id];
  cursos.splice(id,1);
  console.log(cursos);
  res.status(200).send(`Curso: ${nameDeletede} foi excuido com sucesso`)
})

server.put('/cursos',(req , res) =>{
  arq = req.body;
  newArraw = []
  for(i in arq){
    newArraw.push(arq[i]);
  }
  cursos = newArraw;
  res.send('tudo ok');
})
server.listen(3000);