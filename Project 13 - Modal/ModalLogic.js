const openmodal = document.querySelector('.modalbtn')
const closemodal = document.querySelector('.closebtn')
const homebox = document.querySelector('.homebox')
const modalbox = document.querySelector('.modalbox')

openmodal.addEventListener('click', function(){
    homebox.style.display = 'none'
    modalbox.style.display = 'flex'
})
closemodal.addEventListener('click', function(){
    homebox.style.display = 'flex'
    modalbox.style.display = 'none'
})
window.addEventListener('click', function(e){
    if(e.target == modalbox){
        homebox.style.display = 'flex'
        modalbox.style.display = 'none'
    }
})