var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var RecordLabel = db.RecordLabel;


router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  RecordLabel.findAll()
  .then(function(recordLabels){
    return res.json(recordLabels);
  });
});

router.get('/:id', function(req, res) {
  RecordLabel.findOne({
    where: {
      id: encodeURI(req.params.id)
    }
  })
  .then(function(recordLabel){
    return res.json(recordLabel);
  });
});



module.exports = router;