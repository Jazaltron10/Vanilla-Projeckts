// ********* SELECT ITEMS *********
const alert = document.querySelector(".alert");
const form = document.querySelector(".foundation");
const grocery = document.getElementById("grocery");
const submitBtn = document.getElementById("submit");

const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clr-btn");

// EDIT OPTION
let editElement;
let editFlag = false;
let editID = "";


// ********* EVENT LISTENERS *********
//submit form
form.addEventListener("submit",addItem)
// clear items
clearBtn.addEventListener("click", clearItems)
// load items
window.addEventListener("DOMContentLoaded", setupItems);
// ********* FUNCTIONS *********
function addItem(e){
    e.preventDefault();
    const value = grocery.value
    //returns the current time in ms 
    const id = new Date().getTime().toString();
    // console.log(id)

    // each and every item in javascript would be either true or false
    // if(value) -> console.log(value is true) prints true 
    // if(!value) -> console.log(value is false) prints false 
    
    
    // Now we set up conditionals to test the input    
    // 1. if the value passed in is not an empty string and i am not editing (i.e editFlag === false)checking if the editflag is not true
    // if(value !== '' && editFlag === false){
    if(value && !editFlag){
        createListItem(id, value);
        // display alert 
        displayAlert("item added to the list", "success");
        // show container
        groceryContainer.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault(); 
    }
    // 2. if the value passed in is not an empty string and i am editing (i.e editFlag === true)
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }
    // 3. if the value passed is an empty string 
    else{
        displayAlert("please enter value", "danger");
    }
}



// display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    // remove alert using setTimeout function
    setTimeout(function (){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    },2000)
}

//clear items
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    // if the amount of items in the grocery list is greater than 0
    // i want you to remove each and every one of those items from the grocerylist.
    if (items.length > 0){
        items.forEach(function(item){
            groceryList.removeChild(item);
        })
    }

    groceryContainer.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem('groceryList');
}

// delete function {has a click event listener attached to it}
function deleteItem(e){
    // e.currentTarget, targets the deleteBtn
    const element = e.currentTarget.parentElement.parentElement;
    //  targets the data-id made with createAttribute method and set with
    //  setAttributeNode method
    const id = element.dataset.id;
    groceryList.removeChild(element); 
    if(groceryList.children.length === 0 ){
        groceryContainer.classList.remove("show-container");
    }
    displayAlert("item removed" , "danger");
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);

}
// edit function {has a click event listener attached to it}
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}


// set back to default
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit"
}

// ********* LOCAL STORAGE *********
function addToLocalStorage(id, value){
    const grocery = {id, value} // or {id:id, value:value} es6 syntax
    // setting up a ternary operator
    // if there is an item assign it to the variable items,
    // else if there is no list, then set it up(i.e variable) as an empty array
    // we use this localStorage.getItem("listOfGroceries") to check if the item exist or not 
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem("groceryList", JSON.stringify(items));
    // console.log(items);
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();//grabbing what we already have in local storage here
    // using a filter method to remove all id that does not match the one you are searching for.
    items = items.filter(function(item){//filtering through what we already have in local storage
        // if the item.id which is one of the properties of an item in the local storage does not match the id that is being passed into be deleted then just return those items and leave the one that matches.
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem("groceryList", JSON.stringify(items));
}
function editLocalStorage(id, value){
    let items = getLocalStorage();
    // now we are just trying to update the value of an item in local storage, so therefore we'll use map
    items = items.map(function(item){
        // if the item.id matches to the id that's being passed in as a result of clicking the edit button, then the new value of the item.id would be the value thats passed in as  result of clicking edit button and submitting a new value.
        if (item.id === id){
            // if the item id matches passed in id, then set old value to new value
            item.value = value;
        }
        // return any item id that does not match passed in id.
        return item;
    })
    localStorage.setItem("groceryList", JSON.stringify(items));
}
function getLocalStorage(){
    return localStorage.getItem("groceryList")? JSON.parse(localStorage.getItem("groceryList")) : [];
}
// localStorage API
// setItem
/**
 * 
 * localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
 * / 
// getItem
/**
 * const oranges = JSON.parse(localStorage.getItem("orange"));
 * console.log(oranges);
 */ 
// removeItem
/**
 * localStorage.removeItem("orange")
 * / 
// save as srings

//********* SETUP ITEMS *********/
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value);
        })
        groceryContainer.classList.add("show-container"); 
    }
}
function createListItem(id, value){
    const element = document.createElement("article");
        // add class
        element.classList.add("grocery-item");
        // add id
        const attr = document.createAttribute('data-id'); 
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="singleGroceryItem">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <img src="./assets/edit (1).png" alt="" class="btn">
            </button>
            <button type="button" class="delete-btn">
                <img src="./assets/delete.png" alt="" class="btn">
            </button>
        </div>`;

        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");

        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);

        //append child
        groceryList.appendChild(element);
}