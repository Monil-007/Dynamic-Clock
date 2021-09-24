const a=new Date();

const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hrs;
let min;
let sec;
let dt;
let mnt;
let yr;
let cal;

hrs=a.getHours();
min=a.getMinutes();
sec=a.getSeconds();
dt=a.getDay();
mnt=a.getMonth();
yr=a.getFullYear();

setInterval(()=>{
    time=hrs+":"+min+":"+sec;
    cal=weekDays[dt]+","+months[mnt]+","+yr;
    document.getElementById("tim").innerHTML=time+" on "+cal;
},10);