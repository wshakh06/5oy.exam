const darkBtn = document.querySelector(".dark")
const lightBtn = document.querySelector(".light")
const inpts = document.querySelectorAll(".inp")
const divOne = document.querySelector(".div_one")
const filtertext =document.querySelector(".span3_title")
const body = document.querySelector('body')
const headerDiv = document.querySelector(".container_div")

darkBtn.addEventListener("click", () => {
    darkBtn.classList.add("block");
    lightBtn.classList.remove("block");
    divOne.setAttribute("style", "background: #19202D;");
    filtertext.setAttribute("style", "color: #fff;");
    body.setAttribute("style", "background: #121721;" )
     
    inpts.forEach((i) => {
        i.setAttribute("style", "background: #19202D;");
      });

  });

  lightBtn.addEventListener("click", () => {
    lightBtn.classList.add("block");
    darkBtn.classList.remove("block");
    divOne.setAttribute("style", "background: #fff;");
    filtertext.setAttribute("style", "color: #333;");
    body.setAttribute("style", " ")
    inpts.forEach((i) => {
        i.setAttribute("style", "background: #fff;");
      });
      console.log(inpts);
       
  });