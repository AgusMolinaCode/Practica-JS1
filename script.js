let redBtn = document.getElementById("red")
let blackBtn = document.getElementById("black")
let stockBtn = document.getElementById("stock")
let whiteBtn = document.getElementById("white")
let imgchange = document.getElementById("imagen")

redBtn.onclick = function(){
    imgchange.src = "IMAGENES/X003-Y015.jpg";
}

blackBtn.onclick = function(){
    imgchange.src = "IMAGENES/X001-Y015.jpg";
}

stockBtn.onclick = function(){
    imgchange.src = "IMAGENES/X004-Y015.jpg";
}

whiteBtn.onclick = function(){
    imgchange.src = "IMAGENES/X002-Y015.jpg";
}

