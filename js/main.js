$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('#returnBtn').click(function() {
    location.href="index.html";
});

$('#classBtn').click(function() {
    location.href="class.html";
});

function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}

var clase = ["Mago", "Guerrero", "Bardo", "Paladin"];
clase.push("Arquero")
document.getElementById("titulo").innerHTML = "Tienes " + clase.length + " clases para elegir"+ ": " + clase.map((el) => el);
