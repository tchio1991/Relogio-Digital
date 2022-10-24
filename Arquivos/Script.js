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
    if(min > 00 && min < 10 ) {
        document.body.style.backgroundColor = "#ffbb64";
    } else if (min > 10 && min < 20) {
        document.body.style.backgroundColor = "#ff7d51";
    } else if (min > 20 && min < 30) {
        document.body.style.backgroundColor = "#d94935";
    } else if (min > 30 && min < 35) {
        document.body.style.backgroundColor = "#a22f28";
    } else if (min > 35 && min < 40) {
        document.body.style.backgroundColor = "#801f24";
    } else if (min > 40 && min < 45) {
        document.body.style.backgroundColor = "#ffff6e";
    } else if (min > 45 && min < 50) {
        document.body.style.backgroundColor = "#ffcf38";
    } else if (min > 50 && min < 55) {
        document.body.style.backgroundColor = "#ff892b";
    } else if (min > 55 && min < 60) {
        document.body.style.backgroundColor = "#edd35b";
    } 

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})