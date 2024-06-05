
window.onload = function(){
    var pulsado = false;
    var lienzo = document.getElementById("lienzo");
    var contexto = lienzo.getContext("2d");
    var grosor = 2;
    var operacion = "dibujar"
    contexto.fillStyle = "black"
    lienzo.onmousemove = function(e){
        if(pulsado == true){
            if(operacion == "dibujar"){
                contexto.fillRect(e.offsetX,e.offsetY,grosor,grosor)
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
    document.getElementById("dibujar").onclick = function(){
        operacion = "dibujar"
    }
    document.getElementById("borrar").onclick = function(){
        operacion = "borrar"
    }
}