// first option - traversing the DOM

/*
const btns = document.querySelectorAll('.question-btn');


/*Here we'll select all the buttons with the forEach method,
add an event listener to each button and then we would 
target the parent element of the parent element of the button 
using the event parameter. 
We we'll then assign this parent element to a variable and 
then we'll toggle the class of show-text on this parent element 
*/


/*
btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text'); 
    })
})
*/



// second option - using selectors inside the element 
const questions = document.querySelectorAll(".question")

questions.forEach((question)=>{
    //console.log(question);
    const btn = question.querySelector(".question-btn");
    //console.log(btn);
    btn.addEventListener("click", ()=>{
        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})