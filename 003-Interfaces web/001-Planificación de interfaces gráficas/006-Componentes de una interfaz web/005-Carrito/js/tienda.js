window.onload = function(){
    const contenedor = document.querySelector('main')
    const producto = document.getElementById('producto').content;
    fetch("api/productos.json")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        for(let i = 0;i<data.length;i++){
            let clon = document.importNode(producto, true); 
            clon.querySelector('h4').textContent = data[i].nombre;
            clon.querySelector('.descripcion').textContent = data[i].descripcion;
            clon.querySelector('.precio').textContent = data[i].precio;
            clon.querySelector('img').setAttribute("src","img/"+data[i].imagen)
            contenedor.appendChild(clon);
        }
    })
}