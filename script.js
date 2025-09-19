const conteudo = document.querySelectorAll(".conteudo")
const traco = document.querySelectorAll(".traco")

let timer;
let ativoConteudo = 0;
let ativoTraco = 0;

function mudar_pagina(i) {
    conteudo[ativoConteudo].classList.remove("ativo");

    ativoConteudo += i;

    if (ativoConteudo >= conteudo.length) {
        ativoConteudo = 0;
    } else if (ativoConteudo < 0) {
        ativoConteudo = conteudo.length - 1;
    }

    conteudo[ativoConteudo].classList.add("ativo");
}

function mudar_traco(i) {
    traco[ativoTraco].classList.remove("ativo");

    ativoTraco += i;

    if (ativoTraco >= traco.length) {
        ativoTraco = 0;
    } else if (ativoTraco < 0) {
        ativoTraco = traco.length - 1;
    }

    traco[ativoTraco].classList.add("ativo");
}

clearInterval(timer)
timer = setInterval(() => {
    mudar_pagina(1)
    mudar_traco(1)
}, 10000);

let list = []

function feedback_list_save() {
    let feedback = document.getElementById("feedback_input").value.trim()
    if (feedback !== "") {
        list.push(feedback)
        document.getElementById("feedback_input").value = ""
    }
}
