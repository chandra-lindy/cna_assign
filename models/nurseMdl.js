const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nurseSchema = new Schema({
  'first': String,
  'last':	String,
});

const nurse = mongoose.model('nurse', nurseSchema);

module.exports = nurse;
