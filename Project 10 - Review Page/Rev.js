// local reviews data
const reviews = [
    {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// Getting Elements from the DOM
const img = document.getElementById("person_img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

// Getting the buttons from the DOM
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const randomBtn = document.querySelector(".random")

// Setting the starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", k = () =>{
    showPerson(currentItem);
})

// Creating a function that shows the person based on the item 
const showPerson =(person)=>{
    const item = reviews[person];
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// Adding an event listener to the next button to show the next person in the array

nextBtn.addEventListener('click', N =()=>{
    currentItem++; // This increases the currentitem value by one anytime the nextBtn is clicked.
    // Note: The currentitem maps to the index of the reviews array 
    console.log("Hello world")
    // adding a conditional to check if the current index is greater than the last index (i.e the array.length - 1 index)
    if (currentItem > reviews.length - 1){
        // if this evaluates to true then the index returns to the first item in the array
        currentItem = 0;
    }
    showPerson(currentItem);
})



// Adding an event listener to the previous button to show the previous  person in the array list

prevBtn.addEventListener('click', P =()=>{
    currentItem--; // This decreases the currentitem value by one anytime the previous Button is clicked.
    // Note: The currentitem also maps to the index of the reviews array 
    console.log("Hello world")
    // adding a conditional to check if the current index is less than 0 (i.e index < 0)
    if (currentItem < 0){
        // if this evaluates to true then the index returns to the last item in the array
        currentItem = reviews.length - 1 ;
    }
    showPerson(currentItem);
})


// This is the random section of this project 
// it shows a random person from the array
randomBtn.addEventListener('click', R =()=>{
    // to do this i take inspiration from previous project that 
    // dealt with creating and using random numbers
    // So here the current index is generated as a random number and 
    // then rounded down to the nearest integer with the length of the 
    // array serving as an upperbound 
    currentItem = Math.floor( Math.random() * reviews.length)
    showPerson(currentItem);
})












// cssimg.style.backgroundImage = "url('048-Weed.png')"
// cssimg.src = item.img
