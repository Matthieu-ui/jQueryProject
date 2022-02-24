let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("time").innerHTML = today;