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