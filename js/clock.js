let bands = 1024; // Define the bands wanted for our visualization.
// Above a certain threshold, high frequencies are rarely attained and stay flat.
let bandsWanted = 80; // Create an array to store the bands wanted
let gap;
let positionf = 0;
let positions = 0;
let spinSpeedf, spinSpeeds;
let duration;
function setup() {
let cc = createCanvas(600, 600);
cc.parent("content2");
  background(0);
  fft = new p5.FFT();
  duration = 10;
  spinSpeedf = radians(360) / (duration * 10);
  spinSpeeds = radians(360) / (duration * 120);
  //adjust the gap
  gap = width / 3 / bandsWanted;
  frameRate(20);
}

function draw() {
  console.log(frameCount)
  if(frameCount>340){

    document.getElementById("learning").style.visibility = "hidden";
    document.getElementById("sleep").style.visibility = "visible";
    // document.getElementById("learning").style.transition = "1s";
  }
  background(0);
  // ellipse(width / 2, height / 2, 500, 500);
  stroke(150, 100, 200);

  strokeWeight(6);
  line(300, 70, 300, 85);
  line(300, 530, 300, 515);
  line(70, 300, 85, 300);
  line(530, 300, 515, 300);
  line(300, 70, 300, 85);
  spectrum = fft.analyze();
  push(); //Translating the position to start drawing in the middle
  translate(width / 2, height / 2);
  positionf += spinSpeedf;
  rotate(positionf);
  // if (frameCount<=duration*frameRate) {
  //Drawing a line for every frequency of the spectrum
  for (let i = 0; i < bandsWanted; i++) {
    //长
    stroke(250 - i, 200, 250);
    strokeWeight(7);
    line(i * gap, 0, i * gap, -spectrum[i] * 1000);
    console.log(spectrum[i]);
  }
  // }
  pop();

  push(); //Translating the position to start drawing in the middle
  translate(width / 2, height / 2);
  positions += spinSpeeds;
  rotate(positions + 10);
  for (let i = 0; i < bandsWanted; i++) {
    stroke(i + 100, 100, 250 - i);
    strokeWeight(13);
    line(i * 1.3, 0, i, spectrum[i] * 1000);
  }
  pop();

  // if (key == 'A'|| key == 'a') {
  //   // let fs = fullscreen();
  //   // fullscreen(!fs);
  //   window.open("nightmare.html", "_parent");
  // }
if (frameCount>60){
  window.open("purpose.html", "_parent");
}

  // if(key == "a"){
  //   frameRate(1);
  // }
  // else if(key == "b"){
  //   frameRate(20);
  // }

}
