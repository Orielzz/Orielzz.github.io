const bt1 = document.getElementById("Exerc1");
const bt2 = document.getElementById("Exerc2");
const bt3 = document.getElementById("Exerc3");
const bt4 = document.getElementById("Exerc4");
const lernum = (seletor) => {
    const x = document.querySelector(seletor);
    return parseFloat(x.value) || 0;

}
const soma = (x,y) => {
    return x+y;
}
const apagipt = (seletor) =>{
    document.querySelector(seletor).value= "";
}
const ehmaior = (x,y) =>{
   return (x>y)?  x :  y;
}
const ehmenor = (x,y) =>{
    return (x<y)?  x :  y;
 }

const ehprimo = (x)=>{
    if(x<2)
    return false;

    let y = false;
    let j = 2;
    while(j<x){
        if(x%j == 0)
        y = true;
     j++

    }
    return !y;

}
const ehpar = (x) =>{
    if(x%2==0)
    return true;
    else
    return false;
}

const numentre =(x,y)=>{
    let i;
    let resultado = ""

    for(i=(ehmaior(x,y));i>ehmenor(x,y);i--){
       
     
        if (ehpar(i))
        resultado += " "+i.toString();
        exibe("#resp4",resultado)
        
    }
}
const exibe = (elemento,result) =>{
    document.querySelector(elemento).innerHTML = result;
}

bt1.addEventListener ("click" , function(){

   const w= lernum("#b01-01");
    const z = lernum("#c01-02");
   const  resultado = soma(w,z);
    exibe("#resp1",resultado)
   


    apagipt("#b01-01");
    apagipt("#c01-02");
   
  
})

bt2.addEventListener("click" , function(){

    const w= lernum("#b02-01");
     const z = lernum("#b02-02");
    const  resultado = ehmaior(w,z)
 exibe("resp2",resultado)
 
 
     apagipt("#b02-01");
     apagipt("#b02-02");
    
   
 })
 bt3.addEventListener("click" , function(){

    let w= lernum("#b03-01");
    const resultado = ehprimo(w)
     const paragrafo1 = document.getElementById("resp3")
     if(resultado==true)
        paragrafo1.innerHTML ="SIM"
        else
        paragrafo1.innerHTML ="NO"
 
 
     apagipt("#b02-01");
    
   
 })
 
bt4.addEventListener("click" , function(){

    const w= lernum("#b04-01");
     const z = lernum("#b04-02");
    numentre(w,z)
 
 
     apagipt("#b04-01");
     apagipt("#b04-02");
    
   
 })