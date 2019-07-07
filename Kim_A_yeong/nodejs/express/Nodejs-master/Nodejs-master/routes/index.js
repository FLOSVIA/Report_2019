const express = require('express');
const router = express.Router();
const fs = require('fs');
const template = require('../lib/template.js');

router.get('/', function(request, response){
  fs.readdir('./data', function(error, filelist){
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var list = template.list(filelist);
            var html = template.HTML(title, list,
              `<h2>${title}</h2>${description}`,
              `<a href="/topic/create">create</a>`
            );
            response.send(html);
   });
});
module.exports = router;
