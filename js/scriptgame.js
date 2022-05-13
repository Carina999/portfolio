let mics;
let sstate = 1;
let carina;
let crycry = [];
let crygone = [];
let crylr = [];
let posx, posy;
let counter;

function raffle() {
  window.open("abouta.html", "_parent");
}

function setup() {
  let cc = createCanvas(800, 600);
  cc.parent("container");
  // cc.mousePressed(userStartAudio);
  mics = new p5.AudioIn();
  mics.start();
  counter = 0;
  carina = new doctorha(200, 300);

  for (i = 0; i < 6; i++) {
    crycry[i] = new crycry999(random(width), random(20, 370));
  }
  for (i = 0; i < 6; i++) {
    crylr[i] = new crycrylr(random(width), random(60, 370));
  }

  for (i = 0; i < 4; i++) {
    crygone[i] = new crycrygone(random(width), random(300, 400));
  }
}
function preload() {
  smile = loadImage("pics/smile.png");
  cry = loadImage("pics/cry.png");
  doctor = loadImage("pics/doctor.png");
  doublesave = loadSound("audio/2.mp3");
  triplesave = loadSound("audio/3.mp3");
  quadrasave = loadSound("audio/4.mp3");
  pentasave = loadSound("audio/5.mp3");
  hexasave = loadSound("audio/6.mp3");
  heptasave = loadSound("audio/7.mp3");
  octasave = loadSound("audio/8.mp3");
  nonasave = loadSound("audio/9.mp3");
  decasave = loadSound("audio/10.mp3");

}

function draw() {
  if (sstate == 1) {
    drawsstate1();
  }
  if (sstate == 2) {
    drawsstate2();
  }
  if (sstate == 3) {
    drawsstate3();
  }
}

let lastAudio = 0;
function drawsstate1() {
  background(255);

  if (counter == 2) {
    if (lastAudio != 2) {
      doublesave.play();
      doublesave.pan(0.7);
      doublesave.rate(1.2);
      lastAudio = 2;
    }
  } else if (counter == 3) {
    if (lastAudio != 0) {
      triplesave.play();
      triplesave.pan(-0.7);
      triplesave.rate(1.2);
      lastAudio = 0;
    }
  }

  else if (counter == 4) {
    if (lastAudio != 2) {
      quadrasave.play();
      quadrasave.pan(0.7);
      quadrasave.rate(1.2);
      lastAudio = 2;
    }
  } else if (counter == 5) {
    if (lastAudio != 0) {
      pentasave.play();
      pentasave.pan(-0.7);
      pentasave.rate(1.2);
      lastAudio = 0;
    }
  } else if (counter == 6) {
    if (lastAudio != 2) {
      hexasave.play();
      hexasave.pan(0.7);
      hexasave.rate(1.2);
      lastAudio = 2;
    }
  } else if (counter == 7) {
    if (lastAudio != 0) {
      heptasave.play();
      heptasave.pan(-0.7);
      heptasave.rate(1.2);
      lastAudio = 0;
    }
  } else if (counter == 8) {
    if (lastAudio != 2) {
      octasave.play();
      octasave.pan(0.7);
      octasave.rate(1.2);
      lastAudio = 2;
    }
  } else if (counter == 9) {
    if (lastAudio != 0) {
      nonasave.play();
      nonasave.pan(-0.7);
      nonasave.rate(1.2);
      lastAudio = 0;
    }
  } else if (counter == 10) {
    if (lastAudio != 2) {
      decasave.play();
      decasave.pan(0.7);
      decasave.rate(1.2);
      lastAudio = 2;
    }
  }

  push();
  for (let x = 0; x < 900; x += 2.5) {
    let A = noise((frameCount + x) / 150, frameCount / 200);
    // stroke(A*300); //why深浅
    stroke(A * 250, A * 300, A * 500); //颜色
    strokeWeight(3);
    line(x - 80, posy - 50 + A * 100, x, height);
    //上部+A*波动
  }
  pop();
  carina.show();
  carina.save();
  for (i = 0; i < 6; i++) {
    crycry[i].happy();
    if (crycry[i].wasChanged) {
      counter++;
    }
    crycry[i].circle();
  }

  for (i = 0; i < 6; i++) {
    crylr[i].happy();
    if (crylr[i].wasChanged) {
      counter++;
    }
    crylr[i].circle();
  }

  for (i = 0; i < 4; i++) {
    crygone[i].happy();
    if (crygone[i].wasChanged) {
      counter++;
    }
    crygone[i].circle();
  }
  push();
  textSize(35);
  textStyle(BOLD);
  fill(0);
  stroke(255);
  text("You have saved " + counter + " sad souls!", 170, 570);
  pop();
  if (frameCount >= 1600) {
    //1600
    push();
    imageMode(CENTER);
    image(doctor, 800 / 2, 600 / 2, 200, 200);
    pop();
    sstate = 2;
  }
}

function drawsstate2() {
  background(255);
  textSize(35);
  textStyle(BOLD);
  fill(0);
  text("Times Up : ） ", 300, 270);
  text("You have saved " + counter + " sad souls！", 140, 320);
  push();
  textSize(20);
  text(
    "Want some Freeze Cards or Extra-time Cards? Let's go to the raffle!",
    75,
    580
  );
  pop();
}

class doctorha {
  constructor(xx, yy) {
    this.x = xx;
    this.y = yy;
    this.spdy = 1;
    this.ay = 0.5;
  }

  save() {
    posx = this.x + 100;
    posy = this.y + 120;
    if (keyIsPressed) {
      if (keyCode == 39) {
        this.x += 4;
      }
      if (keyCode == 37) {
        this.x -= 4;
      }
      // if (keyCode == 38) {
      //   this.y -= 4;
      // }

    }
    else {
      let volume = mics.getLevel();
      let gg = map(volume, 0.1, 0.4, 2, 3);
      this.y -= gg;
    }
    this.x = constrain(this.x, 0 - 23, 682);
    this.y = constrain(this.y, -80, 400);
    this.spdy += this.ay;
    this.y += this.spdy;
    if (this.y > 400) {
      this.spdy *= -0.75;
    }
  }
  show() {
    push();
    image(doctor, this.x, this.y, 150, 150);
    posx = this.x + 80;
    posy = this.y;
    // ellipse(posx, posy, 20, 20);
    pop();
  }
}

class crycry999 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.change = true;
    this.wasChanged = false;
  }
  happy() {
    this.wasChanged = false;
    if (dist(this.x, this.y, posx, posy) < 30) {
      if (this.change == true) {
        // this the one time where we're changing the value
        this.wasChanged = true;
      }
      this.change = false;
    }
  }
  circle() {
    if (this.change == true) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(cry, 0, 0, 130, 130);
      let sinv = sin(frameCount * 0.05) * 2;
      let cosv = cos(frameCount * 0.05) * 2;
      this.x = this.x + sinv;
      this.y = this.y + cosv;
      pop();
    } else {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(smile, 0, 0, 130, 130);
      this.y = this.y + sin(frameCount * 0.5);
      this.x = this.x + sin(frameCount * 0.5);
      pop();
    }
  }
}
class crycrygone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.change = true;
    this.wasChanged = false;
  }
  happy() {
    this.wasChanged = false;
    if (dist(this.x, this.y, posx, posy) < 30) {
      if (this.change == true) {
        // this the one time where we're changing the value
        this.wasChanged = true;
      }
      this.change = false;
    }
  }

  circle() {
    if (this.change == true) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(cry, 0, 0, 130, 130);

      this.x = this.x;
      this.y = this.y - 2;
      if (this.y < 0) {
        this.y = this.y + 400;
      }
      pop();
    } else {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(smile, 0, 0, 130, 130);
      this.y = this.y + sin(frameCount * 0.5);
      this.x = this.x + sin(frameCount * 0.5);
      pop();
    }
  }
}

class crycrylr {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.change = true;
    this.wasChanged = false;
  }
  happy() {
    this.wasChanged = false;
    if (dist(this.x, this.y, posx, posy) < 30) {
      if (this.change == true) {
        // this the one time where we're changing the value
        this.wasChanged = true;
      }
      this.change = false;
    }
  }

  circle() {
    if (this.change == true) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(cry, 0, 0, 130, 130);
      let sinv = sin(frameCount * 0.1) * 6;

      this.x = this.x + sinv;
      this.y = this.y;
      pop();
    } else {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(smile, 0, 0, 130, 130);
      this.y = this.y + sin(frameCount * 0.5);
      this.x = this.x + sin(frameCount * 0.5);
      pop();
    }
  }
}
