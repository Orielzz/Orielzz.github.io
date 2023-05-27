if(self.fetch){
    const url = 'https://rafaelescalfoni.github.io/desenv_web/receitas.json'
 

    // fetch(url).then(response => response.json()).then(data => console.log(data)).catch(erro => console('deu zebra',erro))
fetch(url)
    .then(response => response.json())
    .then(function(lista){
        loadReceita(lista);
    })
}else{

}

const loadReceita = (lista) =>{
    const divresp = document.querySelector('#result')
    lista.forEach(element => {divresp.innerHTML += `<h1>${element.nome}</h1>`}
        
    );

}