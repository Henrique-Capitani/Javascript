function verifica(){
 
    var nota = document.getElementsByTagName("input")[0].value;
    var resultado="Aprovado";
    if(nota >= 7){
        resultado;
    }
    else if(nota <= 4){
        resultado = "Reprovado";
    }
    else{
        resultado = "Recuperação";
    }

    document.getElementsByTagName("label")[1].innerHTML=resultado;
}