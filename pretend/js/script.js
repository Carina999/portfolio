let ftplay,ftpause;

function preload(){
  ftplay = loadSound("audio/2.mp3");
}

function setup() {
  let cc = createCanvas(400, 400);
  cc.mousePressed(userStartAudio);
  cc.parent("container");
// cc.id("container")??
  ftplay = document.getElementById("roundplay");
// ftpause = document.getElementById("roundpause");
// slider3js = document.getElementById("slider3");
// sliderrjs = document.getElementById("sliderr");
// sliderbjs = document.getElementById("sliderb");

}
function draw(){

}
function play(){
  if (ftplay.isPlaying() == false) {
  ftplay.play();
  // ftplay.setVolume(1);
  // ftplay.pan(0.2);
  // ftplay.rate(1.5);
}
}
function pause(){
  ftplay.pause();
}
