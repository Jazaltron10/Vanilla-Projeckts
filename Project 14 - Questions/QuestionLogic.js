const plus1 = document.querySelector('.btn-1')
const card1 = document.querySelector('.hidden1')

const plus2 = document.querySelector('.btn-2')
const card2 = document.querySelector('.hidden2')

const plus3 = document.querySelector('.btn-3')
const card3 = document.querySelector('.hidden3')


plus1.addEventListener('click', ()=>{
    card1.classList.toggle('show-hidden')
    if(card1.classList.contains('show-hidden')){
        plus1.textContent = '-'
    }
    else{
        plus1.textContent = '+'
    }
})
plus2.addEventListener('click', ()=>{
    card2.classList.toggle('show-hidden')
    if(card2.classList.contains('show-hidden')){
        plus2.textContent = '-'
    }
    else{
        plus2.textContent = '+'
    }
})
plus3.addEventListener('click', ()=>{
    card3.classList.toggle('show-hidden')
    if(card3.classList.contains('show-hidden')){
        plus3.textContent = '-'
    }
    else{
        plus3.textContent = '+'
    }
})

// plus.forEach((btn)=>{
    
    //     btn.addEventListener('click', ()=>{
//         // const styles = e.currentTarget.classList;
//         card.classList.toggle('show-hidden')
//         if(card.classList.contains('show-hidden')){
//             plus.textContent = '-'
//         }
//         else{
//             plus.textContent = '+'
//         }
//     })
// })