const menuToggle = document.querySelector('.toggle'); 
const showcase = document.querySelector('.showcase');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

// window.addEventListener('click', function(e){
//     if(e.target == menuToggle){
//     menuToggle.classList.toggle('active');
//     showcase.classList.toggle('active');
//     }
// })



// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", ()=>{
    preloader.classList.add("hide-preloader");
})



/*Audio Section*/
const btn = document.querySelector('.switch-btn');
const Audio = document.querySelector('.ACon');



btn.addEventListener("click", ()=>{
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide");
        Audio.pause();
    }
    else{
        btn.classList.remove("slide");
        Audio.play();
    }
})