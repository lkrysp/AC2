const textoEntrada = document.getElementById("textoEntrada");
const botaoContar = document.getElementById("botaoContar");
const resultadoContagem = document.getElementById("resultadoContagem");

botaoContar.addEventListener("click", function() {
    const texto = textoEntrada.value.trim();

    if (!texto) {
        alert("Por favor, digite um texto.");
        return;
    }

    const palavras = texto.split(/\s+/); // Separa as palavras por espaços em branco
    const numeroPalavras = palavras.length;

    resultadoContagem.textContent = `Número de palavras: ${numeroPalavras}`;
});
