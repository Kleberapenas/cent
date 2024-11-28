
const form = document.getElementById("cadastro");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    status.innerText = "ENVIADO COM SUCESSO!";
});


const toggleMode = document.getElementById("toggleMode");

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
