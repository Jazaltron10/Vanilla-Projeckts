//Selecting Elements From the HTML page
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event 
form.addEventListener('submit', addItem);
// Delete event 
itemList.addEventListener('click', removeItem);
// Filter event 
filter.addEventListener('keyup', filterItems)


// Add Item Function
function addItem(e){
    e.preventDefault();

    // Get input value
    var newInput = document.getElementById("InputBox").value;

    // Create new li element 
    var list = document.createElement('li');
    // Add existing ClassName to new li element  
    list.className = "item-list";
    // Create text node with input value and append to new li
    list.appendChild(document.createTextNode(newInput));
    
    

    // Create Delete button element
    var DeleteBtn = document.createElement('button');

    // Add existing classes to delete button
    DeleteBtn.className = "X delete";

    // Append text node
    DeleteBtn.appendChild(document.createTextNode("X"));
    // Append DeleteBtn to list
    list.appendChild(DeleteBtn);

    // Adding newly created input to the list
    itemList.appendChild(list);
}


// Remove Item Function 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        console.log(`item deleted`)
    }
}// blue wednesday long walk short dock(ft dillan witherow )



// Filter Item Function 
function filterItems(e){
    // Get filter text and convert to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text)

    // Get list
    var items = itemList.getElementsByTagName('li');
    // converting HTML collections to a javascript array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 ){
                item.style.display = 'block';
                item.style.display = 'flex';
                item.style.justifyContent = 'space between';
        }
        else{
            item.style.display = 'none';
        }
    })
}