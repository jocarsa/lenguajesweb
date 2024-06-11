window.onload = function(){
    const contenedor = document.getElementById('principal')
    const tarjeta = document.getElementById('templatetarjeta').content;
    fetch("api/tarjetas.json")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        for(let i = 0;i<data.length;i++){
            const nuevatarjeta = document.importNode(tarjeta, true); 
            nuevatarjeta.querySelector('h4').textContent = data[i].titulo;
            nuevatarjeta.querySelector('p').textContent = data[i].texto;
            nuevatarjeta.querySelector('h5').textContent = data[i].valor;
            contenedor.appendChild(nuevatarjeta);
        }
        
        
    })
}