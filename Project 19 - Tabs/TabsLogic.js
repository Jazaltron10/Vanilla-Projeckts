// {navs  -> about
// links -> btns
// displayArea -> articles}
// the event target gets back whatever you click on
const btns = document.querySelectorAll(".links")
const navs = document.querySelector('.navs')
const articles = document.querySelectorAll(".displayArea")

navs.addEventListener("click", (e)=>{
    const id = e.target.dataset.id;
    // if id exists
    if(id){
        // remove active class from all the buttons
        // accessing all the buttons using a forEach loop
        btns.forEach((btn)=>{
            // if the data id exists on this button
            btn.classList.remove("active");
            // accessing the btn  i am clicking on us the event target
            e.target.classList.add("active");
        });
        // Hide all the articles 
        articles.forEach((article)=>{
            article.classList.remove("active")
        })
        const singleArticle = document.getElementById(id);
        singleArticle.classList.add("active");
    }
});