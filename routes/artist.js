var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Artist = db.Artist;

router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Artist.findAll({
    where: {
      visibility : true
    }
  })
  .then(function(artists){
    return res.json(artists);
  });
});

router.get('/:id', function(req, res) {
  Artist.findOne({
    where: {
      id: encodeURI(req.params.id)
    }
  })
  .then(function(artist){
    return res.json(artist);
  });
});



module.exports = router;

