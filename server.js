const express = require('express');
const path = require('path');

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const users = [
  { id: 1, name: 'Moe' },
  { id: 2, name: 'Larry' },
  { id: 3, name: 'Curly' }
];

app.get('/api/users', (req, res)=> res.send(users));

const port = process.env.PORT || 3000;

app.listen(port, (req, res)=> console.log(`listening on ${port}`));

