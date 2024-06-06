window.onload = function(){
    const contenedor = document.getElementById('principal')
    const tarjeta = document.getElementById('templatetarjeta').content;
    for(let i = 0;i<15;i++){
        const nuevatarjeta = document.importNode(tarjeta, true);
        contenedor.appendChild(nuevatarjeta);
    }
}