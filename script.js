function mostrarMensagem() {
  document.getElementById("mensagem").innerHTML =
    "🌱 A tecnologia no campo melhora a produção e reduz desperdícios!";
}

/* Modo escuro */
function modoEscuro() {
  document.body.classList.toggle("dark");
}

/* Header interativo */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("topo");

  header.addEventListener("click", function () {
    header.style.background = "#1b5e20";
    header.innerHTML = `
      <h1>🌾 AGRINHO 2026</h1>
      <p>Site interativo ativado 🚀</p>
    `;
  });
});
