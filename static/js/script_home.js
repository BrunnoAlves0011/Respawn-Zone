document.addEventListener('DOMContentLoaded', () => {
    // Selecionando os elementos do DOM
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    // Elementos do Dropdown (Sub-menu categorias)
    const toggleDropdownBtn = document.getElementById('toggleDropdown');
    const sidebarCatContent = document.getElementById('sidebarCatContent');

    // Função para abrir o menu
    openBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    // Função para fechar o menu (clicando no X ou fora do menu)
    const closeMenu = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Função para abrir/fechar as "Categorias" dentro do menu lateral
    toggleDropdownBtn.addEventListener('click', () => {
        sidebarCatContent.classList.toggle('active');
    });
});

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

function comprarJogo(id) {
    console.log(id);
}

function chamaLogin() {
    window.location.replace("/login");
}