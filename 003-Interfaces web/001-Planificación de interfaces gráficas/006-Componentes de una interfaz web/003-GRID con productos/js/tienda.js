window.onload = function(){
    const contenedor = document.querySelector('main')
    const producto = document.getElementById('producto').content;
    for(let i = 0;i<20;i++){
        let clon = document.importNode(producto, true); 
        contenedor.appendChild(clon);
    }
}