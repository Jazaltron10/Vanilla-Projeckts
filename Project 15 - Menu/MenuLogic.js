const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
const FoodList = document.querySelector(".FoodList");
const container = document.querySelector(".btnContainer");

/*This Loads all the items from the menu array once the DOM has loaded */
window.addEventListener("DOMContentLoaded", ()=>{
    displayMenuItems(menu); // takes the menu array as an argument
    displayMenuButtons();   // takes no arguments
});



const displayMenuItems = (menuItems) =>{
        /*Used let because the current values can easily be overwritten */
        let displayMenu = menuItems.map((item)=>{
            //console.log(item)-> this logs all the objects in the menu array
            /*Instead of hardcoding all the menu items we are using the template literal string to inject our html template for all the menu items and also we are changing some texts with ${}, for each item or object in the menu array. This makes it dynamic 

            And lastly we are returning the value of the new array and saving it in the variable display menu 

            */
            return `<article class="food">
            <div class="pic">
                <img src=${item.img} alt=${item.title}>
                <div class="yum">
                    <a href="#">Yummy</a>
                </div>
            </div>
            
            <div class="desc">
                
                <div class="heading">
                    <div class="name">${item.title}</div>
                    <div class="price"> ${item.price} </div>
                </div>
                <p class="words">
                        ${item.desc}
                </p>
            
            </div>
        </article>`
        })
        /*We use the join method to convert the displaymenu into a giant string of html template,
        this helps us avoid using comma's to separate each item in the array*/
        displayMenu = displayMenu.join("");
        //we assign our template object to the innerhtml of the parent element
        FoodList.innerHTML = displayMenu;
}


const displayMenuButtons =()=>{
    const categories = menu.reduce((myarr, item)=>{
        /*When using reduce you always have to return the accumulator*/
        if(!myarr.includes(item.category)){
            myarr.push(item.category);
        }
        /*Code Breakdown
        if the array that i am returning does not include the category property of the current object in the iteration of the menu array, then add it to the array being returned, else if for the next iteration that item.category property is already in my array then just skip it and return my arr array at the end of the iteration.
        */
        return myarr;  
    },['all']);
    const categoryBtns = categories.map((category)=>{
        return `<button class="btns" type="button" 
        data-id=${category}>${category}</button>`
    }).join("");
    // Adding the buttons to the DOM through InnerHTML
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".btns");
    /*
    if you add something dynamically you can only access it once 
    it has been added already to the DOM not before, thus this section below. 
    */
    /*This section deals with the filter buttons */
    filterBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem)=>{
            if (menuItem.category === category){
                return menuItem;
            }
        });
        if (category === "all"){
            displayMenuItems(menu);
        }else{
            displayMenuItems(menuCategory);
        }
    });
});
}