const img = "https://image.tmdb.org/t/p/w500";

const estrutura = document.getElementById("estrutura");

/*
Para carregar os dados da API do themoviedb, iremos usar o comando
fetch(buscar) para buscar os dados dos filmes populares. este comando
tem dois elmentos atrelados, são eles:

then -> Então: quando a execução do comando fecth funciuona
catch -> Captura de erro: Quando a execução do comando fetch falha

fecth é uma promise, ou seja isso pode dar certo ou pode se cumprir como não.
*/


fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1&api_key=81c9b7dcfb4863877cf6285829e9223b")
.then((response)=>response.json())
.then((dados)=>{

    dados.results.map((filme)=>{
        let cartaz = document.createElement("div");
        cartaz.setAttribute("class","cartaz");
        
        let poster = document.createElement("img");
        poster.src=img+filme.poster_path;
        cartaz.appendChild(poster);
        
        let votos = document.createElement("div");
        votos.setAttribute("class","votos")
        votos.innerHTML = filme.vote_average;

        let titulo = document.createElement("h2");
        titulo.innerHTML = filme.title;

        let lancamento = document.createElement("p");
        lancamento.setAttribute("class","lancamento");
        lancamento.innerHTML=filme.release_date;

        cartaz.appendChild(poster);
        cartaz.appendChild(votos);
        cartaz.appendChild(titulo);
        cartaz.appendChild(lancamento);

        estrutura.appendChild(cartaz);
    })

})
.catch ((erro)=>console.error(erro));







// const cidades = ["Leme", "Guarulhos", "São Paulo", "Mauá", "Suzano"];

// let p = 1;

// cidades.forEach(exibir);

// function exibir(itens){
//     console.log(`${p}ª${itens}`)
//     p++;
// }

// cidades.forEach((itens)=>{
//     console.log(`${p}ª${itens}`)
//     p++;
// })

// cidades.map((itens)=>{
//     console.log(`${p}ª${itens}`)
//     p++;
// })