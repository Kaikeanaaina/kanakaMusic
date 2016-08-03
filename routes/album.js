var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Album = db.Album;

router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Album.findAll({
    where: {
      visibility : true
    }
  })
  .then(function(data){
    res.json(data);
  });
});

router.get('/ofArtist/:id', function(req, res) {
  Album.findAll({
    where: {
      ArtistId: encodeURI(req.params.id),
      visibility : true
    }
  })
  .then(function(albums){
    return res.json(albums);
  });
});


router.get('/:id', function(req, res) {
  Album.findOne({
    where: {
      id: encodeURI(req.params.id),
      visibility : true
    }
  })
  .then(function(album){
    return res.json(album);
  });
});



module.exports = router;

