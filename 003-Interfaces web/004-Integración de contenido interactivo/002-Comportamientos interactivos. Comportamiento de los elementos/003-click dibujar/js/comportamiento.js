
window.onload = function(){
    var pulsado = false;
    var lienzo = document.getElementById("lienzo");
    var contexto = lienzo.getContext("2d");
    lienzo.onmousemove = function(e){
        if(pulsado == true){
            contexto.fillRect(e.offsetX,e.offsetY,2,2)
        }
        
    }
    document.body.onmousedown = function(){
        pulsado = true
    }
    document.body.onmouseup = function(){
        pulsado = false
    }
}