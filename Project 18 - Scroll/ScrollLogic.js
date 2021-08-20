const togglebtn = document.querySelector("#toggle");
const navlinks = document.querySelector("#navlinks");



togglebtn.addEventListener('click', function(){
    console.log("hello")
    navlinks.classList.toggle("show__nav");
})


