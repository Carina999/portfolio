// alert("Are you ready to be an artist?");
function NewWindow() {

  window.open("https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj7mbf75J_0AhXP0pYKHeFBDeYYABADGgJ0bA&ae=2&ohost=www.google.com&cid=CAASE-RohkY_PBAWCryk8kkrlcu9V5M&sig=AOD64_0OI3dun1OSpRDf1JCUwLQLF88Lag&q&adurl&ved=2ahUKEwik4a_75J_0AhUnk1YBHcHRBbMQ0Qx6BAgGEAE", "_blank", "width=80,height=80, left=100,top=100");

}


let sliderc,slider1,slider2,slider3,sliderr,sliderb;
// haha


function setup() {
  let cc = createCanvas(600,600);
  cc.parent("container");
// cc.id("container")
slider1js = document.getElementById("slider1");
slider2js = document.getElementById("slider2");
slider3js = document.getElementById("slider3");
sliderrjs = document.getElementById("sliderr");
sliderbjs = document.getElementById("sliderb");
// let posi = document.getElementsByClassName("posi")

let posi = document.getElementById('posi');
posi.addEventListener('mouseover', onMouseOverButton);

}

function onMouseOverButton() {
  this.style.top = random(-270, 270)+'px';
  this.style.left = random(-270, 270)+'px';
  this.style.transition = "0.4s";
}


function draw() {
  background(0, 20);
  let an = radians(frameCount*2);
  let r = map(cos(an), -1, 1, 241, 150);
  let g = map(sin(an), -1, 1, 211, 183);
  let b = map(sin(an),-1,1,255,200);
  let fr = int(sliderrjs.value);
  let fb = int(sliderbjs.value);
  let xx = int(slider2js.value);
  let yy = int(slider3js.value);
  fill(fr,150,fb);

  let mousex = int(slider1js.value);

  translate(width / 2, height / 2);
  //middle
  for (let angle = 0; angle < 360; angle = angle + max(mousex, 4)) {
    push();
    rotate(radians(angle));
    noStroke();
    ellipse(0, 142, 8, 8);
    stroke(r, g, b, 100);
    line(0, xx, xx, yy);
    line(0, 100, -100, 100);
    line(0, 100, 100, 100);
    pop();
  }
  //outer
  for (let angle = 0; angle < 360; angle = angle + max(mousex, 4)) {
    push();
    rotate(radians(angle));
    ellipse(0, 200, 12, 3);
    pop();
  }
  //inner
  for (let angle = 0; angle < 360; angle = angle + max(mousex, 6)) {
    push();
    rotate(radians(angle));
    stroke(r, g, b, 100);
    line(0, 0, 0, 100);
    line(0, 20, 63, 21.5);
    line(0, 0, 30, 30);
    noStroke();
    ellipse(0, 100, 7, 7);
    pop();
  }
}
