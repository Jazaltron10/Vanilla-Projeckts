const toggleBtn = document.querySelector("#openbtn")
const closeBtn = document.querySelector("#closebtn")
const sideBar = document.querySelector(".sidenav")
const menubtn = document.querySelector(".btncon")





toggleBtn.addEventListener('click', T =()=>{
    console.log(sideBar.classList)
    sideBar.classList.toggle("show_sidenav")
})

closeBtn.addEventListener('click', C=()=>{
    sideBar.classList.remove('show_sidenav')
})