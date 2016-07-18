const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const assignmentCtrl = require('./controllers/assignmentCtrl');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.post('/assign', assignmentCtrl.assign);

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});


app.listen(3000, function () {
  console.log('Express listening on port 3000');
});

module.exports = app;

function l(...args) {
  console.log(...args);
}
