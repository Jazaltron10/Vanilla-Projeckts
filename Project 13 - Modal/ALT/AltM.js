//select the modal-btn, modal-overlay, close-btn
        //listen for click events on modal-btn and close-btn
        //when user clicks modal-btn add .OPEN-MODAL to modal-overlay
        //when user clicks close-btn remove .OPEN-MODAL from modal-overlay

        // getting elements from the DOM    
        const openbtn = document.querySelector('.modal-btn')
        const modal = document.querySelector('.modal-overlay')
        const closebtn = document.querySelector('.close-btn')

        // adding event listeners to the button elements
        // This just adds a css class to make the modal visible 
        openbtn.addEventListener('click', ()=>{
            modal.classList.add('open-modal')
        })

        // This removes the css class from the modal-overlay
        closebtn.addEventListener('click', () =>{
            modal.classList.remove('open-modal')
        })

        // This section removes the modal when a there's a click in the window
        window.addEventListener('click', (e) => {
            if(e.target == modal){
                modal.classList.remove('open-modal')
            }
        })