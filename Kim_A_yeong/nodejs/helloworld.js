console.log(1+1);

function a(){
  console.log('hello');
}

function abc(callback){
  callback();
  console.log('a');
  console.log('b');
}
abc(a);
