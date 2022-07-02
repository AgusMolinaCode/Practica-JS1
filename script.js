let redBtn = document.getElementById("red")
let blackBtn = document.getElementById("black")
let stockBtn = document.getElementById("stock")
let whiteBtn = document.getElementById("white")
let imagen = document.getElementById("imagen")

redBtn.onclick = function(){
    imagen.style.backgroundImage = "url(IMAGENES/X003-Y015.jpg)";
}

blackBtn.onclick = function(){
    imagen.style.backgroundImage = "url(IMAGENES/X001-Y015.jpg)";
}

stockBtn.onclick = function(){
    imagen.style.backgroundImage = "url(IMAGENES/X004-Y015.jpg)";
}

whiteBtn.onclick = function(){
    imagen.style.backgroundImage = "url(IMAGENES/X002-Y015.jpg)";
}