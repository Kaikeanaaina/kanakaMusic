var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var RecordLabel = db.RecordLabel;


router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  RecordLabel.findAll()
  .then(function(recordlabels){
    return res.json(recordlabels);
  });
});

router.post('/',function(req, res){
  RecordLabel.create({
    name : req.body.name
  })
  .then(function(recordlabel){
    return res.json(recordlabel);
  });
});

module.exports = router;