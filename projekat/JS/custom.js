/*-------------------------Hovered-Button---------------------------------*/
function hover1() {
  document.getElementById("mini1").src = "/images/home/balkan_crni.png";
}
function unhover1() {
  document.getElementById("mini1").src = "/images/home/balkan.png";
}
function hover2() {
  document.getElementById("mini2").src = "/images/about/about_crni.png";
}
function unhover2() {
  document.getElementById("mini2").src = "/images/about/about.png";
}
function hover3() {
  document.getElementById("mini3").src = "/images/home/info_crni.png";
}
function unhover3() {
  document.getElementById("mini3").src = "/images/home/info.png";
}
document.getElementById("maxi1").addEventListener("mouseover", hover1);
document.getElementById("maxi1").addEventListener("mouseout", unhover1);
document.getElementById("maxi2").addEventListener("mouseover", hover2);
document.getElementById("maxi2").addEventListener("mouseout", unhover2);
document.getElementById("maxi3").addEventListener("mouseover", hover3);
document.getElementById("maxi3").addEventListener("mouseout", unhover3);

window.onscroll = function () {
  scrollFunction();
};

/*-------------------------Navigation-Bar---------------------------------*/
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("nav").style.boxShadow = "0px 6px 30px 7px #000000";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav").style.backdropFilter = "blur(2px)";
    document.getElementById("nav").style.backgroundColor = "rgba(1,1,1,0.4)";
  } else {
    document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav").style.backdropFilter = "none";
    document.getElementById("nav").style.backgroundColor = "rgba(1,1,1,0)";
  }
}

/* ---------- MODALS ---------- */
function setupModal(divId, modalId, closeClass, himnaId) 
{
  var modal = document.getElementById(modalId);
  var div = document.getElementById(divId);
  var span = document.getElementsByClassName(closeClass)[0];
  var audio = document.getElementById(himnaId);

  div.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
    audio.pause();
  };
}
setupModal("srbDiv", "myModal", "close", "himna1");
setupModal("mnDiv", "myModal2", "close2", "himna2");
setupModal("grDiv", "myModal3", "close3", "himna3");
setupModal("crDiv", "myModal4", "close4", "himna4");
setupModal("bihDiv", "myModal5", "close5", "himna5");
setupModal("slDiv", "myModal6", "close6", "himna6");
setupModal("hgDiv", "myModal7", "close7", "himna7");
setupModal("rmDiv", "myModal8", "close8", "himna8");
setupModal("blDiv", "myModal9", "close9", "himna9");
setupModal("alDiv", "myModal10", "close10", "himna10");
setupModal("mdDiv", "myModal11", "close11", "himna11");
