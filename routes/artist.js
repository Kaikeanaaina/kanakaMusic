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
    name : req.body.name,
    description : req.body.description,
    RecordLabelId: req.body.RecordLabelId,
    PublisherId: req.body.PublisherId
  })
  .then(function(artist){
    return res.json(artist);
  });
});

router.get('/:id', function(req, res) {
  console.log('get 33333333333');
  Artist.findOne({
    where: {
      id: encodeURI(req.params.id)
    }
  })
  .then(function(artist){
    console.log('get 4444444', artist);
    return res.json(artist);
  });
});

router.put('/:id', function(req, res){
  console.log('333333', req.body);
  Artist.update(
  {
    updatedAt : 'now()',
    name : req.body.name,
    RecordLabelId : req.body.RecordLabelId,
    PublisherId : req.body.PublisherId,
    description : req.body.description
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function(artist){
    return res.json(artist);
  });
});

router.delete('/:id', function(req, res){
  Artist.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data){
    return res.json(data);
  });
});

module.exports = router;

