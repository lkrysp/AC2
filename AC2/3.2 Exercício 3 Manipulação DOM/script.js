const botaoContar = document.getElementById("botaoContar");
const contadorNumero = document.getElementById("contadorNumero");

let count = 0; // Contador inicializado com 0

botaoContar.addEventListener("click", function() {
    count++; // Incrementa o contador
    contadorNumero.textContent = count; // Atualiza o valor na tela
});
