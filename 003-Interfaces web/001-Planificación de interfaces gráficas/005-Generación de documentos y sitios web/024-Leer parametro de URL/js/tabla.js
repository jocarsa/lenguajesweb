window.onload = function(){
    cargarTablas()
    // Tabla dinámica
    fetch("api/"+tomarParametro("tabla")+".json")
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
        document.getElementById("fondomodal").classList.add("animAparece")
        let modal = document.getElementById("modal")
        fetch("api/clientes.json")
        .then(response => {
            return response.json(); 
        })
        .then(data => {
            let formulario = document.createElement("form")
            modal.appendChild(formulario)
            for(var clave in data[0]){
                let etiqueta = document.createElement("label")
                etiqueta.setAttribute("for",clave)
                etiqueta.innerHTML = clave
                formulario.appendChild(etiqueta)
                let campo = document.createElement("input")
                campo.setAttribute("name",clave)
                campo.setAttribute("id",clave)
                campo.setAttribute("placeholder","Introduce: "+clave)
                formulario.appendChild(campo)
            }
            let enviar = document.createElement("input")
            enviar.style.background = "indigo"
            enviar.style.color = "white"
            enviar.setAttribute("type","submit")
            formulario.appendChild(enviar)
        })
    }
}


