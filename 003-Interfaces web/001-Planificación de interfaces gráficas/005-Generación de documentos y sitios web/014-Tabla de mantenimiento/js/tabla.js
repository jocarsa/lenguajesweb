window.onload = function(){
    // Tablas de la base de datos
    fetch("api/tablas.json")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        const contenedor = document.getElementById("iconos")
        for(let i = 0;i<data.length;i++){
            const elemento = document.createElement("img")
            elemento.setAttribute("src","img/"+data[i].icono+".svg")
            contenedor.appendChild(elemento)
            elemento.onclick = function(){
                window.location = "tabla.html"
            }
        } 
    })
    
    
}


