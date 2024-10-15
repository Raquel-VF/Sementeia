const sementeia = document.querySelector('.sementeia');
const planta = document.querySelector('.planta');

const jump = () => {
    sementeia.classList.add('jump');

    setTimeout(() => {
        sementeia.classList.remove('jump');
    }, 500);
 }

const loop = setInterval(() => {
    const plantaPosition = planta.offsetLeft;
    const sementeiaPosition = window.getComputedStyle(planta).bottom;
    
    console.log(sementeiaPosition);

    if (plantaPosition <= 75){
        planta.style.animation = 'none';
        planta.style.left = `${plantaPosition}px`
    }

}, 10);

document.addEventListener('keydown', jump);     