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

//Carte

var villes = document.getElementsByClassName('fabrique');
//var afterClick = document.getElementById('ville1');
var text = {
paris:'Ile-de-France: 9 fabriques',
est:'Grand-Est : 2 fabriques',
nEst:'Hauts-de-France: 2 fabriques',
occ:"Occitanie: 10 fabriques",
auvergne:"Auvergne-Rhône-Alpes: 4 fabriques",
paca:"PACA: 2 fabriques",
aquitaine:"Nouvelle-Aquitaine: 3 fabriques",
bretagne:"Bretagne: 3 fabriques"

}


var count = 1;

Array.prototype.forEach.call(villes,function(ville){
var id = ville.getAttribute("id");
ville.onclick = function(){
if(count==0){

  ville.style.backgroundColor="red";
  ville.style.opacity="1";
  ville.style.borderRadius="50%";
  ville.style.height="15px";
  ville.style.width="15px";
  ville.style.padding="0";
  ville.style.border="none";
  ville.innerText = null;

  count=1;
}
else{
 ville.style.backgroundColor="white";
 ville.style.opacity="0.7";
 ville.style.display="flex";
 ville.style.flexWrap="wrap";
 ville.style.height="auto";
 ville.style.width="100px";
 ville.style.borderRadius="3px";
 ville.style.border="2px solid black";
 ville.style.textAlign="center";
 ville.style.verticalAlign="center";
window.setTimeout(afficheText,550)
function afficheText(){
  switch (id){
     case 'Paris':
     ville.innerText = text.paris;
     break;
     case 'Est':
     ville.innerText = text.est;
     break;
     case 'Nord-Est':
     ville.innerText = text.nEst;
     break;
     case 'Occitanie':
     ville.innerText = text.occ;
     break;
     case 'Auvergne':
     ville.innerText = text.auvergne;
     break;
     case 'paca':
     ville.innerText = text.paca;
     break;
     case 'aquitaine':
     ville.innerText = text.aquitaine;
     break;
     case 'bretagne':
     ville.innerText = text.bretagne;
   };
 }


 ville.style.padding="10px 15px 10px 15px";
 ville.style.webkitTransition="0.5s";
 ville.style.textAlign="center";
 ville.style.fontFamily="'Lato";
 count=0;
}}})
