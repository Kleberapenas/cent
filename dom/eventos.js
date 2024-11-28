
// Seleciona os elementos.
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

// Adiciona um evento de passar o mouse e aparecer.
botao.addEventListener("mouseover", () => {
   caixa.classList.replace("oculto", "visivel")
});

// Adiciona um evento de tirar o mouse desaparece.
botao.addEventListener("mouseout", () => {
    caixa.classList.replace("visivel", "oculto")
});