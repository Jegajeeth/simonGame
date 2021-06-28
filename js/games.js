var colorSimion = ["red", "green", "blue", "yellow"];
var gameSequence = [];
var userClickedPattern = [];
var levelTrack=0;


$(document).keypress(function() {
  if(levelTrack===0){
  $("#level-title").text("level "+levelTrack);
  newSequence();
}
});



$(".btn").click(function(event) {
  userClickedPattern.push(event.target.id);
  playSound(event.target.id);
  perssedAnimation(event.target.id);
    checkAnwser(userClickedPattern.length-1);
});



function checkAnwser(currentIndex){
  if(userClickedPattern[currentIndex]===gameSequence[currentIndex]){
    console.log("success");
    if(currentIndex+1===gameSequence.length){
      setTimeout(newSequence,500);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    reset();
  }
}


function newSequence() {
    levelTrack=levelTrack+1;
    $("#level-title").text("level "+levelTrack);
  var randNumber = Math.floor(Math.random() * 4);
  gameSequence.push(colorSimion[randNumber]);
  $("#" + colorSimion[randNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(colorSimion[randNumber]);
  console.log(gameSequence);
  userClickedPattern=[];
}

function reset(){
  gameSequence=[];
  levelTrack=0;

}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function perssedAnimation(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function() {
    $("#" + name).removeClass("pressed");
  }, 100);
}
