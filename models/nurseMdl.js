const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/assignmentapp');

const nurseSchema = new Schema({
  'name':	String,
  'htmlLink':	String,
});


const nurse = mongoose.model('nurse', cnaSchema);

module.exports = nurse;
