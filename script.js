let pontos = 0;
let respondidas = 0;

/* BOTÃO PRINCIPAL */
function mostrarMensagem() {
  document.getElementById("mensagem").innerHTML =
    "🌱 A tecnologia no campo ajuda a economizar recursos e melhorar a produção!";
}

/* QUIZ */
function responder(pergunta, correto) {
  if (correto) {
    pontos++;
  }

  respondidas++;

  if (respondidas === 3) {
    mostrarResultado();
  }
}

/* RESULTADO FINAL */
function mostrarResultado() {
  let resultado = document.getElementById("resultado");

  if (pontos === 3) {
    resultado.innerHTML = "🏆 Perfeito! Você acertou tudo!";
  } 
  else if (pontos === 2) {
    resultado.innerHTML = "👍 Muito bom! Quase perfeito!";
  } 
  else if (pontos === 1) {
    resultado.innerHTML = "🌱 Bom esforço! Continue aprendendo!";
  } 
  else {
    resultado.innerHTML = "📚 Tente novamente e aprenda mais sobre tecnologia no campo!";
  }
}

/* INTERAÇÃO EXTRA - alerta ao entrar no site */
document.addEventListener("DOMContentLoaded", function () {
  alert("Bem-vindo ao AGRINHO 2026 🌾");

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      card.style.background = "#e8f5e9";
      card.style.transition = "0.3s";
    });
  });
});
