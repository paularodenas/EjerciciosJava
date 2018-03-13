
$("document").ready(function(){
    $("#anuncio"). text ("¡Click! Para cambiar de color")
    .width(600)
    .height(600)
    .hide()
    .fadeIn(3000)
});


let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]
let color = colores [Math.floor(Math.random()*colores.length)];


$("#anuncio").on ("click", function(){
   $("#anuncio").css ("background-color", color = colores [Math.floor(Math.random()*colores.length)])
});