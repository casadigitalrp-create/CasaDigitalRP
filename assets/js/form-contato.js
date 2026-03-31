const contatoModal = document.getElementById('contatoModal');
const contatoModalOverlay = document.getElementById('contatoModalOverlay');
const fecharContatoModal = document.getElementById('fecharContatoModal');
const botoesAbrirModal = document.querySelectorAll('.abrir-contato-modal');

function abrirModalContato(event) {
  event.preventDefault();
  contatoModal.classList.add('ativo');
  contatoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-aberto');
}

function fecharModalContato() {
  contatoModal.classList.remove('ativo');
  contatoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-aberto');
}

botoesAbrirModal.forEach((botao) => {
  botao.addEventListener('click', abrirModalContato);
});

fecharContatoModal.addEventListener('click', fecharModalContato);
contatoModalOverlay.addEventListener('click', fecharModalContato);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && contatoModal.classList.contains('ativo')) {
    fecharModalContato();
  }
});