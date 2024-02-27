let name = prompt("İsminiz nedir ?")
let nameDOM = document.querySelector("#myName")
nameDOM.innerHTML = name

function startTime () {
    let date= new Date();
    today = date.getDay();
    if (today = 1) {
        today = 'Pazartesi'
    }
    if (today = 2) {
        today = 'Sali' 
    }
    if(today = 3) {
        today = 'Carsamba' 
    }
    if(today = 4) {
        today = 'Persembe' 
    }
    if(today = 5) {
        today = 'Cuma' 
    }
    if(today = 6) {
        today = 'Cumartesi' 
    }
    if(today = 7) {
        today = 'Pazar' 
    }
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    let todayDOM = document.getElementById("myClock")
    todayDOM.innerHTML = `${hours} : ${minutes} : ${seconds}  ${today}`
    setTimeout(startTime, 1000)
}

startTime();