function esquerda(){
    if(pos <=1){
        pos = 1;
    }
    else{
        pos--;
    }
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";
}

function direita(){
    if(pos >=5){
        pos = 5;
    }
    else{
        pos++;
    }
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";
    
}




