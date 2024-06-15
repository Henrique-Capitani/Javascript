const paleta = document.getElementById("paleta");
const painel = document.getElementById("painel");

let rs="<table>";
for(let lin = 1 ; lin <= 10 ; lin++){
    rs+="<tr>";
    for(let col = 1 ; col <= 60; col++){
        let r = parseInt(Math.random()*255)
        let g = parseInt(Math.random()*255)
        let b = parseInt(Math.random()*255)
        rs+="<td onclick=mudarCor("+r+","+g+","+b+") style=background-color:rgb("+r+","+g+","+b+")>  </td>";
    }
    rs+="</tr>";
}
rs+="</table>";
paleta.innerHTML = rs;

function mudarCor(red,green,blue){
    console.log(red,green,blue);
    painel.style.backgroundColor=`rgb(${red},${green},${blue})`;
}
