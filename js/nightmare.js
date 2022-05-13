function setup() {
    let cc = createCanvas(1300, 1200);
    cc.parent("content1");
    background(0, 0, 0, 100);
  }
  function draw() {

    strokeWeight(0.3);
    noFill();
    translate(width/2, height/2);
    rotate(frameCount);
    // println(frameCount);
    frameRate(10);
    //make it 3 times bigger
    //scale(3);
    scale(random(1, 2));
    stroke(200, 50, 250);
    ellipse(0, 0, 50, 120);


    scale(random(1, 2));
    stroke(200, 150, 255);
    ellipse(0, 0, 50, 120);



    scale(random(1, 3));
    stroke(255, 255, 255,100);
    ellipse(0, 0, 50, 120);
  }

function mousePressed() {
    // if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
      let fs = fullscreen();
      fullscreen(!fs);
      document.getElementById("top").style.visibility = "hidden";
    // }
  }
