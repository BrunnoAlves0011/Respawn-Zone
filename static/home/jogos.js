console.log(localStorage.getItem("nomeJogo"));
console.log(localStorage.getItem("precoJogo"));
console.log(localStorage.getItem("descricaoJogo"));
console.log(localStorage.getItem("imagemJogo"));

document.getElementById("nome").textContent =
localStorage.getItem("nomeJogo");

document.getElementById("preco").textContent =
localStorage.getItem("precoJogo");

document.getElementById("desc").textContent =
localStorage.getItem("descricaoJogo");

document.getElementById("img").src =
localStorage.getItem("imagemJogo");