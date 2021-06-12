/*So basically we are going to be using the functionality of javascript to toggle the show_navlinks class*/

// some methods to take note of are 
// ClassList - shows/gets all classes
// contains - checks classList for specific class
// add - adds a class to an element
// remove - removes a class from an element 
// toggle - toggles between different classes 



const btnToggle = document.querySelector('.btnToggle');
const links = document.querySelector('.nav_links')

btnToggle.addEventListener('click', B =()=>{
    // console.log(links.classList, "Hello world")
    /*This returns a boolean value of true or false if a specific class is contained within an element*/
    // console.log(links.classList.contains('random')) // returns FALSE
    // console.log(links.classList.contains('nav_links')) // returns TRUE

    // if(links.classList.contains('show_navlinks')){
    //     links.classList.remove('show_navlinks')
    // }else{
    //     links.classList.add('show_navlinks')
    // }


    // Alternative One-Liner method
    links.classList.toggle("show_navlinks")
})

