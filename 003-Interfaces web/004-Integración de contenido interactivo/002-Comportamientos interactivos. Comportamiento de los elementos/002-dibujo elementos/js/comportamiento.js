
window.onload = function(){
    var lienzo = document.getElementById("lienzo");
    var contexto = lienzo.getContext("2d");
    lienzo.onmousemove = function(e){
        contexto.fillRect(e.offsetX,e.offsetY,2,2)
    }
    
}