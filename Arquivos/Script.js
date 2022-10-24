const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Adiciona o Zero quando a hora, os minutos e os segundos estiverem menores do que 10
    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    // O background de fundo mudando de cor de acordo com o avanço do tempo
    if(min > 01 && min < 15 ) {
        document.body.style.background-color;rgb(0, 4, 255);
    } else if (min > 15 && min < 20 ) {
        document.body.style.background-color;rgb(0, 25, 255);
    } else if (min > 20 && min < 25) {
        document.body.style.background-color;rgb(0, 40, 255);
    } else if (min > 25 && min < 30) {
        document.body.style.background-color;rgb(0, 59, 255);
    } else if (min > 30 && min < 35) {
        document.body.style.background-color;rgb(0, 67, 255);
    } else if (min > 35 && min < 40) {
        document.body.style.background-color;rgb(0, 84, 255);
    } else if (min > 40 && min < 45) {
        document.body.style.background-color;rgb(0, 89, 255);
    } else if (min > 45 && min < 50) {
        document.body.style.background-color;rgb(0, 93, 255);
    } else if (min > 50 && min < 60) {
        document.body.style.background-color;rgb(0, 99, 255);
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})