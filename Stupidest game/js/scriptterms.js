
function draw() {
  let elem = document.getElementById('check');
  if(elem.checked == false){
  document.getElementById("start").style.visibility = "hidden";
} else if(elem.checked == true) {
  document.getElementById("start").style.visibility = "visible";
}
}

function start(){
  window.open("aboutafter.html", "_parent");
}
