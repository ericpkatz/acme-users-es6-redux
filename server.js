const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

let users = [
  { id: 1, name: 'Moe' },
  { id: 2, name: 'Larry' },
  { id: 3, name: 'Curly' }
];

app.get('/api/users', (req, res)=> res.send(users));
app.post('/api/users', (req, res)=> {
  let max = users.reduce( (max, user ) => {
    if(user.id > max){
      max = user.id;
    }
    return max
  }, 0);
  const user = req.body;
  user.id = ++max;
  users.push(user);
  res.send(user);
});
app.delete('/api/users/:id', ( req, res)=> {
  users = users.filter( user=> user.id != req.params.id );
  res.send({ id: req.params.id*1 });
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res)=> console.log(`listening on ${port}`));

