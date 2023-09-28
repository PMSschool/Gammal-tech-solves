function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.display = "flex";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector("header nav").style.display = "flex";
  document.getElementById("main").style.position = "fixed";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("main").style.position = "relative";
}
