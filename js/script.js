let hour = document.getElementById('hr');
let minute = document.getElementById('mn');
let second = document.getElementById('sc');
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hrPosition = (h * 360/12) + (m * (360/60)/12) + 90;
    let mnPosition = (m * 360/60) + (s * (360/60)/60)+ 90;
    let scPosition = s * 360/60 +90;

    // hour.style.transform = "rotate(" + hrPosition + "deg)";
    // minute.style.transform = "rotate(" + mnPosition + "deg)";
    // second.style.transform = "rotate(" + scPosition + "deg)";
    hour.style.transform=`rotate(${hrPosition}deg)`;
    minute.style.transform=`rotate(${mnPosition}deg)`;
    second.style.transform=`rotate(${scPosition}deg)`;
},1000);