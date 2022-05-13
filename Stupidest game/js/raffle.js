let con,oh;
let toggle = document.querySelector(".toggle");
let prize = document.querySelector(".prize");
toggle.onclick = function(){
prize.classList.toggle('active');
toggle.style.visibility="hidden";
}
function preload(){
  oh=loadSound("audio/oh.mp3");
  con=loadSound("audio/raffle.mp3");
}
function setup() {
  let cc = createCanvas(400, 400);
  cc.mousePressed(userStartAudio);
  cc.parent("container");
  oh = document.getElementById("oh");
  con = document.getElementById("raffle");
}

function ohplay(){
  window.open("aboutnoprize.html", "_blank", "width=260,height=200, left=380,top=300");
  if (oh.isPlaying() == false) {
  oh.play();
  oh.rate(1.1);
}
}

function conplay(){
  if (con.isPlaying() == false) {
  con.play();
  con.rate(1.1);
}
}
