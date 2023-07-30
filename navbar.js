const hamburger = document.querySelector('.hamburger');
const toggle = document.querySelector(".toggle");
const about = document.querySelector("#about");
const aboutSec = document.querySelector("#about-section");
console.log(hamburger)
console.log(toggle)

hamburger.addEventListener('click',()=>{
    if(toggle.style.display === 'none'){
        toggle.style.display = "block";
    }
    else
     toggle.style.display = "none";

     console.log('click');
})

about.addEventListener("click",()=>{
     console.log(aboutSec.offsetTop);
     window.scrollTo(0,aboutSec.offsetTop);
});