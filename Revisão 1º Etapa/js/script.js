
function calc() {
    //entrada
    horario = document.form.horario.value;

    

    //processamento
    if(horario == "manhã" ) {
        valor = 1500;
    }
    else if(horario == "tarde") {
        valor = 1800;
    }
    else {
        valor = 2300;
    }

    //saída
    document.getElementById("total").value = valor;

    document.getElementById("mesa").checked = false;
     document.getElementById("personagens").checked = false;
     document.getElementById("atracoes").checked = false;
     document.getElementById("maquiagem").checked = false;
     document.getElementById("brinde").checked = false;
}

function opcionais(valor, checked) {
    //entrada
    total = document.getElementById("total").value;

    //processamento
    if(checked) {
        total = Number(total) + Number(valor)
    }
    else {
        total = Number(total) - Number(valor)
    }

    //saída
    document.getElementById('total').value = total;
}

function trocaTema() {

    //entrada
    tema = document.getElementById("tema").value

    //processamento
    if (tema == "mario") {
        titulo = "Super Mário Brós";
        newFundo = "imagens/mario.jpg";
        newFoto = "img/mario.png";

    } 
    else if (tema == "princesa") { 
        titulo = "Princesa Sofia";
        newFundo = "imagens/sofia.jpg";
        newFoto = "img/sofia.png";
    }
    else if (tema == "pjmasks") { 
        titulo = "PJ Masks";
        newFundo = "imagens/pjmasks.jpg";
        newFoto = "imagens/pjmasks.png";
    }
    else {
        titulo = "Tema da Festa";
        newFundo = "    "
        newFoto = ""
    }
    
    //saída
    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById("foto").src = newFoto;
   
}