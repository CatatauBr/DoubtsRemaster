const menu = document.querySelector(".hamburguer-menu");
const fecharMenu = document.querySelector(".menu-aberto");
const cabecalho = document.querySelector(".menu-principal"); //obtendo o header
const alterarRolagem = document.getElementsByTagName("body");
let abrir = false;


menu.addEventListener("click", () => { mudarFormaMenu(abrir)});
fecharMenu.menu.addEventListener("click", () => { mudarFormaMenu(abrir)});

function mudarFormaMenu(estado){
    if( abrir === true){
        menu.setAttribute("class", "hamburguer-menu menu-aberto");
        cabecalho.setAttribute("class", "menu-principal expandircabecalho"); // adicionando nova classe no header
        abrir = false;
        alterarRolagem[0].style.overflow = "hidden";
    } else {
        menu.setAttribute("class","hamburguer-menu");
        cabecalho.setAttribute("class", "menu-principal");
        abrir = true;
        alterarRolagem[0].style.overflow = "auto";
    }
}