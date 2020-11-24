function iniciar(){
    maximo=100;
    medio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    barra=document.getElementById('barra');
    progreso=document.getElementById('progreso');

    reproducir.addEventListener('click', presionar, false);

    barra.addEventListener('click', mover, false);
}

function presionar(){
    if(!medio.paused && !medio.ended){
        medio.pause();
        reproducir.innerHTML='Play';
        window.clearInterval(bucle);
    }else{
        medio.play();
        reproducir.innerHTML='Pause';
        bucle=setInterval(estado, 1000);
    }
}

function estado(){
    if(!medio.ended){
        let total=parseInt(medio.currentTime*maximo/medio.duration);
        progreso.style.width=total+'%';
    }else{
        progreso.style.width='0px';
        reproducir.innerHTML='Play';
        window.clearInterval(bucle);
    }
}

function mover(e){
    if(!medio.paused && !medio.ended){
        let ratonX=e.pageX-barra.offsetLeft;
        let nuevoTiempo=ratonX*medio.duration/maximo;
        medio.currentTime=nuevoTiempo;
        progreso.style.width=`${ratonX}%`;
    }
}

window.addEventListener('load', iniciar, false);