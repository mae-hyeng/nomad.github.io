const clock = document.querySelector(".clock");

function timer()
{
    const now = new Date();
    const hour = String(Math.floor(now.getHours())).padStart(2, "0");
    const minute = String(Math.floor(now.getMinutes())).padStart(2, "0");
    const second = String(Math.floor(now.getSeconds())).padStart(2, "0");

    clock.innerHTML = `${hour}h ${minute}m ${second}s`
}
setInterval(timer, 1000);