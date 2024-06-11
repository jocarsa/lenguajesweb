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
    // Tabla dinámica
    fetch("api/clientes.json")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        const contenedortabla = document.querySelector("table")
        // Vacia la tabla
        contenedortabla.innerHTML = "";
        // Primero las columnas
        let cabeza = document.createElement("thead")
        contenedortabla.appendChild(cabeza)
        let fila = document.createElement("tr")
        cabeza.appendChild(fila)
        for(var clave in data[0]){
            let columna = document.createElement("th")
            columna.innerHTML = clave
            fila.appendChild(columna)
        }
        let botones = document.createElement("th")
        fila.appendChild(botones)
        // Ahora el resto de elementos
        let cuerpo = document.createElement("tbody")
        contenedortabla.appendChild(cuerpo)
        for(let i = 0;i<data.length;i++){
            let nuevafila = document.createElement("tr")
            cuerpo.appendChild(nuevafila)
            for(var clave in data[i]){
                let celda = document.createElement("td")
                celda.innerHTML = data[i][clave]
                nuevafila.appendChild(celda)
            }
            let botones = document.createElement("td")
            nuevafila.appendChild(botones)
            let actualizar = document.createElement("img")
            actualizar.setAttribute("src","img/actualizar.svg")
            botones.appendChild(actualizar)
            let eliminar = document.createElement("img")
            eliminar.setAttribute("src","img/eliminar.svg")
            botones.appendChild(eliminar)
        }
        
    })
    document.getElementById("crear").onclick = function(){
        document.getElementById("fondomodal").style.display = "block"
    }
}


