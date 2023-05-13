const bt01 = document.querySelector('#bt01');


const pesquisartermo = (termo,lista) =>{
    for(let i=0;i<lista.length;i++){
     let objeto = lista[i];
        if(objeto.termo == termo)
            return i;
    }
    return -1;
}

const exibetermos = lista => {
    const tbodyelem = document.querySelector("#result1")
    tbodyelem.innerHTML = "";
    for(let i = 0 ; i< lista.length;i++){
        let objeto = lista[i];
        let termo = objeto.termo;
        let numvezes = objeto.ocorrencia;
        tbodyelem.innerHTML += `<tr>
                                    <td>${termo} </td>
                                    <td>${numvezes}</td>
                                </tr>`        

    }
}
const qtdLetras = Lista => {
    let array = Lista.toLowerCase().split(" ")
    let num = 0;
    for(let i = 0;i<array.length;i++){
        num += array[i].length;
    }
  
    return num;
    
}
         

const contarpalavras = texto =>{
    const listadepalavras = texto.toLowerCase().split(" ")
    
    let resultado = [];
    for(let i=0;i<listadepalavras.length;i++){
        let objeto = {};

       let indice = pesquisartermo(listadepalavras[i],resultado)
        if(indice>=0){
            resultado[indice].ocorrencia++;
        }
        else{
        objeto.ocorrencia=1;
        objeto.termo = listadepalavras[i];
        resultado.push(objeto);
        }
    }
    exibetermos(resultado);
}
const qtdPalavras = texto =>{
    abc = texto.toLowerCase().split(" ")
    console.log(abc);
    return abc.length;
}
let endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1254,
    bairro: 'centro',
    cidade: 'SÃO PAULO',
    uf: "SP" 

}

const listenderec = [{
        rua: 'Rua dos Pinheiros',
        numero: 1254,
        bairro: 'centro',
        cidade: 'SÃO PAULO',
        uf: "SP",
        interesses: ['web30','bigdata','IA'] 
    },{
        rua: 'Rua dos Pinheiros',
        numero: 0000,
        bairro: 'centro',
        cidade: 'SÃO PAULO',
        uf: "SP",
         interesses: ['web30','java','vicinim']
    },{
        rua: 'Rua dos Pinheiros',
        numero: 8547,
        bairro: 'centro',
        cidade: 'SÃO PAULO',
        uf: "SP",
        interesses: ['web30','python','casa de aposta']  
    }]

const funcexec2 = lista => {
   
    for(let i = 0;i<lista.length;i++ ){
    let objeto=lista[i];
    document.querySelector("#resp2").innerHTML += `<br>O usuario mora em ${objeto.cidade}/${objeto.uf},no bairro ${objeto.bairro},na rua "${objeto.rua}"com n° ${objeto.numero}<br>`
    document.querySelector("#resp2").innerHTML += `INTERESSES: <br> `;
    for(let i = 0 ; i<objeto.interesses.length;i++){
        document.querySelector("#resp2").innerHTML += `<br> ${objeto.interesses[i]} <br> `;

    }
    }
}




const contaVogal = lista =>{
    let contagem = 0;
     let teste = lista.toLowerCase().split("")
    for(let i = 0 ; i<lista.length;i++){
        if(teste[i]=='o')
            contagem++;
            
        else if(teste[i]=='a')
               contagem++;
            
        else if(teste[i]=='e')
               contagem++;
            
        else if(teste[i]=='i')
            contagem++;
                     
        else if(teste[i]=='u')
            contagem++;
    }
    return contagem;
}


bt01.addEventListener("click",function(){
    const texto = document.querySelector("#ex01").value;
    contarpalavras(texto);
    let numLetras = qtdLetras(texto);
    document.querySelector("#totalletras").innerHTML = numLetras;
    document.querySelector("#totalvogais").innerHTML= contaVogal(texto);
    document.querySelector("#totalpalavras").innerHTML = qtdPalavras(texto);
    funcexec2(listenderec);
    console.log(listenderec)
   
})