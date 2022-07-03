const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
  $html.classList.toggle('modo-escuro')
 } )

 function search_cientistas() {
  let input = document.getElementsByClassName('searchbar').value
      input=input.toLowerCase();
  let x = document.getElementsByClassName('cientistas');

for (i = 0; i < x.length; i++) { 
  if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display="none";
  }
  else {
      x[i].style.display="list-item";                 
  }
}
}

var btn = document.querySelector("#voltar-topo");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});