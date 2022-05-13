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


}
function draw(){

}
function play(){
  if (ftplay.isPlaying() == false) {
  ftplay.play();
}
}
function pause(){
  ftplay.pause();
}
