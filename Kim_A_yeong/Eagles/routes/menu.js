var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var authlib = require('../lib/auth.js');
var eagles = require('../lib/eagles.js');

router.use(express.static('public'));

router.get('/Eagles', function (req, res) {
  var html = template.HTML(eagles.HTML(), authlib.Stauts(req, res));
  res.send(html);
});

router.get('/Players', function (req, res) {
  var html = template.HTML('<p class ="menu">Players</p>', authlib.Stauts(req, res));
  res.send(html);
});

router.get('/Record', function (req, res) {
  var html = template.HTML('<p class ="menu">Record</p>', authlib.Stauts(req, res));
  res.send(html);
});

router.get('/FanPage', function (req, res) {
  if(authlib.IsOwner(req, res)){
    var html = template.HTML('<p class ="menu">FanPage</p>', authlib.Stauts(req, res));
    res.send(html);
  }else{
    res.redirect('/');
  }
});

router.get('/Gallery', function (req, res) {
  var html = template.HTML('<p class ="menu">Gallery</p>', authlib.Stauts(req, res));
  res.send(html);
});

module.exports = router;
