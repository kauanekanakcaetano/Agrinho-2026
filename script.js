function mostrarMensagem() {
  document.getElementById("mensagem").innerHTML =
    "🌱 A tecnologia no campo ajuda a economizar recursos e melhorar a produção!";
}

/* INTERAÇÃO 1 - destacar cards ao clicar */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      card.style.background = "#e8f5e9";
      card.style.border = "2px solid #2e7d32";
    });
  });
});

/* INTERAÇÃO 2 - efeito de digitação no título */
document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector("h1");
  const texto = titulo.innerText;
  titulo.innerText = "";

  let i = 0;

  function digitar() {
    if (i < texto.length) {
      titulo.innerText += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    }
  }

  digitar();
});

/* INTERAÇÃO 3 - hover inteligente no header */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  header.addEventListener("mouseover", function () {
    header.style.transform = "scale(1.02)";
    header.style.transition = "0.3s";
  });

  header.addEventListener("mouseout", function () {
    header.style.transform = "scale(1)";
  });
});
