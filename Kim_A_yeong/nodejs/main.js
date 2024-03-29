var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var template = {
  HTML:function (title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>`;
  },
  list:function (filelist){
      var list = '<ul>';
      var i = 0;
      while(i<filelist.length){
        list=list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        i=i+1;
      }
      list=list+'</ul>';
      return list;
  }
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(pathname);

    if(pathname === '/'){
      if(queryData.id === undefined){
        var title = 'welcome';
        var description = 'hello node js';
        fs.readdir('./data', function(err, filelist){

          var list = template.list(filelist);
          var html = template.HTML(title, list, `<h2>${title}</h2>
          ${description}`, `<a href="/create">create</a>`);
          response.writeHead(200);
          response.end(html);
        });

      }else{
        fs.readdir('./data', function(err, filelist){
          var title = queryData.id;
          var list = template.list(filelist);
          fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
            var html = template.HTML(title, list, `<h2>${title}</h2>
            ${description}`, `<a href="/create"> create </a><a href="/update?id=${title}"> update </a><a href="/delete"> delete </a>`);
            response.writeHead(200);
            response.end(html);
          });
      });
    }
  }else if(pathname === '/create'){
    fs.readdir('./data', function(err, filelist){
      var list = template.list(filelist);
      var title = 'WEB - create';
      var html = template.HTML(title, list, `<form action = "http://localhost:3000/process_create" method="post">
            <p><input type="text" name = "title" placeholder = "title"></p>
            <p>
              <textarea name = "description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>`, '');
        response.writeHead(200);
        response.end(html);
      });
  }
  else if(pathname==='/process_create'){
    var body =''
    request.on('data', function(data){
      body=body+data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(){
        response.writeHead(302, {Location:`/?id=${title}`});  //리다이렉션
        response.end('');
      });
    });
  }
  else if (pathname === '/update'){
    fs.readdir('./data', function(err, filelist){
      var title = queryData.id;
      var list = template.list(filelist);
      fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
        var html = template.HTML(title, list,
          `<form action = "/process_update" method="post">
            <input type='hidden' name='id' value=${title}>
              <p><input type="text" name = "title" placeholder = "title" value=${title}></p>
              <p>
                <textarea name = "description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>`, `<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(html);
      });
    });
  }
  else if(pathname === '/process_update'){
    var body =''
    request.on('data', function(data){
      body=body+data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var id=post.id;
      var title = post.title;
      var description = post.description;
      fs.rename(`data/${id}`,`data/${title}`,function(error){
        fs.writeFile(`data/${title}`, description, 'utf8', function(){
          response.writeHead(302, {Location:`/?id=${title}`});  //리다이렉션
          response.end('');
        });
      });
    });
  }
  else{
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
