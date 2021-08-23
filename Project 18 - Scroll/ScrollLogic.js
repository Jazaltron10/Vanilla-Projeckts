// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

/*=====================================================================*/
/*============ SET DATE ============*/
const date = document.getElementById("date");
// innerText or innerHTML or textContent
date.innerHTML = new Date().getFullYear();
/*=====================================================================*/





/*=====================================================================*/
/*============ CLOSE LINKS ============*/
// SELECTING 3 THINGS, THE TOGGLE, LINKSCONTAINER, AND THE LINKS
const navigationToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container'); // this is the div that all the links sit in.
const links = document.querySelector('.links'); // the ul

navigationToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links"); //static
    const containerHeight = linksContainer.getBoundingClientRect().height//gives 0
    const linksHeight = links.getBoundingClientRect().height;//gives 200
    
    // if the container height is zero, then i would like to dynammically add height to it using the linksHeight
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;//inline styles
    }
    else{
        linksContainer.style.height = 0;
    }
});
/*=====================================================================*/





/*=====================================================================*/
// GETTING THE NAVBAR AND BACK-TO-TOP-LINK
const navigationBar = document.getElementById('nav');
const scrollToToplink = document.querySelector('.top-link');
const scrollToBottomlink = document.querySelector('.bottom-link');
/*============ FIXED NAVBAR ============*/
window.addEventListener("scroll", ()=>{
    // RECORDS HOW FAR THE DOCUMENT HAS BEEN SCROLLED VERTICALLY
    const scrollHeight = window.pageYOffset;
    // GETTING THE HEIGHT/SIZE OF THE ELEMENT IN RELATION TO THE VIEWPORT 
    const navigationBarHeight = navigationBar.getBoundingClientRect().height;
    //SETTING UP CONDITIONAL TO CHECK 
    // IF THE SCROLLHEIGHT GETS BIGGER THAN THE HEIGHT OF THE NAVIGATIONBAR, THEN WE ADD THE CLASS OF THE FIXED NAVIGATION BAR TO THE NAVIGATION BAR
    if(scrollHeight > navigationBarHeight){
        navigationBar.classList.add("fixed-nav");
    }
    else{
        navigationBar.classList.remove("fixed-nav");
    }

    //CONDITIONAL FOR SCROLLTO TOP LINKS
    // IT CHECKS IF THE SCROLL HEIGHT HAS EXCEEDED 550PX,
    // THEN MAKE THE SCROLLTO TOP LINK VISIBLE
    if(scrollHeight > 500){
        scrollToToplink.classList.add("show-link");
    }
    else{
        scrollToToplink.classList.remove("show-link");
    }
    // MAKING THE  SCROLLTO BOTTOM LINK VISIBLE IF SCROLLHEIGHT IS LESS THAN 550
    if(scrollHeight < 500){
        scrollToBottomlink.classList.add("show-link");
    }
    else{
        scrollToBottomlink.classList.remove("show-link");
    }
})
/*=====================================================================*/





/*=====================================================================*/
/*============ SMOOTH SCROLL ============*/
// SELECT LINKS 
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        // preventing the default behaviour that occurs as result of a click on any element that contains the class scroll-link
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navigationBarHeight = navigationBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navigationBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navigationBarHeight;
        console.log(position, navigationBarHeight, containerHeight)
        if(!fixedNav){
            position = position - navigationBarHeight;
        }
        if (navigationBarHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        });
        linksContainer.style.height = 0;
    })
});
/*=====================================================================*/


