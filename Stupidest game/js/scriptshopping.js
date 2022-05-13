

function setup(){
  let pur1 = document.getElementById('buttonposi');
  pur1.addEventListener('mouseover', run);
  let pur2 = document.getElementById('buttonposi2');
  pur2.addEventListener('mouseover', runha);

  }

  function run() {
    this.style.top = random(-20, 200)+'px';
    this.style.left = random(-200, 200)+'px';
    this.style.transition = "1.7s";
  }

  function runha() {
    this.style.top = random(-20, 200)+'px';
    this.style.left = random(-200, 200)+'px';
    this.style.transition = "1.7s";
  }
  function change1() {
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("onee").style.visibility = "visible";
    document.getElementById("one").style.transition = "1s";

  }
  function change2() {
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("twoo").style.visibility = "visible";
    document.getElementById("two").style.transition = "1s";
  }
  function change3() {
    document.getElementById("three").style.visibility = "hidden";
    document.getElementById("threee").style.visibility = "visible";
    document.getElementById("three").style.transition = "1s";
  }

  function hide1() {
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("one").style.transition = "1s";

  }
  function hide2() {
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("two").style.transition = "1s";
  }
