//Selecting the Default number and all the buttons 
const number = document.querySelector('.number')
//Grabbing all buttons with the class .click
const Allbuttons = document.querySelectorAll('.click')
    
// Using the forEach method to loop through all the buttons
Allbuttons.forEach( (btn) => {
    //adding an event listener to each button
    btn.addEventListener('click', (e)=>{
        //getting all classes associated to each button currently going through the loop.
        const styles = e.currentTarget.classList;
        // adding a conditional to check if a certain class name is contained by the current object, then incrementing, decrementing or resetting to the default value
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        //Changing the color of the value based on the outcome of the above conditionals
        if (count < 0){ // i.e decreasing
            number.style.color = 'red'
        }
        if (count > 0){ // i.e increasing
            number.style.color = 'blue'
        }
        if(count === 0){
            number.style.color = 'black'
        }
        // writing the value of the number i.e count to the DOM
        number.textContent = count;
    })
})