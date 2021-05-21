const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minEl = document.getElementById('min');
const segEl = document.getElementById('seg');




function Contador() {

    const FinDeAño = new Date('2021,12,31').getTime();
    const TiempoActual = new Date().getTime();

    const dif = FinDeAño - TiempoActual;


    const Calc_dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    const Calc_horas = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Calc_min = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    const Calc_seg = Math.floor((dif % (1000 * 60)) / 1000);


    diasEl.innerHTML = Calc_dias;
    horasEl.innerHTML = Calc_horas;
    minEl.innerHTML = Ordenar(Calc_min);
    segEl.innerHTML = Ordenar(Calc_seg);
}

function Ordenar(tiempo) {
    return tiempo < 10 ? ("0" + tiempo) : tiempo;
}




Contador();

setInterval(Contador, 1000);
