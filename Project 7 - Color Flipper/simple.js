// import math;

const hex = document.querySelector('.hex__code')
const button = document.querySelector('.click')



colors = ['blue', 'red', 'green', 'yellow',"rgba(133,122,200)", "#f15025"]


button.addEventListener('click', change = () => {
    const rando = Math.floor(Math.random() * colors.length)

    document.body.style.backgroundColor = colors[rando]
    hex.textContent = colors[rando]


})

// console.log(rando)