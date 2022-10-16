//Theme Change Functions
const btn = document.querySelector('.themebutton');
const mainBody = document.querySelector('body');
let themeLight = btn.innerText;
if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'Light'){
        themeFunction();
    } else {
        localStorage.setItem('theme', themeLight);
    }
    btn.addEventListener('click', themeFunction);
    
    function themeFunction(){
        if (themeLight === 'Dark'){
            themeLight = 'Light';
            btn.innerText = 'Light';
        } else {
            themeLight = 'Dark';
            btn.innerText = 'Dark';
        }
        localStorage.setItem('theme', themeLight);
        document.body.classList.toggle('dark');
    }
}

//Date and Time Functions
const timeDisplay = document.querySelector('.date-time');
const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day_names = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

timeDisplay.addEventListener('submit', function(event){
    const timeDisplayData = new FormData(timeDisplay);
    const myDate = new Date();
    let text = "";
    for(const entry of timeDisplayData){
        if(entry[1] === 'date') {
            const day = day_names[myDate.getDay()];
            const month = month_names[myDate.getMonth()];
            const date = myDate.getDate();
            const year = myDate.getFullYear();
            text = [day, month, date, year].join(" ");
        } else {
            let dayPeriod = 'AM';
            let hour = myDate.getHours();
            const minute = myDate.getMinutes();
            const second = myDate.getSeconds();
            if (hour === 0) {
                hour = 12;
            } else if (hour === 12) {
                dayPeriod = 'PM';
            } else if (hour > 12) {
                hour = hour % 12;
                dayPeriod = 'PM';
            }
            text = [hour, minute, second].join(':') + " " + dayPeriod;
        }
    }
    console.log(text);
    const timeText = document.querySelector('#time-text');
    if (timeText) {
        timeText.innerText = text;
    } else {
        const newTimeText = document.createElement('p');
        newTimeText.innerText = text;
        newTimeText.setAttribute('id', 'time-text');
        timeDisplay.appendChild(newTimeText);
    }
    event.preventDefault();
});









