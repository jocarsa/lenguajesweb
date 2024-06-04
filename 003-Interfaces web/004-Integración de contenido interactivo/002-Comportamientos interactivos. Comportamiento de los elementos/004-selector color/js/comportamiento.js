
window.onload = function(){
    var pulsado = false;
    var lienzo = document.getElementById("lienzo");
    var contexto = lienzo.getContext("2d");
    contexto.fillStyle = "black"
    lienzo.onmousemove = function(e){
        if(pulsado == true){
            contexto.fillRect(e.offsetX,e.offsetY,2,2)
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
}