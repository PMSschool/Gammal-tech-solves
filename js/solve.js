
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


let gt = document.querySelector(".gt-qu");

  for(let i = 0 ; i < 6 ; i++){
    gt.children[i].onclick = () => {
      gt.children[i].classList.toggle("active");
    }
  }

  
  document.getElementById(copyButton).addEventListener(click, function() {
  var codeBlock = document.getElementById(codeBlock);
  var range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand(copy);
  window.getSelection().removeAllRanges();
  });

  