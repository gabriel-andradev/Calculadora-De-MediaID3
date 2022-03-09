//variáveis//

let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let nota4 = document.querySelector("#nota4");
let spanResposta = document.querySelector("#resposta");
//function//

function calcular() {
  let valorFinal =
    (nota1.valueAsNumber +
      nota2.valueAsNumber +
      nota3.valueAsNumber +
      nota4.valueAsNumber) /
    4;
  let notaFixada = valorFinal.toFixed(1);

  if (notaFixada > 6.0) {
    spanResposta.textContent = "Aprovado! Sua nota é = " + notaFixad;
  } else {
    spanResposta.textContent =
      "Nota abaixo da média, 'média 6', sua nota é = " + notaFixada;
  }
}