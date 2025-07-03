const cenas = [
  {
    nome: "Personagem1",
    texto: "Temos um mistério pra resolver.",
    retrato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2Neda1JwITTEuv-i2s4rHWNTLge5emarXQ&s",
  },
  {
    nome: "Personagem2",
    texto: "Certo, vamos investigar tudo com cuidado!",
    retrato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1n7ABaIZZ9bTfVtLiO-rJKOVoPQc_VuHdXg&s",
   }
];

let indiceCena = 0;

const nomeEl = document.getElementById("nome");
const textoEl = document.getElementById("texto");
const retratoEl = document.getElementById("retrato");
const fundoEl = document.getElementById("fundo");
const btnProximo = document.getElementById("proximo");

function mostrarCena() {
  const cena = cenas[indiceCena];
  nomeEl.textContent = cena.nome;
  textoEl.textContent = cena.texto;
  retratoEl.src = cena.retrato;
  fundoEl.src = cena.fundo;
}

btnProximo.addEventListener("click", () => {
  indiceCena++;
  if (indiceCena < cenas.length) {
    mostrarCena();
  } else {
    textoEl.textContent = "Fim da demo.";
    btnProximo.disabled = true;
  }
});

mostrarCena();
