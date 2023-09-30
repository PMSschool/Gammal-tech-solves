
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

  let preTag = document.querySelectorAll("pre");

      preTag.forEach((e) => {
        e.addEventListener("click",() =>{
    
              navigator.clipboard.writeText
                   (e.textContent);
           });   
      });

      for(let i = 0 ; i < preTag.length ; i++){
        let gt = document.querySelector(".gt-qu");
        let en = document.querySelectorAll(".en");
        en[i].onclick = () => {
          gt.children[i+1].classList.toggle("active");
        }
      }
