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

    // Condição a cada 4 horas o plano de fundo muda de cor
    if(hr >= 18 && hr <= 21) {
        document.body.style.backgroundColor = "#fffc8f";
    } else if (hr > 21 && hr < 01 ) {
        document.body.style.backgroundColor = "#ffc875";
    } else if (hr > 01 && hr < 04) {
        document.body.style.backgroundColor = "#ff7464";
    } else if (hr > 04 && hr < 08) {
        document.body.style.backgroundColor = "#ffcb00";
    } else if (hr > 08 && hr < 12) {
        document.body.style.backgroundColor = "#ff8700";
    } else if (hr > 12 && hr < 16) {
        document.body.style.backgroundColor = "#05bedf";
    } else if (hr > 16 && hr < 18) {
        document.body.style.backgroundColor = "#088eff";
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})