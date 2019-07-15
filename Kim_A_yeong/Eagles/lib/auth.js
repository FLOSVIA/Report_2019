module.exports = {
  IsOwner: function(request, response){
    if(request.session.is_logined){
      return true;
    }else{
      return false;
    }
  },
  Stauts: function(request, response){
    var authStauts = `<div id= "loginbtn"><a href = "/auth/login">LOGIN</a></div>`;
    if(this.IsOwner(request, response)){
      authStauts = `<div id= "loginbtn"><a href = "/auth/logout">LOGOUT</a></div> | ${request.session.nickname}`
    }
    return authStauts;
  }


}
