const score = document.querySelector('.score');
let game = document.querySelector('.game');
let start= document.querySelector('.start');
let gameArea = document.querySelector('.gameArea');



const keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowRight:false,
    ArrowLeft:false

};



const startGame = ()=>{
    start.classList.add('hide');
}

const startRun=(e)=>{
    e.preventDefault();
    console.log('start')
}

const stopRun=(e)=>{
   e.preventDefault();
    console.log('stop')
}
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
start.addEventListener('click', startGame)