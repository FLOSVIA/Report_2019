var express = require('express');
var app = express();
var template = require('./lib/template.js');
var menu = require('./routes/menu.js');
var auth = require('./routes/auth.js');
var session = require('express-session');
var FileStore = require('session-file-store')(session)
var authlib = require('./lib/auth.js');
var dbinfo = require('./lib/mysql.js');

app.use(session({
  secure:true,
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store : new FileStore()
}));

app.use(express.static('public'));
app.use('/menu', menu);
app.use('/auth', auth);

app.get('/', function (req, res) {
  var html = template.HTML(`<br/><div id="subimg"><img src = "1.jpg"/></div><br>
  <footer><small>Copyright &copy; 2019 ICE-BEAR</small> </footer>
`, authlib.Stauts(req, res));
  dbinfo.mysql(`SELECT * FROM users`);
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
