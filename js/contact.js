document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budgetForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('feedback');
    const WEBHOOK_URL = 'https://casadigitalrp.app.n8n.cloud/webhook/orcamento-casadigital';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            "Nome Completo": document.getElementById('nome').value.trim(),
            "E-mail Corporativo": document.getElementById('email').value.trim(),
            "Nome da Empresa": document.getElementById('empresa').value.trim(),
            "WhatsApp / Telefone": document.getElementById('telefone').value.trim(),
            "Solução de Interesse": document.getElementById('solucao').value,
            "Qual o maior gargalo operacional do seu negócio hoje?": document.getElementById('gargalo').value.trim()
        };

        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando e gerando proposta...';
        feedback.style.display = 'none';

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                feedback.className = 'feedback-message feedback-success';
                feedback.textContent = 'Recebemos sua solicitação! Verifique seu e-mail em instantes.';
                feedback.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Falha no envio.');
            }
        } catch (error) {
            console.error('Erro:', error);
            feedback.className = 'feedback-message feedback-error';
            feedback.textContent = 'Ocorreu um erro ao enviar sua solicitação. Tente novamente.';
            feedback.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Solicitar Proposta e Diagnóstico';
        }
    });
});
