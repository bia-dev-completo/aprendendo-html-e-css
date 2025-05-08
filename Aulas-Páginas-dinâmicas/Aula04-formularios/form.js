const form = document.querySelector('form');
const geladinhos = document.querySelector('#geladinhos');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

form.addEventListener('submit', (evento) => {
  const atLeastOneCheckboxMarked = Array.from(checkboxes).some(item => item.checked);
  evento.preventDefault();
  if (atLeastOneCheckboxMarked){
    console.log("Enviando seus dados do formulário...");
    document.body.innerHTML = '<h1>Formulário Submetido com sucesso!</h1>';
  } else {
    const feedback = document.createElement('p');
    feedback.innerText = 'preencha ao menos 1 checkbox';
    feedback.style.color = 'red';

    geladinhos.appendChild(feedback);
  }
})