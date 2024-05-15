const linksMenu = document.querySelectorAll("#menuLateral a");
const sectionsConteudo = document.querySelectorAll("#conteudoPrincipal section");

linksMenu.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que o link abra outra página

        const idSecao = this.getAttribute("href"); // Obtém o ID da seção

        sectionsConteudo.forEach(section => {
            section.classList.remove("ativa"); // Remove a classe "ativa" de todas as seções
        });

        document.querySelector(idSecao).classList.add("ativa"); // Adiciona a classe "ativa" à seção clicada
    });
});
