var contenedor = document.getElementById("blog");
// En primer lugar, borro todo lo que había
contenedor.innerHTML = "";
let plantilla = document.querySelector("template");

fetch("json/blog.json")
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        for(let i = 0;i<data.length;i++){
            let clon = plantilla.content.cloneNode(true);
            document.querySelector("template").content.querySelector("h4").innerHTML = data[i].titulo
            document.querySelector("template").content.querySelector("p").innerHTML = data[i].texto
            document.querySelector("template").content.querySelector("time").innerHTML = data[i].fecha
            document.querySelector("template").content.querySelector("img").setAttribute("src","imagenes/"+data[i].imagen)
            contenedor.appendChild(clon);
            
            
        }
    })