/*-------------------------Hovered-Button---------------------------------*/ 
function hover1(){
    document.getElementById("mini1").src = "/images/home/balkan_crni.png"
}
function unhover1(){
    document.getElementById("mini1").src = "/images/home/balkan.png"
}
function hover2(){
  document.getElementById("mini2").src = "/images/about/about_crni.png"
}
function unhover2(){
  document.getElementById("mini2").src = "/images/about/about.png"
}
function hover3(){
  document.getElementById("mini3").src = "/images/home/info_crni.png"
}
function unhover3(){
  document.getElementById("mini3").src = "/images/home/info.png"
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
/* ---------- ABOUT HOVER ---------- */
function showOverlay()
{
  document.getElementById("about1").style.opacity = "1";
}
function hideOverlay()
{
  document.getElementById("about1").style.opacity = "0";
}
function showOverlay1()
{
  document.getElementById("about2").style.opacity = "1";
}
function hideOverlay1()
{
  document.getElementById("about2").style.opacity = "0";
}

/* ---------- MODALS ---------- */
function setupModal(divId, modalId, closeClass)
{
  var modal = document.getElementById(modalId);
  var div = document.getElementById(divId);
  var span = document.getElementsByClassName(closeClass)[0];

  div.onclick = function(){
    modal.style.display = "block";
  }
  span.onclick = function(){
    modal.style.display = "none";
  }
  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }
}
setupModal("srbDiv", "myModal", "close");
setupModal("mnDiv", "myModal2", "close2");
setupModal("grDiv", "myModal3", "close3");
setupModal("crDiv","myModal4","close4");
setupModal("bihDiv","myModal5","close5");
setupModal("slDiv","myModal6","close6");
setupModal("hgDiv","myModal7","close7");
setupModal("rmDiv","myModal8","close8");
setupModal("blDiv","myModal9","close9");
setupModal("alDiv","myModal10","close10");
setupModal("mdDiv","myModal11","close11");
