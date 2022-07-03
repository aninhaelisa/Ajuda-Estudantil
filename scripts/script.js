const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
  $html.classList.toggle('modo-escuro')
 } )
  

var texto = "Neste site você vai conhecer as historias das pessoas que mudaram o mundo!";
var result;

var count = 0;
function digitar() {
result = document.getElementById("sobre");
window.setTimeout(function() { inserir(texto[count]) }, 50);
}

function inserir(letra) {
result.innerHTML += letra;
count++;
if(count < texto.length)
window.setTimeout(function() { inserir(texto[count]) }, 50);
}

window.onload = digitar;



