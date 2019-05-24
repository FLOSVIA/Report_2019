
function EndToEnd(){
var test = document.getElementById('startbutton');
console.log(test.constructor.name);
test.remove();    

var 단어 = document.createElement('div');
단어.textContent='아이스베어';
document.body.appendChild(단어);
var 입력창 = document.createElement('input');
document.body.appendChild(입력창);
var 버튼 = document.createElement('button');
버튼.textContent='입력';
document.body.appendChild(버튼);
var 결과창 = document.createElement('div');
document.body.appendChild(결과창);
var 끝내기 = document.createElement('button');
끝내기.textContent="게임 끝내기";
document.body.appendChild(끝내기);

// if(confirm('하이루')){
//     alert('희희');
// }else{
//     alert('뿡뿡');
// }

버튼.addEventListener('click',function(){
    if(단어.textContent[단어.textContent.length-1] === 입력창.value[0]){
     단어.textContent=입력창.value;
     결과창.textContent='딩동댕';
     입력창.value='';   
     입력창.focus();
    }else{
        결과창.textContent='땡 틀렸습니다';
    }
});

끝내기.addEventListener('click',function(){
     window.close();
});

}
    // while(true){
    //     var newWord = prompt('단어 입력');
    //     alert(newWord);
    //     if(word[word.length-1]===newWord[0] && newWord.length>1){
    //         word=newWord;
    //         document.write(newWord);
    //         document.write("<br>");
    //     }else{
    //         alert('아쉽네요~~ 다음 기회에');
    //         break;
    //     }    
    // }

