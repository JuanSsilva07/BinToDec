$("#nome_contacto").keypress(function (x) {
  let keyCode = x.keyCode ? x.keyCode : x.which;
  if (!(keyCode > 47 && keyCode < 50)) {
    x.preventDefault();
  }
});

// Utilizei de Jquery acima, adaptando um código já encontrado na internet.
// Jquery funciona como o Google Fonts, o link está no Head.

function conversor() {
  resultado.textContent = binToDec(recuperarTexto());
}

function recuperarTexto() {
  let area = document.querySelector(".area");
  return area.value;
}

function binToDec(texto) {
  let dec = 0;

  for (let x = 0; x < texto.length; x++)
    dec += Math.pow(2, x) * texto[texto.length - x - 1]; //calcula para pegar do último ao primeiro

  console.log(dec);
  return dec;
}

let botaoConversor = document.querySelector(".converter");
let resultado = document.querySelector(".texto-resultado");
botaoConversor.onclick = conversor;
