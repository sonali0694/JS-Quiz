var question_counter=1;
var score=0;
var que_count=0;
var timeout = null;
$('.end1').hide();
$('.content1').hide();
$('.op-display1').hide();
$('.op1').hide();
$('.no-of-question1').show();
var no_of_question=document.getElementById('no_of_question1');
no_of_question.onkeyup = function (e) {
  clearTimeout(timeout);
timeout = setTimeout(function () {
     que_count=no_of_question1.value;

  },500);

    }
    if(que_count==0){
      que_count=20;
    }
function display1(){
$('#start1').hide();
$('.no-of-question1').hide();
$('.content1').show();
  var a=[];

  var num1=document.getElementById('num3');
  var num2=document.getElementById('num4');
  var rnum1 = Math.floor(Math.random()*10);
  var rnum2 = Math.floor(Math.random()*10);
  num1.innerHTML=rnum1;
  num2.innerHTML=rnum2 ;
  a=[];
  a=rnum1+','+rnum2;
  $('.op-display1').delay(1000).fadeIn();
  $('.op1').delay(1500).fadeIn();
  var reply_click=function(){

    var j=this.id;

    var ar=a.split(',');

    if(j=='SUBTRACTION1'){
          var result=Number(ar[0])-Number(ar[1]);
      }
    if(j=='ADD1'){

      var result=Number(ar[0])+Number(ar[1]);


  }
  if(j=='DIVISION1'){

        var result=(Number(ar[1])/Number(ar[0])).toFixed(2);
  }
  if(j=='MULTIPLICATION1'){

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

document.getElementById('ADD1').onclick = reply_click;
document.getElementById('SUBTRACTION1').onclick = reply_click;
document.getElementById('MULTIPLICATION1').onclick = reply_click;
document.getElementById('DIVISION1').onclick = reply_click;
var textInput = document.getElementById('output1');


// Listen for keystroke events

}

$('body').on('click', '.next1', function() {
  	$('.content1').hide();

      $('.op-display1').hide();
        $('.op1').hide();
        document.getElementById('output1').value="";
    display1();
    document.getElementById('score1').innerHTML="Your Current Score Is :- "+score;
    question_counter++;
    $('.end1').hide();
      if(question_counter>que_count){
      $('.content-holder1').hide();

$('.end1').show();
document.getElementById('try1').innerHTML="Your Final Score is  "+score+" !!!!!!!";

    }
  });
