
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

function toggleCarrinho() {
    const cart = document.getElementById("cartDropdown");
    cart.classList.toggle("show");
    carregarCarrinho();
}

window.addEventListener("click", function (e) {
    const cart = document.getElementById("cartDropdown");
    const btn = document.getElementById("btnCarrinho");

    if (!cart.contains(e.target) && e.target !== btn) {
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
        total += jogo.valor * jogo.quantidade;
        cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${jogo.img}" class="cart-item-img" alt="${jogo.name}" >
                    <div class="cart-item-info">
                        <span class="cart-item-title">
                            ${jogo.name}
                        </span>
                        <div class="cart-item-price">
                            R$ ${jogo.valor.toFixed(2)}
                            ${jogo.quantidade > 1 ? `x${jogo.quantidade}` : ''}
                        </div>
                    </div>
                    <button class="btn-remove" onclick="removerCarrinho(${jogo.id}, 0)">
                        ✕
                    </button>
                </div>
            `;
    });
    cartTotal.innerText = `R$ ${total.toFixed(2)}`;
}

function carregaCarrinhoFim() {
    const checkItems = document.getElementById("lista-jogos");
    const checkTotal = document.getElementById("valor-total");
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    cartItems.innerHTML = "";

    let total = 0;

    if (carrinho.length === 0) {
        checkItems.innerHTML = `
                <p style="color:#b8b8d1;">
                    Seu carrinho está vazio
                </p>
            `;
        checkTotal.innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach(jogo => {
        total += jogo.valor * jogo.quantidade;
        checkItems.innerHTML += `
                <div class="checkout-item">
                    <img src="${jogo.img}">
                    <div class="item-info">
                        <h3>${jogo.name}</h3>
                        <span>Quantidade: x${jogo.quantidade}</span>
                    </div>
                    <div class="item-preco">
                        R$ ${jogo.valor.toFixed(2)}
                           ${jogo.quantidade > 1 ? `x${jogo.quantidade}` : ''}
                    </div>
                    <button class="btn-remove" onclick="removerCarrinho(${jogo.id}, 1)">
                        ✕
                    </button>
                </div>
            `;
    });

    checkTotal.innerText = `R$ ${total.toFixed(2)}`;
}

async function adicionarCarrinho(id) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const response = await fetch('/api/procuraJogo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    });

    const produto = await response.json();
    id = Number(id);
    const itemExiste = carrinho.findIndex(
        item => item.id === id
    );

    if(itemExiste != undefined && itemExiste > -1){
        carrinho[itemExiste].quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        })
    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();

}

function removerCarrinho(id, fun){

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const index = carrinho.findIndex(
        item => item.id === id
    );

    if(index === -1) return;

    if(carrinho[index].quantidade > 1){
        carrinho[index].quantidade--;
    } else {
        carrinho.splice(index, 1);
    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();

    if (fun == 1) {
        window.location.reload();
    }

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
    window.location.href = "/login";
}

async function carregaUsuario() {
    try {
        const response = await fetch('/api/carregaUser', {
            credentials: "include"
        });

        const user = await response.json();

        const btUser = document.getElementById("btUser");

        if (user.logado) {
            // btUser.innerHTML = `
            //             <button class="login-btn" id="btnLogin" onclick="minhaConta()">
            //                 Minha Conta
            //             </button>
            //         `;
            btUser.innerHTML = `
                <span class="logged-user" onclick="minhaConta()">
                    ${user.nome}
                </span>
            `;
        } else {
            btUser.innerHTML = `
                <button class="login-btn" id="btnLogin" onclick="login()">
                    Entrar
                </button>
                `;
        }
    } catch (error) {
        console.log(error);
    }
}    

function finalizarCompra() {
    window.location.href = "/finalizar";
}