function showImage(img){
    const shadow = document.createElement("div");
    shadow.setAttribute("class", "shadow");
    shadow.setAttribute("id", "shadow");
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src=`img/${img}`;
    const close = document.createElement("a");
    close.setAttribute("id", "close");
    close.href="#";
    close.innerHTML="&times;"

    shadow.appendChild(image);
    shadow.appendChild(close);
    document.body.appendChild(shadow);
}
const fotos = document.getElementById("fotos");
fotos.getElementsByTagName("img")[0].onclick=()=>{
    alert(fotos.getElementsByTagName("img")[0].src);
    let url = fotos.getElementsByTagName("img")[0].src.split("/"); 
    console.log(url);
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[1].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[1].src.split("/"); 
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[2].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[2].src.split("/"); 
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[3].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[3].src.split("/"); 
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[4].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[4].src.split("/"); 
    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[5].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[5].src.split("/"); 
    showImage(url[url.length-1]);
}