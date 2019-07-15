module.exports = {
  HTML:function(body, authStauts){
    return `
    <!doctype html>
    <html>
    <head>
      <title>Eagles</title>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="/main.css">
    </head>
    <body>
      <div id= "loginbtn"><a href = "/auth/signup">SIGN UP</a></div>
      ${authStauts}
      <div id = "mainimg"><a href="/"><img src="suri.png" width="186" height="214"/></a></div>
      <nav id = "topMenu" >
                 <ul>
                         <li><a class="menuLink" href="/menu/Eagles">Eagles</a></li>
                         <li><a class="menuLink" href="/menu/Players">Players</a></li>
                         <li><a class="menuLink" href="/menu/Record">Record</a></li>
                         <li><a class="menuLink" href="/menu/FanPage">FanPage</a></li>
                         <li><a class="menuLink" href="/menu/Gallery">Gallery</a></li>
                 </ul>
         </nav>
         ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
