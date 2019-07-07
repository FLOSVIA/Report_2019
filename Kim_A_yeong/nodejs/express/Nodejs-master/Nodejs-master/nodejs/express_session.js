var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)

var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}))

app.get('/', function (req, res, next) {
  console.log(req.session);
  res.send('hello session');
})

app.listen(3000, function(){
  console.log('3000!');
})
