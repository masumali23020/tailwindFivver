const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")
const nava = document.querySelector("#nav_scrol")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

window.addEventListener('scroll', ()=> {
  if(window.scrollY >= 30){
    nava.classList.add('active_nav')
  }else{
    nava.classList.remove('active_nav')

  }
})

console.log(nava);



