const express = require('express');
const server = express();


server.get('/curso/:id', (req, res) =>{
  return res.send('oi');
})
server.listen(3000);