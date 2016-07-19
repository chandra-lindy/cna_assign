const Nurses = require('../models/nurseMdl');

function index(req, res) {
  Nurses.find({}, function(err,nurses){
    if (!nurses) res.sendStatus(404);
    else res.json(nurses);
  })
}

function show(req, res) {
  Nurses.findOne({name: req.body.name}, function(err, nurse){
    if(!nurse) res.sendStatus(404);
    else res.json(nurse);
  })
}

function post(req,res) {
  // console.log('name ', req.body.name, 'role', req.body.role, 'body object ', req.body);
  console.log(req.body);
  Nurses.create({name: req.body.name, role: req.body.role}, function(err, result){
    // console.log('event created', result);
    res.send('posted');
  })
}

module.exports = { index, show, post };
