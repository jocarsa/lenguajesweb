
window.onload = function(){
    var pulsado = false;
    var lienzo = document.getElementById("lienzo");
    var contexto = lienzo.getContext("2d");
    var grosor = 2;
    var operacion = "dibujar"
    contexto.fillStyle = "black"
    var forma = "cuadrado"
    var dibujo = document.getElementById("dibujo")
    lienzo.width = dibujo.offsetWidth
    lienzo.height = dibujo.offsetHeight
    console.log(dibujo.offsetWidth)
    lienzo.onmousemove = function(e){
        if(pulsado == true){
            if(operacion == "dibujar"){
                if(forma == "cuadrado"){
                    contexto.fillRect(e.offsetX,e.offsetY,grosor,grosor)
                }else if(forma == "circulo"){
                    contexto.beginPath()
                    contexto.arc(e.offsetX,e.offsetY,grosor,0,Math.PI*2)
                    contexto.fill()
                }
                
            }else if(operacion == "borrar"){
                contexto.clearRect(e.offsetX,e.offsetY,grosor,grosor)
            }
            
        }
        
    }
    document.getElementById("selectorcolor").onchange = function(){
        contexto.fillStyle = this.value
    }
    document.body.onmousedown = function(){
        pulsado = true
    }
    document.body.onmouseup = function(){
        pulsado = false
    }
    document.getElementById("grosor1").onclick = function(){
        grosor = this.value
    }
    document.getElementById("grosor2").onclick = function(){
        grosor = this.value
    }
    document.getElementById("grosor3").onclick = function(){
        grosor = this.value
    }
    document.getElementById("grosor").onchange = function(){
        grosor = this.value
    }
    document.getElementById("dibujar").onclick = function(){
        operacion = "dibujar"
    }
    document.getElementById("borrar").onclick = function(){
        operacion = "borrar"
    }
    document.getElementById("cuadrado").onclick = function(){
        forma = "cuadrado"
    }
    document.getElementById("circulo").onclick = function(){
        forma = "circulo"
    }
}