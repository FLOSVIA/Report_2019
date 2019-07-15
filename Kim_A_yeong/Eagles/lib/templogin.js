module.exports = {
  HTML:function(){
    return `<!DOCTYPE html>
    <html>
    <head>
    <title>LOGIN</title>
    <meta charset = "uft-8">
    <link rel="stylesheet" type="text/css" href="/login.css">
    </head>
    <body>
      <form id="login-form" action = "/auth/login_process" method="post">
        <label>ID</label>
        <p><input type="text" name="email" placeholder="id"></p>
        <label>PASSWD</label>
        <p><input type="text" name="password" placeholder="password"</p>
        <p><input type="submit" value="login"></p>
        </form>
    </body>
    </html>`;
  }
}
