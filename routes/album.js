var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Album = db.Album;

router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Album.findAll()
    .then(function(data){
      res.json(data);
  });
});

router.post('/',function(req, res){
  Album.create({
    title : req.body.title
  })
  .then(function(album){
    return res.json(album);
  });
});



module.exports = router;

