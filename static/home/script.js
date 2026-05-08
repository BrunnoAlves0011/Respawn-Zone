function openView(box) {
    const card = box.closest(".card-jogo"); // card clicado
    const isActive = card.classList.contains("ativo");

    // Fecha todos os outros
    document.querySelectorAll(".card-jogo.ativo").forEach(c => {
        c.classList.remove("ativo");
        c.querySelector(".ver-mais").textContent = "Ver mais";
    });

    // Se já estava ativo, só fecha e não reabre
    if (isActive) {
        box.textContent = "Ver mais";
        return;
    }

    // Ativa o card clicado
    card.classList.add("ativo");
    box.textContent = "Ver menos";
}
function comprarJogo(botao) {
    const card = botao.closest(".card-jogo");

    const nome = card.querySelector("h2").textContent;
    const preco = card.querySelector(".preco").textContent;
    const descricao = card.querySelector(".sinopse").textContent;
    const imagem = card.querySelector("img").src;

    console.log(nome);
    console.log(preco);
    console.log(descricao);
    console.log(imagem);

    localStorage.setItem("nomeJogo", nome);
    localStorage.setItem("precoJogo", preco);
    localStorage.setItem("descricaoJogo", descricao);
    localStorage.setItem("imagemJogo", imagem);

    window.location.href = "jogos.html";
}