const inputTarefa = document.getElementById("tarefaNova");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener("click", function() {
    const textoTarefa = inputTarefa.value.trim(); // Remove espaços em branco

    if (textoTarefa) {
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = textoTarefa;

        // Criar checkbox para marcar como feito (opcional)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        novaTarefa.appendChild(checkbox); // Adiciona o checkbox à tarefa

        novaTarefa.addEventListener("click", function() {
            this.classList.toggle("feito"); // Alterna entre "feito" e normal
        });

        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = ""; // Limpa o campo de entrada
    }
});
