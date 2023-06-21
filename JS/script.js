const Mario = document.querySelector('.Mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    Mario.classList.add('jump')

    setTimeout(() => {
        Mario.classList.remove('jump')
    }, 500)
};



const loop = setInterval(() => {
    
    const pipeposition = pipe.offsetLeft;
const Marioposition = +window.getComputedStyle(Mario).bottom.replace('px','');


   if (pipeposition <= 120 && pipeposition> 0 && Marioposition<80){

    pipe.style.animation ='none';
    pipe.style.left = `${pipeposition}px`

    Mario.style.animation ='none';
    Mario.style.bottom = `${pipeposition}px`

    Mario.src ='./img/game-over.png';
    Mario.style.width ='75px';
    Mario.style.marginleft ='50px';

clearInterval(loop);
   }
}, 10);



document.addEventListener('keydown', jump);