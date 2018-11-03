const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function run_clock() {
    let date = new Date();
    console.log(date);

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log('hour:' + hour, 'minute:' + minute, 'second:' + second);

    let hr_position = (hour * (360 / 12)) + (minute * (360 / 60) / 12);
    let min_position = (minute * (360 / 60)) + (second * (360 / 60) / 60);
    let sec_position = (second * (360 / 60));

    HOURHAND.style.transform = "rotate(" + hr_position + "deg)";
    MINUTEHAND.style.transform = "rotate(" + min_position + "deg)";
    SECONDHAND.style.transform = "rotate(" + sec_position + "deg)";
}

let clock_interval = setInterval(run_clock, 1000);