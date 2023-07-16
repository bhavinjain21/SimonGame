var colors = ["red","blue","green","yellow"];
var gp = [];
var ucp = [];
var score = 0;
var started = false;
$(".restart").click(function() {
  if (!started) {
    $("h1").text("...");
    $("h2").text("Score - 0");
    nextSeq();
    started = true;
$(".restart").animate({opacity:0});
  }
});
$(".btn").click(function(){
  var c = $(this).attr("id");
  ucp.push(c);
  ps(c);
  animatePress(c);
  
  check(ucp.length-1);
});
function check(level){
  if(gp[level]===ucp[level]){
    
    if(ucp.length===gp.length){
      $("h2").text("Score - "+score);
    setTimeout(function(){
      nextSeq();
    },1000);
    }
  }else{
    ps("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over😖😖 Click to restart");
    setTimeout(function () {
        $("body").removeClass("game-over");
      
      }, 200);
setTimeout(function () {
        $("h1").text("Play Again Click Restart");
      }, 1000);
$(".restart").text("Restart");
      $(".restart").animate({opacity:1});
      $(".restart").click(function(){
        location.reload();
      });
      
  }  
}
function levelUp(){
    $("body").addClass("s5");
    var audio = new Audio("s5.mp3");
    audio.play();
  }
  function levelUp1(){
    $("body").addClass("sten");
    var audio = new Audio("sten.mp3");
    audio.play();
  }
 function levelUp2(){
    $("body"). addClass("s15");
    var audio = new Audio("s15.mp3");
    audio.play();
  }
function nextSeq(){
  ucp=[];
  score++;
  if(score===6)levelUp();
  if(score===11)levelUp1();
  if(score===16)levelUp2();
  var a = Math.floor(Math.random()*4);
  var ranCol = colors[a];
  gp.push(ranCol);
  $("#"+ranCol).fadeIn(100).fadeOut(100).fadeIn(100);
   ps(ranCol);
   }
function ps(name){
  var audio = new Audio(name+".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
