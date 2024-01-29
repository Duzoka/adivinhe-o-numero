let randomNumber = Math.floor(Math.random() * 100);
let contador = 5
console.log(randomNumber);

function adivinharNumero() {
  let display = document.getElementsByClassName("display")[0];
  let numeroAdivinhado = document.getElementById("numeroAdivinhado").value;
  let mostrarContador = document.getElementById("contadorrapido");
  contador--

    if (contador < 1) {
      recarregarPagina();
      display.textContent = `Você perdeu! O jogo reiniciará em 5 segundos!`;
    } else {
      if (numeroAdivinhado > 100) {
        display.textContent = `O jogo é adivinha um número até 100!`;
      } else {
        if (numeroAdivinhado < randomNumber) {
          display.textContent = `O número é maior`;
        } else if (numeroAdivinhado > randomNumber) {
          display.textContent = `O número é menor`;
        } else if (numeroAdivinhado == randomNumber) {
          display.textContent = `Você ganhou`;
        }
      }
    }

    
    mostrarContador.textContent = `Chances disponíveis: ${contador}`;
  }

  function recarregarPagina(){
    setTimeout(function(){
      location.reload();
    }, 5000);
  }
