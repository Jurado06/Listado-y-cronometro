const cronometro = document.getElementById('cronometro');
const botoniniciopausa= document.getElementById('boton-inicio-pausa');
const botonreiniciar = document.getElementById('boton-reiniciar');

let [hora, minutos, segundos ] = [0, 0, 0];

let intervalodetiempo;
let estadocronometro = 'pausado';

function actualizarcronometro() {
    segundos++;

if(segundos / 60 === 1){
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
        minutos = 0;
        hora++;

    }
}

const segundosconformato = asignarformato(segundos);
const minutosconformato = asiganarformato(minutos);
const horaconformato = asiganarformato(hora);

cronometro.innerText = `${horaconformato} :${minutosconformato}:${segundosconformato}`
};

function asiganarformato(unidaddetiempo) {
    return unidaddetiempo < 10? '0' + unidaddetiempo : unidaddetiempo;
};

botoniniciopausa.addEventListener('click', function () {
    if (estadocronometro === 'pausado') {
        intervalodetiempo = window.setInterval(actualizarcronometro, 1000);
        botoniniciopausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botoniniciopausa.classList.remove('iniciar');
        botoniniciopausa.classList.add('pausar');
        estadocronometro = 'andando';
    } else{
       window.clearInterval(intervalodetiempo); 
       botoniniciopausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
       botoniniciopausa.classList.remove('pausar');
       botoniniciopausa.classList.add('iniciar');
       estadocronometro = 'pausado';
    }
} );

botonreiniciar.addEventListener('click', function () {
    window.clearInterval(intervalodetiempo);
    hora = 0;
    minutos = 0;
    segundos = 0;
    
    cronometro.innerText ='00:00:00';
    botoniniciopausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botoniniciopausa.classList.remove('pausar');
    botoniniciopausa.classList.add('iniciar');
    estadocronometro = 'pausado';


});