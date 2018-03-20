//bandeau hoover

function imagedyn(){
  result = document.getElementById("lienmagic")
  result.style.visibility = "visible";
}
function imagedyn2(){
  result = document.getElementById("lienmagic")
  result.style.visibility = "hidden";
}
//
//carrousel
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4200); // Change image every 2 seconds
}
//fin du carrousel


// début onClickLeft et onClickRight de la partie simplon-quoi

$(document).ready(function() {

  var onClickLeft = document.querySelector(".onClickLeft");
  var onClickRight = document.querySelector(".onClickRight");


  var btnLeft = document.querySelector(".btnLeft");
  btnLeft.onclick = function() {
    onClickLeft.classList.toggle("onClickLeft_open");
  }
  var crossLeft = document.querySelector(".crossLeft");
  crossLeft.onclick = function() {
    onClickLeft.classList.toggle("onClickLeft_open");
  }

  var btnRight = document.querySelector(".btnRight");
  btnRight.onclick = function() {
    onClickRight.classList.toggle("onClickRight_open");
  }
  var crossRight = document.querySelector(".crossRight");
  crossRight.onclick = function() {
    onClickRight.classList.toggle("onClickRight_open");
  }

});
// fin onClickLeft et onClickRight de la partie simplon-quoi

