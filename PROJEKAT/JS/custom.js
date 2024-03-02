function hover(){
    document.getElementById("mini").src = "/images/balkan_crni.png"
}
function unhover(){
    document.getElementById("mini").src = "/images/balkan.png"
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 499 || document.documentElement.scrollTop > 499) {
    document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav").style.borderBottom = "1px solid #fbcc01";
  } 
  else if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    document.getElementById("nav").style.boxShadow = "0px 6px 30px 7px #000000";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav").style.backdropFilter = "blur(2px)";
    document.getElementById("nav").style.backgroundColor = "rgba(1,1,1,0.3)";
  }
  else {
    document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav").style.backdropFilter = "none";
    document.getElementById("nav").style.backgroundColor = "rgba(1,1,1,0)";
  }
}
