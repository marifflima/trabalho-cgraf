const cenas = [
  {
    nome: "Personagem1",
    texto: "Temos um mistério pra resolver.",
    retrato: "imagens/personagem1.png",
    fundo: "imagens/imagemfundo.jpg"
  },
  {
    nome: "Personagem2",
    texto: "Certo, vamos investigar tudo com cuidado!",
    retrato: "imagens/personagem2.png",
    fundo: "imagens/imagemfundo.jpg"
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
