const express = require('express');
const app = express();
const port = 3001;
const List = require('./models/List');
const config = require('./config');
const db = require('./db/database');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const Users = require("./routes/user.router");
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/users', Users);

// app.use('/', (req, res, next) => {

//   let token = req.headers.token;

//   jwt.verify(token, config.secret, (err, data) => {
//     if (err) {
//       res.sendStatus(401);
//     } else {
//       req.user = data;
//       next();
//     }

//   });
// });

app.get('/', async (req, res) => {
  let data = await List.findAll();
  res.send(data);
});

app.post('/', async (req, res) => {

  let {name} = req.body;

  let data = await List.create({
    name,
    done: false,
  });

  res.send(data);
});

app.delete('/', async (req, res) => {
  let {id} = req.query;

  let data = await List.destroy({where: {id}});

  res.sendStatus(200);
});

app.put('/', async (req, res) => {

  console.log(req.body);
  let {id, done} = req.body;

  await List.update({done}, {where:{id}});
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});