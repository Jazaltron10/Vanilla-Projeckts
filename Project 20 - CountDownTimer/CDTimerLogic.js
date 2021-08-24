const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".countdown");
const items = document.querySelectorAll(".numval");

// To make sure that there is always at least ten days left
let tempDate = new Date();
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()


// year, month, date, hours, minutes, seconds
// let futureDate = new Date(2021, 7, 24, 14, 28, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0);
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]

const date  = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} am `

// Getting Future time in milliseconds
const futureTime = futureDate.getTime();

const getRemaindingTime =()=>{
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1min = 60s
    // 1hr  = 6omins
    // 1d  = 24hrs


    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);


    // set values arrays
    const values = [days, hours, minutes, seconds];

    const format = (item) =>{
        if(item < 10){
            return (item = `0${item}`);
        }
        return item;
    }
    items.forEach((item, index)=>{
        item.innerHTML = format(values[index])
    })
    // if current time is greater than the future time or deadline time 
    if (t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h1 class="expired">sorry, this giveaway has expired</h1>`
    }
}
//countdown using a setInterval method to call this function every single second
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();
