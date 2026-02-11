const badge = document.getElementById("avatar");
const descricaoTexto = document.querySelector(".descricao");
const body = document.querySelector("body");
const card = document.querySelector(".card");

//  Esconder / mostrar descrição
function hideDescription() {
    descricaoTexto.classList.toggle("hideDescription");
}
//  Modo escuro
function modoescuro() {
    body.classList.toggle("darkTheme");
    card.classList.toggle("darkTheme");
}
