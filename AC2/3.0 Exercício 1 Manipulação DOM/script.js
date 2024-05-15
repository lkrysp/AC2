const cores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]; // Array de cores
const botao = document.getElementById("botao");
const caixa = document.getElementById("caixa");

botao.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corAleatoria = cores[indiceAleatorio];
    caixa.style.backgroundColor = corAleatoria;
});
