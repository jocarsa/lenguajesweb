var contenedor = document.getElementById("blog");
// En primer lugar, borro todo lo que había
contenedor.innerHTML = "";
let plantilla = document.querySelector("template");

fetch("json/blog.php")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        for(let i = 0;i<data.entradas.length;i++){
            
            let clon = plantilla.content.cloneNode(true);
            document.querySelector("template").content.querySelector("h4").innerHTML = data.entradas[i].titulo
            document.querySelector("template").content.querySelector("p").innerHTML = data.entradas[i].texto
            document.querySelector("template").content.querySelector("time").innerHTML = data.entradas[i].fecha
            document.querySelector("template").content.querySelector("img").setAttribute("src","imagenes/"+data.entradas[i].imagen)
            contenedor.appendChild(clon);
            
            
        }
    })