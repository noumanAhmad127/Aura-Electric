
// Header
let menu = document.querySelectorAll(".menu");
let content = document.querySelectorAll(".content") 
let menuIcon = document.querySelectorAll(".Micon")

menu.forEach((li,index)=>{
    li.addEventListener("mouseover",()=>{
        content[index].style.display ="flex"
        menuIcon[index].setAttribute("class","fa-solid fa-chevron-up Micon")
    })
    li.addEventListener("mouseout",()=>{
        content[index].style.display ="none"
        menuIcon[index].setAttribute("class","fa-solid fa-chevron-down Micon")
    })
})


// List Item Page

let btns = document.querySelectorAll(".filter-part-list button");
let lists = document.querySelectorAll(".filter-part-list .filter-lists");
let icons = document.querySelectorAll(".filter-part-list i")
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (lists[index].style.display === "block" || lists[index].style.display === "") {
      lists[index].style.display = "none";
      icons[index].setAttribute("class","fa-solid fa-chevron-down fa-2xs")
    } else {
      lists[index].style.display = "block";
      icons[index].setAttribute("class","fa-solid fa-chevron-up fa-2xs")
    }
  });
});


// item Cart Page
let imgViewer = document.querySelector(".product-img-large img");
let imgs = document.querySelectorAll(".img-small-col img");

imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Get the source of the clicked small image
    let newSrc = img.getAttribute("src");

    // Set the source of the large image to the clicked small image
    imgViewer.setAttribute("src", newSrc);
  });
});


// Home/Index Page
let slider = document.querySelector(".slider-img")
let arrbutton = document.querySelectorAll(".slider-button button")
let firsImgWidth = slider.querySelector(".images").offsetWidth

arrbutton.forEach((arrbtn)=>{
  arrbtn.addEventListener("click",()=>{
    slider.scrollLeft += arrbtn.id ==="right" ? -firsImgWidth : firsImgWidth;
  })
})


let toggleBar = document.querySelector(".toggle-bar span i")
let sideMenu = document.getElementById("side-bar-Menu")
let toggleCrox = document.querySelector(".crox-toggle span i")

toggleBar.addEventListener("click",()=>{
  sideMenu.style.display = "none" ? "block" : "none"
})

toggleCrox.addEventListener("click",()=>{
  sideMenu.style.display = "block" ? "none" : "block"
})