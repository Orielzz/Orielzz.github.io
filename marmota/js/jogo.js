const btnTeste = document.querySelector("#start")
const click = document.querySelectorAll(".mole")
const score = document.querySelector('.score');



const removeMarmota = numBuraco => {

    // console.log(numBuraco)
    // const buraco = document.querySelector(`.hole${numBuraco}`)
    numBuraco.classList.remove("up")
}
const sorteiaBuraco = () => {

    const numBuraco = Math.trunc(Math.random() * 6) + 1
    return document.querySelector(`.hole${numBuraco}`)

}

const pontuar = () =>{
    
    const valor = parseInt(score.textContent) + 1;
    score.innerHTML = valor;

}
let jogoexecutando = false;
const executando = () =>{
    setInterval(function() {
        jogoexecutando = true;
        score.textContent = 0;
        
    },10000)
    jogoexecutando = false
}
let clicado;

const startGame = () =>{
    
    executando();
    const numBuraco = sorteiaBuraco(); 
    numBuraco.classList.add("up")
    const tempoExposto = Math.trunc((Math.random())+500)
  
    setTimeout(function() {
        removeMarmota(numBuraco)
        clicado = true;
    }, tempoExposto)
    
    setTimeout(function() {
        if(!jogoexecutando){
        startGame();}else{alert('cabo')}
        
    }, tempoExposto)

}
   
const defineTempo = (min,max) => Math.round((Math.random()*(max-min))+min)


click.forEach(click =>
click.addEventListener("click",function (e) {
    clicado= e.target;
    const tempoExposto = Math.trunc((Math.random())+500)
    if(clicado == e.target){
    pontuar();
    }
    
}))


