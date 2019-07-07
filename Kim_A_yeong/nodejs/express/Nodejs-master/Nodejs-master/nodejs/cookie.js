var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
  response.writeHead(200, {
    'Set-Cookie':['yummy_cookie=orange',
    'tasty_cookie=strawberry',
    `Permanent=cookies; Max-Age=${60*60}`,
    'Secure=Securel Secure',
    'HttpOnly=HttpOnly; HttpOnly',
    'Domain=DOmain; Domain=dkdk.org'
  ]
  });
  var cookies = {};
  if(request.headers.cookie !== undefined){
    var cookies = cookie.parse(request.headers.cookie);
  }
  console.log(request.headers.cookie);
  console.log(cookies);
  response.end('cookie!');
}).listen(3000);
