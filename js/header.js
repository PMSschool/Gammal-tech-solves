
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

let scrollIcon = document.querySelector("header");

window.onscroll = function (){
  if(window.scrollY >= 100){
    scrollIcon.classList.add("back-c");
  }else{
    scrollIcon.classList.remove("back-c");
  }
};

let icon = document.querySelectorAll(".btn i");
let click = document.querySelector(".click");
icon.forEach ( (ele)=> {
  ele.addEventListener("click" , function(e){
    icon.forEach((ele) => {
    ele.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  });
});

function morningPage(){
  document.body.classList.add("night-page");
}
function nightPage(){
  document.body.classList.remove("night-page");
}