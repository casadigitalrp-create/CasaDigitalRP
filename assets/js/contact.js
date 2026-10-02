(() => {
  const form = document.getElementById('briefing-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      feedback.textContent = 'Confira os campos obrigatórios antes de continuar.';
      return;
    }

    const values = new FormData(form);
    const lines = [
      'Olá, CasaDigitalRP! Quero conversar sobre um projeto.',
      '',
      `Nome: ${String(values.get('nome')).trim()}`,
      `Empresa/projeto: ${String(values.get('empresa') || '').trim() || 'Não informada'}`,
      `E-mail: ${String(values.get('email') || '').trim() || 'Não informado'}`,
      `Assunto: ${String(values.get('tipo')).trim()}`,
      `Mensagem: ${String(values.get('mensagem')).trim()}`
    ];

    const url = `https://wa.me/5516991904702?text=${encodeURIComponent(lines.join('\n'))}`;
    feedback.textContent = 'Abrindo o WhatsApp. Revise e envie a mensagem por lá.';
    window.location.assign(url);
  });
})();
