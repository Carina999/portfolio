let serial; // variable to hold an instance of the serialport library
let portName = "COM3"; // fill in your serial port name here
let inData; // for incoming serial data
let once = true;

function setup() {
  // createCanvas(500, 500);
  let cc = createCanvas(500, 500);
  cc.parent("canvas");
  background(200, 240, 200);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event

  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", serialEvent); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
}
// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

//-----------------------------------------------------

function serverConnected() {
  console.log("connected to server.");
}

function portOpen() {
  console.log("the serial port opened.");
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 读数据
function serialEvent() {
  inData = Number(serial.read());
}

function serialError(err) {
  console.log("Something went wrong with the serial port. " + err);
}

function portClose() {
  console.log("The serial port closed.");
}


function draw() {
  background(0);
  fill(255);
  console.log(inData);
  console.log(once);

  // text("sensor value: " + inData, 30, 50);

//   if (inData > 100 && once == true) {
//  //hide
//    once = false;
//  }

//  if(once == false){
//   window.open("two.html", "_parent");
//  }

// //  ----------------------------------------
//  if(inData > 100 && once == true){
//   frameRate(1);
//   once = false;
// }
// else if(once == false){
//   frameRate(10);
// }


// if(frameCount>2000){
//     window.open("two.html", "_parent");
// }

if(frameCount>400){
  window.open("purpose.html", "_parent");
}


  // ellipse(200, 200, inData);
}
