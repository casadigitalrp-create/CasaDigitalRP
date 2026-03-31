document.addEventListener('DOMContentLoaded', () => {
  const contatoModal = document.getElementById('contatoModal');
  const contatoModalOverlay = document.getElementById('contatoModalOverlay');
  const fecharContatoModal = document.getElementById('fecharContatoModal');
  const botoesAbrirModal = document.querySelectorAll('.abrir-contato-modal');
  const contatoForm = document.getElementById('contatoForm');
  const contatoSucesso = document.getElementById('contatoSucesso');

  if (!contatoModal || !contatoForm) {
    return;
  }

  function limparFormulario() {
    contatoForm.reset();
  }

  function abrirModalContato(event) {
    event.preventDefault();
    limparFormulario();
    contatoModal.classList.add('ativo');
    contatoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-aberto');
  }

  function fecharModalContato() {
    contatoModal.classList.remove('ativo');
    contatoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-aberto');
    limparFormulario();
  }

  function mostrarMensagemSucesso() {
    if (!contatoSucesso) {
      return;
    }

    contatoSucesso.classList.add('ativo');

    setTimeout(() => {
      contatoSucesso.classList.remove('ativo');
    }, 4000);
  }

  botoesAbrirModal.forEach((botao) => {
    botao.addEventListener('click', abrirModalContato);
  });

  if (fecharContatoModal) {
    fecharContatoModal.addEventListener('click', fecharModalContato);
  }

  if (contatoModalOverlay) {
    contatoModalOverlay.addEventListener('click', fecharModalContato);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && contatoModal.classList.contains('ativo')) {
      fecharModalContato();
    }
  });

  window.addEventListener('pageshow', () => {
    limparFormulario();
  });

  const urlAtual = new URL(window.location.href);
  const enviado = urlAtual.searchParams.get('enviado');

  if (enviado === '1') {
    limparFormulario();
    mostrarMensagemSucesso();

    urlAtual.searchParams.delete('enviado');
    window.history.replaceState({}, '', urlAtual.pathname);
  }
});