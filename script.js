
function clocks(){
const now= new Date(); //creates a Date object containing the current date & time.

//Extract time

const hours=now.getHours().toString().padStart(2,'0');
const minutes=now.getMinutes().toString().padStart(2,'0');
const seconds=now.getSeconds().toString().padStart(2,'0');
const ampm=hours>=12?'PM':'AM';
//Extract date
const days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months=['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
const dayName=days[now.getDay()];
const dates=now.getDate();
const month=months[now.getMonth()];
const year=now.getFullYear();

//  Update  in dom
document.getElementById("time").textContent=`${hours}:${minutes}:${seconds} ${ampm}`;
document.getElementById("date").textContent=`${dayName}, ${month}, ${dates}, ${year}`   
}
// Run continuously
setInterval(clocks,1000)
clocks()