// Get modal element 
var modal  = document.getElementById('simplemodal');
// Get open modal button
var modalBtn  = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openmodal);

//Listen for close click
closeBtn.addEventListener('click', closemodal);

//Listen for outside click
window.addEventListener('click',clickOutside); 
    
//Function to Open modal
function openmodal(){
    modal.style.display = 'block';        
}
        
//Function to close modal
function closemodal(){
    modal.style.display = 'none';        
}
    
//Function to close if outside click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    