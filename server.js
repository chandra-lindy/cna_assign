const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nurseCtrl = require('./controllers/nurseCtrl');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.delete('/nurse', nurseCtrl.remove);
app.get('/nurses', nurseCtrl.index);
app.post('/nurse', nurseCtrl.post);

mongoose.connect('mongodb://localhost/db', () => {
  console.log('connected to local mongoDB');
});

app.listen(3000, function () {
  console.log('Express listening on port 3000');
});

module.exports = app;

