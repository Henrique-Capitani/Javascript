//Referenciar a div camada
const camada =  document.querySelector("#camada"); 
setTimeout(()=>{
    camada.style.opacity="0";
    camada.style.top="-200px";
    camada.style.height="00vh"
    camada.style.width="00vw"
}, 5000)