const $team1Score=document.getElementById("score-team1");
const $team1Wickets=document.getElementById("wickets-team1");
const $team2Score=document.getElementById("score-team2");
const $team2Wickets=document.getElementById("wickets-team2");
const strikeButton=document.getElementById("strike");
const resetButton=document.getElementById("reset");


var team1Score=0;
var team1Wickets=0;
var team2Score=0;
var team2Wickets=0;
var team1BallsFaced=0;
var team2BallsFaced=0;
var turn=1;

const possibleOutcomes=[0,1,2,3,4,6,"W"];
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");


function gameOver(){
  gameOverAudio.play();

  if(team1Score>team2Score) alert("India Wins");
  if(team2Score>team1Score) alert("Pak Wins");
  if(team1Score==team2Score) alert("Super over!");
}

function updateScore(){
  
  $team1Score.innerHTML=team1Score;
  $team1Wickets.innerHTML=team1Wickets;
  $team2Score.innerHTML=team2Score;
  $team2Wickets.innerHTML=team2Wickets;
}

resetButton.onclick=()=>{
  window.location.reload();
  console.log("reloaded");
};


strikeButton.onclick=()=>{
  strikeAudio.pause();
  strikeAudio.currentTime=0;
  strikeAudio.play();

  var randomElement=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];


  if(turn==2){
    team2BallsFaced++;
    document.querySelector(
      `#team2-superover div:nth-child(${team2BallsFaced})`
    ).textContent=randomElement;
    if(randomElement=="W"){
      team2Wickets++;
    }
    else{
      team2Score += randomElement;
    }
    if(team2Wickets==2 || team2BallsFaced==6 || team2Score>team1Score){
      turn=3;
      gameOver();
    }
  }


  if(turn==1){
    team1BallsFaced++;
    
    document.querySelector(
      `#team1-superover div:nth-child(${team1BallsFaced})`
    ).textContent=randomElement;
    if(randomElement=="W"){
      team1Wickets++;
    }
    else{
      team1Score+=randomElement;
    }
    if(team1BallsFaced==6||team1Wickets==2) {
      turn = 2;
    }
  }
  updateScore();
};








