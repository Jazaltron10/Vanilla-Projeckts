const images = [
    {
        id: 1,
        img: "../images/no_mans_sky_beyond_2019_4k-3840x2160.jpg",
    },
    {
        id: 2,
        img: "../images/chris_hemsworth_in_bad_times_at_the_el_royale_5k-5120x2880.jpg",
    },
    {
        id: 3,
        img: "../images/hello_summer_4k-3840x2160.jpg",
    },
    {
        id: 4,
        img: "../images/boy_girl_love_cute_sunset-2560x1440.jpg",
    },
    {
        id: 5,
        img: "../images/emilia_clarke_3-2560x1440.jpg",
    },
    {
        id: 6,
        img: "../images/i_am_a_gamer_4k.jpg",
    },
    {
        id: 7,
        img: "../images/geometric_abstract_bicycle-2560x1440.jpg",
    },
    {
        id: 8,
        img: "../images/joker_joaquin_phoenix_2019_4k_8k-7680x4320.jpg",
    },
    {
        id: 9,
        img: "../images/starry_landscape_5k_2-5120x2880.jpg",
    },
    {
        id: 10,
        img: "../images/musical_lake_fantasy_4k-3840x2160.jpg",
    },
];

const container = document.querySelector(".slider-container") 
const nextBtn = document.querySelector(".nextBtn")
const topprevBtn = document.querySelector(".top-prevBtn")
const downprevBtn = document.querySelector(".down-prevBtn")

window.addEventListener("DOMContentLoaded", ()=>{
    displaySlideItems(images);    // takes the menu array as an argument
});


const displaySlideItems = (imagesarr) =>{
    let displaySlide = imagesarr.map((item)=>{
        return `<div class="slide">
        <img src=${item.img} 
        alt="" class="slide-pic">
        <h1>${item.id}</h1>
        </div>`
    })
    displaySlide = displaySlide.join("");
    container.innerHTML = displaySlide;
    
    const slides = document.querySelectorAll(".slide")
    slides.forEach(function(slide, index){
        slide.style.left = `${index * 100}%`;
    })
    
    let counter = 0;
    
    nextBtn.addEventListener("click", function(){
        counter++;
        carousel()
    })
    topprevBtn.addEventListener("click", function(){
        counter--;
        carousel()
    })
    downprevBtn.addEventListener("click", function(){
        counter--;
        carousel()
    })
    
    function carousel(){
        //working with slides  first set up
        // if (counter == slides.length){
        //     counter = 0;
        // }
        // if (counter < 0){
        //     counter = slides.length - 1;
        // }
    
        // working with buttons
        if(counter < slides.length - 1){
            nextBtn.style.display = "block"
        }else{
            nextBtn.style.display = "none"
        }
        if(counter > 0){
            topprevBtn.style.display = "block"
            downprevBtn.style.display = "block"
        }else{
            topprevBtn.style.display = "none";
            downprevBtn.style.display = "none";
        }
    
        slides.forEach(function (slide){
            slide.style.transform = `translateX(-${counter*100}%)`;
        });
    }
    
    topprevBtn.style.display = "none";
    downprevBtn.style.display = "none";
}






