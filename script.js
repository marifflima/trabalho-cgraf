const cenas = [
  {
    nome: "Taylor Swift",
    texto: "Eu sou a melhor cantora!",
    retrato: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png/1200px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png",
  },
  {
    nome: "QueenB",
    texto: "Não, eu sou!!",
    retrato: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/05/02/USAT/83419857007-006-20250428-cct-la-dakdouk-web.jpg?crop=1018,573,x295,y647&width=660&height=371&format=pjpg&auto=webp",
   },
  {
    nome: "Juíza Olivia",
    texto: "Ordem no tribunal!!",
    retrato: "https://s2-quem.glbimg.com/UphChr6TuKtExSXPu0Pr1By7eMI=/0x0:1400x950/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/1/1/hRNpMMSpe7zbtbfbXPIA/olivia-rodrigo.jpg",
  },
  {
    nome: "Juiza OLivia",
    texto: "Advogada da Senhora Taylor, se pronuncie",
    retrato: "https://s2-quem.glbimg.com/UphChr6TuKtExSXPu0Pr1By7eMI=/0x0:1400x950/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/1/1/hRNpMMSpe7zbtbfbXPIA/olivia-rodrigo.jpg",
  },
  {
    nome: "Sabrina",
    texto: "Boa tarde, juiza, sou a advogada da senhora Taylor Swift",
    retrato: "https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2025/03/06185618/Sabrina-Carpenter-previa-nova-musica.jpg",
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
