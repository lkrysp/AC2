const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const botaoSomar = document.getElementById("botaoSomar");
const botaoSubtrair = document.getElementById("botaoSubtrair");
const botaoDividir = document.getElementById("botaoDividir");
const botaoMultiplicar = document.getElementById("botaoMultiplicar");
const resultadoParagrafo = document.getElementById("resultado");

function calcular(operacao) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite dois números válidos.");
        return;
    }

    let resultado;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Impossível dividir por zero!");
                return;
            }
            resultado = num1 / num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    resultadoParagrafo.textContent = `Resultado: ${resultado}`;
}

botaoSomar.addEventListener("click", function() {
    calcular("+");
});

botaoSubtrair.addEventListener("click", function() {
    calcular("-");
});

botaoDividir.addEventListener("click", function() {
    calcular("/");
});

botaoMultiplicar.addEventListener("click", function() {
    calcular("*");
});
