const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
})

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hour = hr % 12;
    if(hour === 0)
        hour = 12;

    hour = hour<10 ? `0${hour}` : hour;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;
    

    timeformat.innerHTML = hr < 12 ? "AM" : "PM";

    time.innerHTML = `${hour} : ${mins} : ${secs}`;
}