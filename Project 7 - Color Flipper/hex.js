const hex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"
]

const hex__code = document.querySelector('.hex__code')
const button = document.querySelector('.click')

// attaching an event listener to the button to listen for a click and make changes 
button.addEventListener("click", change = () =>{
// A variable that will contain the hexcolor
    let hexColor = "#"  // const will give an error, that's why we use let
    //creating for loop to generate six values for the hexcolor 
    for(let i = 0; i < 6; i++){
        const randomNumber = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNumber];
    }
    
    //changing the bg color of page through txtcontent and doc Obj access
    hex__code.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    //creating random number for the hex index
    // return Math.floor(Math.random() * hex.length);

}














