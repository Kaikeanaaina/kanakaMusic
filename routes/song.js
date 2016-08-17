var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Song = db.Song;


router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Song.findAll({
    where: {
      visibility : true
    }
  })
  .then(function(songs){
    return res.json(songs);
  });
});

router.get('/ofArtist/:id', function(req, res) {
  Song.findAll({
    where: {
      ArtistId: encodeURI(req.params.id)
    }
  })
  .then(function(songs){
    return res.json(songs);
  });
});

router.get('/ofAlbum/:id', function(req, res) {
  Song.findAll({
    where: {
      AlbumId: encodeURI(req.params.id)
    }
  })
  .then(function(songs){
    return res.json(songs);
  });
});

router.get('/:id', function(req, res) {
  Song.findOne({
    where: {
      id: encodeURI(req.params.id)
    }
  })
  .then(function(song){
    return res.json(song);
  });
});

router.put('/:id', function(req,res){
  Song.update(
  {
     totalViews :  req.body.totalViews+=1,
     weeklyViews : req.body.weeklyViews+=1,
     monthlyViews : req.body.monthlyViews+=1,
  }, {
    where : {
      id : req.body.id
    }
  })
  .then(function(song){
    console.log(444444444, song);
    return res.json(song);
  });

});


module.exports = router;