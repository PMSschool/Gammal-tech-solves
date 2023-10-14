

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
