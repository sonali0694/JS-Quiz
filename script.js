var question_counter=1;
var score=0;
var que_count=0;
var timeout = null;
$('.end').hide();
$('.content').hide();
$('.op-display').hide();
$('.op').hide();
$('.no-of-question').show();
var no_of_question=document.getElementById('no_of_question');
no_of_question.onkeyup = function (e) {
  clearTimeout(timeout);
timeout = setTimeout(function () {
     que_count=no_of_question.value;

  },500);

    }
    if(que_count==0){
      que_count=20;
    }
function display(){
$('.no-of-question').hide();
$('#start').hide();
//$('.no-of-question').show();

$('.content').show();
  var a=[];

  var num1=document.getElementById('num1');
  var num2=document.getElementById('num2');
  var rnum1 = Math.floor(Math.random()*10);
  var rnum2 = Math.floor(Math.random()*10);
  num1.innerHTML=rnum1;
  num2.innerHTML=rnum2 ;
  a=[];
  a=rnum1+','+rnum2;
$('.op-display').delay(1500).fadeIn();
$('.op').delay(2000).fadeIn();
  var reply_click=function(){

    var j=this.id;

    var ar=a.split(',');

    if(j=='SUBTRACTION'){

          var result=Number(ar[0])-Number(ar[1]);


    }
    if(j=='ADD'){

      var result=Number(ar[0])+Number(ar[1]);


  }
  if(j=='DIVISION'){
    alert("Output should be upto two decimal place!")
    var result=(Number(ar[0])/Number(ar[1])).toFixed(2);


  }
  if(j=='MULTIPLICATION'){

    var result=Number(ar[0])*Number(ar[1]);


}
  textInput.onkeyup = function (e) {
    clearTimeout(timeout);
timeout = setTimeout(function () {
      var i=textInput.value;
  if(i==result){
    score++;

  }

    },500);

  }


}
/*;*/
//alert(i);

document.getElementById('ADD').onclick = reply_click;
document.getElementById('SUBTRACTION').onclick = reply_click;
document.getElementById('MULTIPLICATION').onclick = reply_click;
document.getElementById('DIVISION').onclick = reply_click;
var textInput = document.getElementById('output');



// Listen for keystroke events

}

$('body').on('click', '.next', function() {
  	$('.content').hide();
    	$('.op-display').hide();
      	$('.op').hide();
        document.getElementById('output').value="";
    display();
      document.getElementById('score').innerHTML="Your Current Score Is :- "+score;
    //alert(score);
  question_counter++;
    $('.end').hide();
    if(question_counter>que_count){
      $('.content-holder').hide();

$('.end').show();
document.getElementById('try').innerHTML="Your Final Score is  "+score+" !!!!!!!";

    }
  });
