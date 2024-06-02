var contenedor = document.getElementById("blog");
// En primer lugar, borro todo lo que había
contenedor.innerHTML = "";

fetch("json/blog.json")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        for(let i = 0;i<data.length;i++){
            let articulo = document.createElement("article")
            let imagen = document.createElement("img")
            let titulo = document.createElement("h4")
            let fecha = document.createElement("time")
            let parrafo = document.createElement("p")
            titulo.innerHTML = data[i].titulo;
            titulo.style.textAlign = "left";
            parrafo.innerHTML = data[i].texto;
            fecha.innerHTML = data[i].fecha;
            imagen.setAttribute("src","imagenes/"+data[i].imagen)
            articulo.appendChild(imagen);
            articulo.appendChild(titulo);
            articulo.appendChild(fecha);
            articulo.appendChild(parrafo);
            contenedor.appendChild(articulo);
        }
    })