const express = require('express');
const mongoose = require('mongoose');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nurseCtrl = require('./controllers/nurseCtrl');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.delete('/nurse', nurseCtrl.remove);
app.get('/nurses', nurseCtrl.index);
app.post('/nurse', nurseCtrl.post);

mongoose.connect('mongodb://heroku_5m0z7q6h:v758g3gdmrbv8su95hvjlckiuk@ds019826.mlab.com:19826/heroku_5m0z7q6h', () => {
  console.log('connected to mLab mongoDB');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Express up and running');
});

module.exports = app;
