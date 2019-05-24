var body={
    setbackground:function (color){
        $('body').css('background-color',color);
      //document.querySelector('body').style.backgroundColor=color;
    },
    setColor: function (color){
        $('body').css('color',color);
      //document.querySelector('body').style.color=color;
    },
    LinksSetColor: function (color){
    //   var alist=document.querySelectorAll('a');
    //   var i=0;
    //   while(i<alist.length){
    //     alist[i].style.color=color;
    //     i=i+1;
    //     }
        $('a').css('color',color);
    },
    Mtitle: function (color){
        $('#maintitle').css('color',color);
    } 
};

function Nightday(self){
  if(self.value === 'night'){
      body.setbackground('black');
      body.setColor('white');
      self.value='day';
      
      body.Mtitle('white');
      body.LinksSetColor('powderblue');
  }else{
      body.setbackground('white');
      body.setColor('black');
      self.value='night';

      body.Mtitle('blueviolet');
      body.LinksSetColor('blueviolet');
   }
}