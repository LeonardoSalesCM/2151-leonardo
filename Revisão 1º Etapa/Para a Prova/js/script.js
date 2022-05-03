function calc() {
    
    //entrada

    cor = document.form.cor.value;
    //processamento
   
    if (cor == "preto") 
    { 
        valor = 5000;
    }
    else if (cor == "prata") {
        valor = 3500;
    }
    else {
        valor = 2000;
    }

    //saída
    document.getElementById("total").value = valor 

    document.getElementById("aerofoleo").checked = false
    document.getElementById("brake").checked = false
    document.getElementById("rack").checked = false
    document.getElementById("spoilertras").checked = false
    document.getElementById("spoilerdia").checked = false
}

function acessorios(valor, marcado) {
    
    //entrada
    total = document.getElementById("total").value;
    

    //processamento
    if(marcado) {
        total = Number(total) + Number(valor)
    }
    else {
        total = Number(total) - Number(valor)
    }
    
    //saída
    document.getElementById("total").value = total;
}

function trocarTema() {
    //entrada
    
    tema = document.getElementById("modelo").value;
    
    //processamento
    if(tema == "mod1") {
        titulo = "PORSCHE PANAMERA"
        newFundo = "imgs/porsche.jpg"
        newFoto = "imgs/porsche (2).png"
    }
    else if(tema == "mod2") {
        titulo = "AUDI R8"
        newFundo = "imgs/audi.jpg"
        newFoto = "imgs/audi (2).png"
    }
    else if(tema == "mod3") {
        titulo = "BMW I8"
        newFundo = "imgs/bmw.jpg"
        newFoto = "imgs/BMW.png"
    }
    else {
        titulo = "CONCESSIONÁRIA DE CARROS";
        newFundo = "    "
        newFoto = ""
    }

    //saída
    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById("foto").src = newFoto;
}