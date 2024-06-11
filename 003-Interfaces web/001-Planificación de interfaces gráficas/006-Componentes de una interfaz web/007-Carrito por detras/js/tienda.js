window.onload = function(){
    var total = 0;
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
            clon.querySelector('button').setAttribute("precio",data[i].precio)
            clon.querySelector('button').setAttribute("producto",data[i].nombre)
            clon.querySelector('button').onclick = function(){
                document.querySelector("aside").classList.add("animaparece")
                console.log("añado el producto al carrito") 
                total += data[i].precio*1
                document.querySelector("#total").innerHTML = total
                document.querySelector("#contieneproductos").innerHTML += '<div class="nombreproducto">'+data[i].nombre+'</div>'
                document.querySelector("#contieneproductos").innerHTML += '<div class="precioproducto">'+data[i].precio+'</div>'
            }
            contenedor.appendChild(clon);
        }
    })
}