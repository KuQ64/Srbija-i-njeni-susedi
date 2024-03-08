/*-------------------------Hovered-Button---------------------------------*/ 
function hover1(){
    document.getElementById("mini1").src = "/images/balkan_crni.png"
}
function unhover1(){
    document.getElementById("mini1").src = "/images/balkan.png"
}
function hover2(){
  document.getElementById("mini2").src = "/images/about_crni.png"
}
function unhover2(){
  document.getElementById("mini2").src = "/images/about.png"
}
function hover3(){
  document.getElementById("mini3").src = "/images/info_crni.png"
}
function unhover3(){
  document.getElementById("mini3").src = "/images/info.png"
}

window.onscroll = function() {scrollFunction()};

/*-------------------------Navigation-Bar---------------------------------*/ 
function scrollFunction() {
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    document.getElementById("nav").style.boxShadow = "0px 6px 30px 7px #000000";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav").style.backdropFilter = "blur(2px)";
    document.getElementById("nav").style.backgroundColor = "rgba(1,1,1,0.4)";
  }
  else {
    document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav").style.backdropFilter = "none";
    document.getElementById("nav").style.backgroundColor = "rgba(1,1,1,0)";
  }
}


/* VUJIC */
function showOverlay()
{
  var overlay = document.querySelector('.overlay');
  overlay.style.left = '100%';
}
function hideOverlay()
{
  var overlay = document.querySelector('overlay');
  overlay.style.left = '110%';
}
