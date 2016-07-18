const Nurse = require('../models/nurseMdl');

function index(req, res) {
  Event.find({summary: "Lunch"},function(err,events){
    res.json(events);
  })
}

function show(req, res) {
  Event.findOne({id: req.params.id},function(err,event){
    if(!event) res.sendStatus(404);
    else res.json(event);
  })
}

function post(req,res) {
  Event.create({id:req.body.id,summary: req.body.summary}, function(err, result){
    console.log('event created', result);
    res.sendStatus(200);
  })
}

module.exports = { index, show, post };
