let opcao = document.querySelectorAll(".opcao"),
    imagemNoticiaPrincipal = document.querySelectorAll(".imagem-noticia-principal"),
    tituloDescricao = document.querySelectorAll(".titulo-descricao"),
    noticiaRelacionada = document.querySelectorAll(".relacionado"),
    mudaParaDireita = document.querySelector(".direito"),
    mudaParaEsquerda = document.querySelector(".esquerdo"),
    indice = 0;


// dispara a alteração de slides
mudaParaDireita.addEventListener("click", movDir);
mudaParaEsquerda.addEventListener("click", movEsq);
opcao[0].addEventListener("click", () => { trocaIndice(0) });
opcao[1].addEventListener("click", () => { trocaIndice(1) });
opcao[2].addEventListener("click", () => { trocaIndice(2) });

function ocultarNoticia() {
    opcao[indice].setAttribute("class", "opcao");
    imagemNoticiaPrincipal[indice].setAttribute("class", "imagem-noticia-principal");
    tituloDescricao[indice].setAttribute("class", "titulo-descricao");
    noticiaRelacionada[indice].setAttribute("class", "relacionado");
}

function exibirNoticia() {
    opcao[indice].setAttribute("class", "opcao ativa");
    imagemNoticiaPrincipal[indice].setAttribute("class", "imagem-noticia-principal selecionado");
    tituloDescricao[indice].setAttribute("class", "titulo-descricao selecionado");
    noticiaRelacionada[indice].setAttribute("class", "relacionado exiba");
}

function movDir() {
     ocultarNoticia();
    if (indice < 2) {
        indice += 1;
        exibirNoticia();
    } else {
        ocultarNoticia();
        indice = 0;
        exibirNoticia();
    }
}

function movEsq() {
    ocultarNoticia();
    if (indice <= 0) {
        indice = 2;
        exibirNoticia();
    } else {
        indice -= 1;
        exibirNoticia();
    }
}

function trocaIndice(n) {
    ocultarNoticia();
    opcao[n].setAttribute("class", "opcao ativa");
    imagemNoticiaPrincipal[n].setAttribute("class", "imagem-noticia-principal selecionado");
    tituloDescricao[n].setAttribute("class", "titulo-descricao selecionado");
    noticiaRelacionada[n].setAttribute("class", "relacionado exiba");
    indice = n;
}
