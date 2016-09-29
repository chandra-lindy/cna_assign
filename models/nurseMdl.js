const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

const nurseSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  username: { type: String, require: true },
  password: { type: String, required: true },
});

nurseSchema.pre('save', function(next) {
  const nurse = this;
  if (!nurse.isModified('password')) return next();
  bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(nurse.password, salt, function(err, hash) {
      if (err) return next(err);
      nurse.password = hash;
      next();
    });
  });
});

nurseSchema.methods.checkPassword = function(providedPassword, cb) {
  bcrypt.compare(providedPassword, this.password, function(err, res) {
    if (err) cb(err, null);
    else cb(null, res);
  });
};

const nurse = mongoose.model('nurse', nurseSchema);

module.exports = nurse;
