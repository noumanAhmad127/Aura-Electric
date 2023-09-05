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