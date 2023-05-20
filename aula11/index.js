//criar objeto http request

const xhttp = new XMLHttpRequest();

const url =  'https://rafaelescalfoni.github.io/desenv_web/receitas.json'


//definir url que peretendemos usar
const criaReceitas = lista =>{
    const cardapioHTML = document.querySelector('.cardapio')
    lista.forEach(element =>{
        criaPrato(element,cardapioHTML)
        criaIngredientes(element,cardapioHTML);
        criaPreparo(element,cardapioHTML)
    });
   
}

const criaIngredientes = (prato,elementoHTML) =>{
    const ulHTML = document.createElement('ul');



    prato.ingredientes.forEach(element => {
        const pTN = document.createTextNode(element)
        const liHTML = document.createElement('li');
        const pHTML = document.createElement('p');
        pHTML.appendChild(pTN);
        liHTML.appendChild(pHTML);
     
      ulHTML.appendChild(liHTML)
    
        
    });
    
    elementoHTML.appendChild(ulHTML)



}

const criaPreparo = (prato,elementoHTML) =>{
    const ulHTML = document.createElement('ol');



    prato.preparo.forEach(element => {
        const pTN = document.createTextNode(element)
        const liHTML = document.createElement('li');
        const pHTML = document.createElement('p');
        pHTML.appendChild(pTN);
        liHTML.appendChild(pHTML);
     
      ulHTML.appendChild(liHTML)
    
        
    });
    
    elementoHTML.appendChild(ulHTML)



}



const criaPrato = (prato,elementoHTML) =>{
    const divHTML = document.createElement("div");
    const tituloHTML = document.createElement("h1");
    const pHTML = document.createElement("p");
    const imgHTML = document.createElement("img");

    divHTML.classList.add("prato");
    
    const tituloTN = document.createTextNode(prato.nome);
    const descTN = document.createTextNode(prato.descricao);

    tituloHTML.appendChild(tituloTN);
    pHTML.appendChild(descTN);
    imgHTML.src = prato.foto;
    imgHTML.alt = `Foto do Prato: ${prato.nome}`;


    divHTML.appendChild(tituloHTML);
    divHTML.appendChild(pHTML);
    divHTML.appendChild(imgHTML);

    elementoHTML.appendChild(divHTML);
    
}

//quando o objeto mudar de estado oara
xhttp.onreadystatechange = function(){
    if (this.readyState ==4 && this.status ==200) {

        criaReceitas(JSON.parse(this.responseText));
    }
}

xhttp.open('GET',url);

xhttp.send();
//estad= 4 e status= 200
    //programar uma acao

 

//enviar abrir o objeto

//enviar o objeto