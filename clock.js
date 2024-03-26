setInterval(() => {

    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hrs.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
    min.style.transform = `rotate(${6 * minutes}deg)`;
    sec.style.transform = `rotate(${6 * seconds}deg)`;

}),1000;