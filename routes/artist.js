var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Artist = db.Artist;

router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Artist.findAll()
    .then(function(artists){
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

