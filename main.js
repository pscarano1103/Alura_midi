function tocaSom(seletorAudio) {
  const elemento = document.querySelector(idElementoAudio).play();

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor incálido!");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

//enquanto
for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
