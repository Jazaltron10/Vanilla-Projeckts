// import math;

const hex = document.querySelector('.hex__code')
const button = document.querySelector('.click')

colors = ['blue', 'red', 'green', 'yellow',"rgba(133,122,200)", "#f15025"]




button.addEventListener('click', change = () => {
    //This just gets a random number between 0 and the length of the array minus 1
    const randomNumber = Math.floor(Math.random() * colors.length)

    // Changing the style through the document object
    document.body.style.backgroundColor = colors[randomNumber]
    
    // Writing text to a section on the page 
    hex.textContent = colors[randomNumber]
})

// console.log(rando)