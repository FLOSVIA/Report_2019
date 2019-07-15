var express = require('express');
var router = express.Router();
var templogin = require('../lib/templogin.js');
var bootslogin = require('../lib/login_boots.js')
var bodyParser = require('body-parser');
var signup = require('../lib/signup.js')

router.use(express.static('public'));
router.use(bodyParser.urlencoded({extended:false}));

router.get('/login', function (req, res) {
  //res.send(templogin.HTML());
  res.send(bootslogin.boots());
});

router.post('/login_process', function(req, res){
  var post = req.body;
  var email= post.email;
  var password = post.password;
  console.log(post);
  if(email === 'abc@gmail.com' && password === '1234'){
    console.log(req.session);
    req.session.is_logined = true;
    req.session.nickname = 'ice-bear';
    req.session.save(function(){
      res.redirect('/');
    });
  }
  else{
    res.redirect('/auth/login');
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy(function(err){
      res.redirect('/');
  });
});

router.get('/signup', function (req, res) {
  res.send(signup.HTML());
});

router.post('/signup_process', function (req, res) {
  var post = req.body;
  var email= post.email;
  var password = post.password;
  console.log(post);
  res.send('dd');
});

module.exports = router;
