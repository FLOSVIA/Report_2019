module.exports = {
  HTML:function(){
    return `<!DOCTYPE html>
    <html>
    <head>
    <title>signup</title>
    <meta charset = "uft-8">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/signup.css">
    </head>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <body>
   <div class="container">
      <div class="col-md-6 mx-auto text-center">
         <div class="header-title">
            <h1 class="wv-heading--title">
               SIGN UP
            </h1>
         </div>
      </div>
      <div class="row">
         <div class="col-md-4 mx-auto">
            <div class="myform form ">
               <form action="/auth/signup_process" method="post" name="login">
                  <div class="form-group">
                     <input type="email" name="email"  class="form-control my-input" id="email" placeholder="email">
                  </div>
                  <div class="form-group">
                     <input type="text" name="password"  class="form-control my-input" id="password" placeholder="password">
                  </div>
                  <div class="form-group">
                     <input type="text" min="0" name="nickname" id="phone"  class="form-control my-input" placeholder="Phone">
                  </div>
                  <div class="text-center ">
                     <button type="submit" class=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                  </div>
                  <div class="col-md-12 ">
                     <div class="login-or">
                        <hr class="hr-or">
                        <span class="span-or">or</span>
                     </div>
                  </div>
                  <div class="form-group">
                     <a class="btn btn-block g-button" href="#">
                     <i class="fa fa-google"></i> Sign up with Google
                     </a>
                  </div>

               </form>
            </div>
         </div>
      </div>
   </div>
</body>
    </html>`;
  }
}
