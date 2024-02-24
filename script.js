//creating a digital clock
//1. function to keep on updating the clock
function updateTheClock(){
    let now = new Date(); // now is sub-object to the object Date
    
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let seconds = now.getSeconds().toString().padStart(2,'0');
    //getting the values of the hours minutes and the seconds, converting them to strings, padstart is used to have 2 digits for each of the values

    let formattedTime = `${hours}:${minutes}:${seconds}`;//formatting the clock in the hrs:min:secs format
    document.getElementById('time').textContent = formattedTime;
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
}

setInterval(updateTheClock, 1000);//setting the clock function to be called every 1000 miliseconds
//update the clock
updateTheClock();