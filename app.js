let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let sc = date.getSeconds();
    hh %= 12;
    let sRot = sc*6;
    let mRot = 6*mm + (1/10)*sc;
    let hRot = hh*30+mm/2;
    hour.style.transform = `rotate(${hRot}deg)`;
    min.style.transform = `rotate(${mRot}deg)`;

    sec.style.transform = `rotate(${sRot}deg)`;
}
setInterval(displayTime, 1000);