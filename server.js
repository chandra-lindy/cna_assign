const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const assignmentCtrl = require('./controllers/assignmentCtrl');
const nurseCtrl = require('./controllers/nurseCtrl');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/nurses', nurseCtrl.index);
app.post('/nurse', nurseCtrl.post);

app.post('/assign', (req, res) => {
  res.send('testing testing 123');
});





app.listen(3000, function () {
  console.log('Express listening on port 3000');
});

module.exports = app;

function l(...args) {
  console.log(...args);
}
