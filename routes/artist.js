var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Artist = db.Artist;

router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  console.log('333333333');
  Artist.findAll()
    .then(function(artists){
      console.log('4444444');
      return res.json(artists);
  });
});

router.post('/',function(req, res){
  Artist.create({
    title : req.body.title,
    RecordLabelId: req.body.RecordLabelId,
    PublisherId: req.body.PublisherId
  })
  .then(function(artist){
    return res.json(artist);
  });
});


module.exports = router;

