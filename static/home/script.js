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

    const nome = card.querySelector("h2").innerText;

    // mantém o HTML do preço promocional
    const preco = card.querySelector(".preco").innerHTML;

    const descricao = card.querySelector(".sinopse").innerText;

    // pega exatamente o src original da imagem
    const imagem = card.querySelector("img").getAttribute("src");

    localStorage.setItem("nomeJogo", nome);
    localStorage.setItem("precoJogo", preco);
    localStorage.setItem("descricaoJogo", descricao);
    localStorage.setItem("imagemJogo", imagem);

    window.location.href = "jogos.html";
}
function ativarPesquisa() {
    const campoPesquisa = document.getElementById("placeholder");

    if (!campoPesquisa) return;

    const jogos = document.querySelectorAll(".card-jogo");

    campoPesquisa.addEventListener("input", function () {
        const texto = campoPesquisa.value.toLowerCase();

        jogos.forEach(function (jogo) {
            const nome = jogo.querySelector("h2").textContent.toLowerCase();

            if (nome.includes(texto)) {
                jogo.style.display = "flex";
            } else {
                jogo.style.display = "none";
            }
        });
    });
}

function irHome() {
    window.location.href = "home.html";
}
function redirecionarPesquisa() {
    if (!document.querySelector(".card-jogo")) {
        window.location.href = "home.html";
    }
}
function ativarRedirecionamentoPesquisa() {
    const input = document.getElementById("placeholder");
    const botao = document.querySelector(".search-box button");

    if (!input || !botao) return;

    // Se não estiver na home
    if (!document.querySelector(".card-jogo")) {

        input.addEventListener("click", function () {
            window.location.href = "home.html";
        });

        botao.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }
}function comprarBanner(botao) {

    const nome = botao.dataset.nome;
    const preco = botao.dataset.preco;
    const imagem = botao.dataset.img;
    const descricao = botao.dataset.desc;

    localStorage.setItem("nomeJogo", nome);
    localStorage.setItem("precoJogo", preco);
    localStorage.setItem("imagemJogo", imagem);
    localStorage.setItem("descricaoJogo", descricao);

    window.location.href = "jogos.html";
}
function mostrarTodos() {
esconderBanner();
    const jogos = document.querySelectorAll(".card-jogo");

    jogos.forEach(jogo => {
        jogo.style.display = "flex";
    });
}

function filtrarCategoria(categoria) {
esconderBanner();
    const jogos = document.querySelectorAll(".card-jogo");

    jogos.forEach(jogo => {

        if (jogo.dataset.categoria === categoria) {
            jogo.style.display = "flex";
        } else {
            jogo.style.display = "none";
        }

    });
}

function filtrarPlataforma(plataforma) {
esconderBanner();
    const jogos = document.querySelectorAll(".card-jogo");

    jogos.forEach(jogo => {

        if (jogo.dataset.plataforma === plataforma) {
            jogo.style.display = "flex";
        } else {
            jogo.style.display = "none";
        }

    });
}

function filtrarOfertas() {
esconderBanner();
    const jogos = document.querySelectorAll(".card-jogo");

    jogos.forEach(jogo => {

        const desconto = jogo.querySelector(".desconto");

        if (desconto) {
            jogo.style.display = "flex";
        } else {
            jogo.style.display = "none";
        }

    });
}
function esconderBanner() {

    document.getElementById("main-banner").style.display = "none";

}