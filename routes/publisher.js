var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Publisher = db.Publisher;


router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Publisher.findAll()
  .then(function(publishers){
    return res.json(publishers);
  });
});

router.post('/',function(req, res){
  Publisher.create({
    name : req.body.name
  })
  .then(function(publisher){
    return res.json(publisher);
  });
});

module.exports = router;