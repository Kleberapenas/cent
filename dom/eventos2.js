
const mensagem = document.getElementById("mensagem");
const mudaMensagem = document.getElementById("mudaMensagem");
const reiniciar = document.getElementById("reiniciar")

mudaMensagem.addEventListener("click", () => {
    mensagem.innerText += "Mensagem alterada com sucesso!";
});

reiniciar.addEventListener("click", () => {
    mensagem.innerText = ""
});

inicio.addEventListener("click", () => {
    mensagem.innerText = "Clique no botão para mudar esta mensagem!"
})

const toggleMode = document.getElementById("toggleMode");

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});