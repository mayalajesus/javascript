let btn = document.getElementById('verificar');
let input1 = document.getElementById('nome');
let input2 = document.getElementById('nomeConvidado');
let resultado = document.getElementById('resultado');
let spinner = document.getElementsByClassName('spinner')[0];

btn.addEventListener('click', clicar);

let names = ['RAFAEL', 'RICARDO'];
let hosts = ['LUCAS', 'CAIO'];


function clicar() {
    let input1up = input1.value.toUpperCase();
    let input2up = input2.value.toUpperCase();

    if (!input1.value || !input2.value) {
      alert('Preencha todos os campos!');
      return;
    }
  
    resultado.innerText = "";
    spinner.style.display = 'block'; // exibe o spinner

  
    setTimeout(function() {

      if (names.indexOf(input1up) !== -1 && hosts.indexOf(input2up) !== -1) {
        resultado.innerText = ("Acesso liberado para " + input1.value);
      } else {
        resultado.innerText = ("Não há registros de " + input1.value);
      }

      spinner.style.display = 'none'; // remove o spinner
      
      // limpa as informações
      input1.value = "";
      input2.value = "";
    
    }, 1000); // tempo em milissegundos que o spinner será exibido (3 segundos no exemplo)

    if(!isInput1Selected || !isInput2Selected){
      alert('Preencha todas as informações')
      resultado.innerText = "";
      return;
    }

  }
