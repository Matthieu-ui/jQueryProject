var time = new Date();
console.log(
    time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
);

document.getElementById('time').innerHTML = time;