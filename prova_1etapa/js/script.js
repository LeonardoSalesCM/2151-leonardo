

function somacor() {
    //ent
    cor = document.formulario.cor.value;
    
    //proc
    if(cor == "preto") {
        preco = 50000
    }
    else if (cor == "prata") {
        preco = 30000
    }
    else {
        preco = 20000
    }

    //saida
    document.getElementById("preco").value = preco

    
}

function acessorios(valor, selecionado) {
    preco = document.getElementById("preco").value;

    if(selecionado) {
        preco = Number(preco) + Number(valor)
    }
    else {
        preco = Number(preco) - Number(valor)
    }

   document.getElementById("preco").value = preco
}

function fundocarro() {
    modelo = document.getElementById("modelo").value;

    if(modelo == "carro1") {
        tit = "PORSCHE PANAMERA"
        fundo = "imgs/porsche.jpg"
    }
    else if(modelo == "carro2") {
        tit = "AUDI R8"
        fundo = "imgs/audi.jpg"
    }
    else if(modelo == "carro3") {
        tit = "BMW A8"
        fundo = "imgs/bmw.jpg"
    }
    else {
        tit = "CONCESSIONÁRIA DE CARROS"
        fundo = "    "
    }

    document.getElementById("tit").value = tit;
    document.body.style.backgroundImage = "url(" + fundo + ")";


}

/* false = document.getElementById("aerofoleo").checked;
    false = document.getElementById("brake").checked;
    false = document.getElementById("rack").checked;
    false = document.getElementById("spoilertras").checked;
    false = document.getElementById("spoilerdia").checked;*/

    function validar() {
        // pegando o valor do nome pelos names
        let nome = document.getElementById("nome");
        let sobrenome = document.getElementById("sobrenome");
        let email = document.getElementById("email");
        let endereco = document.getElementById("endereco");
        let cidade = document.getElementById("cidade");
        let estado = document.getElementById("estado");
        let modelo = document.getElementById("modelo");

        if (nome.value == "") {
            alert("Nome não informado");

            nome.focus();
            return;
          }
          if (sobrenome.value == "") {
            alert("Sobrenome não informado");
            sobrenome.focus();
            return;
          }
          if (email.value == "") {
            alert("E-mail não informado");
            email.focus();
            return;
          }
          if (endereco.value == "") {
            alert("Endereço não informado");
            endereco.focus();
            return;
          }
          if (cidade.value == "selecione") {
            alert("Cidade não informada");
            cidade.focus();
            return;
          }
          if (estado.value == "") {
            alert("Estado não informado");
            estado.focus();
            return;
          }
          if (modelo.value == "") {
            alert("Modelo não informado");
            modelo.focus();
            return;
          }
          alert("Obrigado pela preferência!");
          
        }
    