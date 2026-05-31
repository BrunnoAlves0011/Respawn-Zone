// document.addEventListener('DOMContentLoaded', () => {

//     const openBtn = document.getElementById('openSidebar');
//     const closeBtn = document.getElementById('closeSidebar');
//     const sidebar = document.getElementById('sidebar');
//     const overlay = document.getElementById('sidebarOverlay');
//     const toggleDropdownBtn = document.getElementById('toggleDropdown');
//     const sidebarCatContent = document.getElementById('sidebarCatContent');

//     openBtn.addEventListener('click', () => {
//         sidebar.classList.add('active');
//         overlay.classList.add('active');
//     });
//     const closeMenu = () => {
//         sidebar.classList.remove('active');
//         overlay.classList.remove('active');
//     };

//     closeBtn.addEventListener('click', closeMenu);
//     overlay.addEventListener('click', closeMenu);
//     toggleDropdownBtn.addEventListener('click', () => {
//         sidebarCatContent.classList.toggle('active');
//     });
// });

// function abrirModal() {
//     document.getElementById("dropdown").classList.toggle("show");
// }

function abrirModal(tipo) {
    const modal = document.getElementById("modal");

    modal.style.display = "flex";

    trocarFormulario(tipo);
}

function trocarFormulario(tipo) {
    const login = document.getElementById("formLogin");
    const cadastro = document.getElementById("formCadastro");

    if (tipo === "login") {
        login.style.display = "flex";
        cadastro.style.display = "none";
    } else {
        login.style.display = "none";
        cadastro.style.display = "flex";
    }
}

window.addEventListener("click", function (e) {

    const dropdown = document.getElementById("dropdown");
    const button = document.getElementById("btnLogin");

    if (
        !dropdown.contains(e.target) &&
        e.target !== button
    ) {
        dropdown.classList.remove("show");
    }
});

function toggleCarrinho() {
    const cart = document.getElementById("cartDropdown");
    cart.classList.toggle("show");
    carregarCarrinho();
}

// FECHAR AO CLICAR FORA
window.addEventListener("click", function (e) {
    const cart = document.getElementById("cartDropdown");
    const btn = document.getElementById("btnCarrinho");

    if (!cart.contains(e.target) && e.target !== btn ) {
        cart.classList.remove("show");
    }
});

function carregarCarrinho() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    cartItems.innerHTML = "";

    let total = 0;

    if (carrinho.length === 0) {
        cartItems.innerHTML = `
                <p style="color:#b8b8d1;">
                    Seu carrinho está vazio
                </p>
            `;
        cartTotal.innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach(jogo => {
        total += jogo.preco;
        cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <span class="cart-item-title">
                            ${jogo.nome}
                        </span>
                        <span class="cart-item-price">
                            R$ ${jogo.preco.toFixed(2)}
                        </span>
                    </div>
                </div>
            `;
    });
    cartTotal.innerText =
        `R$ ${total.toFixed(2)}`;
}

function adicionarCarrinho(nome, preco) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push({
        nome,
        preco
    });

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}

function openView(box) {
    const card = box.closest(".card-jogo");
    const isActive = card.classList.contains("ativo");

    document.querySelectorAll(".card-jogo.ativo").forEach(c => {
        c.classList.remove("ativo");
        c.querySelector(".ver-mais").textContent = "Ver mais";
    });

    if (isActive) {
        box.textContent = "Ver mais";
        return;
    }
    card.classList.add("ativo");
    box.textContent = "Ver menos";
}

function comprarJogo(jogoId) {
    window.location.href = `/jogo/${jogoId}`;
}

function comprarBanner(botao) {

    const nome = botao.dataset.nome;
    const preco = botao.dataset.preco;
    const imagem = botao.dataset.img;
    const descricao = botao.dataset.desc;

    window.location.href = "/jogo";
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
    window.location.href = "/home";
}

function redirecionarPesquisa() {
    if (!document.querySelector(".card-jogo")) {
        window.location.href = "/home";
    }
}

function ativarRedirecionamentoPesquisa() {
    const input = document.getElementById("placeholder");
    const botao = document.querySelector(".search-box button");

    if (!input || !botao) return;

    if (!document.querySelector(".card-jogo")) {

        input.addEventListener("click", function () {
            window.location.href = "/home";
        });
        botao.addEventListener("click", function () {
            window.location.href = "/home";
        });
    }
}

function mostrarTodos() {
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

async function login() {
    
}

async function registro() {
    const email = document.getElementById("regmail");
    const senha = document.getElementById("regpass");
    const csenha = document.getElementById("regcpass");

    if (senha.value != csenha.value) {
        showToast("Senhas não são iguais");
    }

    if (!validaEmail(email)) {
        showToast("Email invalido");
    }

    fetch('/cadastro', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            pass: senha,
            cpass: csenha
        })
    }).then(res => res.json())
      .then(data => {
        if(data.status === 200) showToast("Conta criada com sucesso")
        if(data.status === 400) showToast("Erro ao criar conta")
      })
      .catch(error => showToast("Erro interno"));

}

function validaEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}