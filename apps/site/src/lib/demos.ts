// Comportamentos das demonstrações da vitrine. Os eventos são delegados ao quadro da janela,
// e `iniciarDemo` prepara o que depende do momento de abertura (dias da agenda, contagem).

/** Liga os comportamentos que valem para qualquer demonstração. Chamar uma vez. */
export function ligarDemos(quadro: HTMLElement) {
  quadro.addEventListener("click", (e) => {
    const alvo = e.target as Element;
    if (alvo.closest("[data-sem-acao]")) e.preventDefault();

    // Galeria: filtros e ampliação.
    const filtro = alvo.closest<HTMLButtonElement>("[data-filtro]");
    const galeria = filtro?.closest("[data-galeria]");
    if (filtro && galeria) {
      marcarUnico(galeria.querySelectorAll("[data-filtro]"), filtro);
      galeria.querySelectorAll<HTMLElement>("[data-categoria]").forEach((item) => {
        item.hidden =
          filtro.dataset.filtro !== "todos" && item.dataset.categoria !== filtro.dataset.filtro;
      });
    }
    const ampliar = alvo.closest<HTMLButtonElement>("[data-ampliar]");
    if (ampliar) abrirLightbox(ampliar);
    if (alvo.closest("[data-fechar-lightbox]")) fecharLightbox(quadro);

    // Agendamento: uma opção por grupo.
    const opcao = alvo.closest<HTMLButtonElement>("[data-opcao]");
    const agenda = opcao?.closest<HTMLElement>("[data-agenda]");
    if (opcao && agenda && !opcao.disabled) {
      marcarUnico(agenda.querySelectorAll(`[data-opcao="${opcao.dataset.opcao}"]`), opcao);
      atualizarAgenda(agenda);
    }
    const confirmacao = alvo
      .closest("[data-agenda-pedir]")
      ?.closest("[data-agenda]")
      ?.querySelector<HTMLElement>("[data-agenda-ok]");
    if (confirmacao) confirmacao.hidden = false;
  });

  quadro.addEventListener("input", (e) => {
    const alvo = e.target as HTMLInputElement;
    if (alvo.matches("[data-antes-depois]")) {
      alvo.closest<HTMLElement>(".antes-depois")?.style.setProperty("--pos", `${alvo.value}%`);
    }
    if (alvo.matches("[data-mascara-telefone]")) alvo.value = mascararTelefone(alvo.value);
  });

  // Formulário de exemplo: valida e mostra o retorno, sem enviar nada.
  quadro.addEventListener("submit", (e) => {
    const form = e.target as HTMLFormElement;
    if (!form.matches("[data-demo-form]")) return;
    e.preventDefault();
    let primeiroErro: HTMLElement | null = null;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]").forEach((campo) => {
      const vazio = !campo.value.trim();
      const erro = form.querySelector<HTMLElement>(`#${campo.getAttribute("aria-describedby")}`);
      if (erro) erro.hidden = !vazio;
      if (vazio) campo.setAttribute("aria-invalid", "true");
      else campo.removeAttribute("aria-invalid");
      if (vazio && !primeiroErro) primeiroErro = campo;
    });
    const sucesso = form.querySelector<HTMLElement>("[data-demo-sucesso]");
    if (sucesso) sucesso.hidden = primeiroErro !== null;
    (primeiroErro as HTMLElement | null)?.focus();
  });
}

/** Prepara a demonstração recém-aberta. Devolve a função de limpeza (timers). */
export function iniciarDemo(quadro: HTMLElement): () => void {
  const dias = quadro.querySelector<HTMLElement>("[data-dias]");
  if (dias) preencherDias(dias);

  const contagem = quadro.querySelector<HTMLElement>("[data-contagem]");
  if (contagem) {
    // Prazo de exemplo: sempre 2 dias e 7 horas a partir da abertura.
    const fim = Date.now() + (2 * 24 + 7) * 3_600_000 + 25 * 60_000;
    const atualizar = () => desenharContagem(contagem, fim - Date.now());
    atualizar();
    const timer = window.setInterval(atualizar, 1000);
    return () => window.clearInterval(timer);
  }
  return () => {};
}

/** Fecha a imagem ampliada, se houver. Devolve true quando havia uma aberta. */
export function fecharLightbox(quadro: HTMLElement): boolean {
  const caixa = quadro.querySelector<HTMLElement>("[data-lightbox]:not([hidden])");
  if (!caixa) return false;
  caixa.hidden = true;
  const origem = caixa.closest("[data-galeria]")?.querySelector<HTMLElement>("[data-ampliado]");
  origem?.removeAttribute("data-ampliado");
  origem?.focus();
  return true;
}

function abrirLightbox(botao: HTMLButtonElement) {
  const caixa = botao.closest("[data-galeria]")?.querySelector<HTMLElement>("[data-lightbox]");
  const imagem = caixa?.querySelector<HTMLElement>("[data-lightbox-imagem]");
  if (!caixa || !imagem) return;
  imagem.className = botao.className.replace("aspect-square", "aspect-[4/3]");
  imagem.textContent = botao.textContent;
  botao.setAttribute("data-ampliado", "");
  caixa.hidden = false;
  caixa.querySelector<HTMLElement>("[data-fechar-lightbox]")?.focus();
}

function atualizarAgenda(agenda: HTMLElement) {
  const escolhido = (grupo: string) =>
    agenda
      .querySelector<HTMLElement>(`[data-opcao="${grupo}"][aria-pressed="true"]`)
      ?.textContent?.trim();
  const [servico, dia, hora] = [escolhido("servico"), escolhido("dia"), escolhido("hora")];
  const completo = Boolean(servico && dia && hora);
  const resumo = agenda.querySelector<HTMLElement>("[data-agenda-resumo]");
  const pedir = agenda.querySelector<HTMLButtonElement>("[data-agenda-pedir]");
  const confirmacao = agenda.querySelector<HTMLElement>("[data-agenda-ok]");
  if (resumo) {
    resumo.textContent = completo
      ? `${servico} · ${dia} · ${hora}`
      : "Escolha serviço, dia e horário.";
  }
  if (pedir) pedir.disabled = !completo;
  if (confirmacao) confirmacao.hidden = true;
}

/** Marca só `escolhido` como pressionado dentro do grupo de botões. */
function marcarUnico(grupo: NodeListOf<Element>, escolhido: Element) {
  grupo.forEach((b) => {
    b.setAttribute("aria-pressed", String(b === escolhido));
  });
}

function preencherDias(alvo: HTMLElement) {
  const formato = new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit" });
  const botoes: HTMLButtonElement[] = [];
  const dia = new Date();
  while (botoes.length < 5) {
    dia.setDate(dia.getDate() + 1);
    if (dia.getDay() === 0) continue; // domingo fechado
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.opcao = "dia";
    b.setAttribute("aria-pressed", "false");
    b.className =
      "d-botao border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 capitalize aria-pressed:border-[var(--c)] aria-pressed:bg-[var(--c-escuro)] aria-pressed:text-white";
    b.textContent = formato.format(dia).replace(".", "");
    botoes.push(b);
  }
  alvo.replaceChildren(...botoes);
}

function desenharContagem(caixa: HTMLElement, restante: number) {
  const s = Math.max(0, Math.floor(restante / 1000));
  const valores: Record<string, number> = {
    dias: Math.floor(s / 86_400),
    horas: Math.floor((s % 86_400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
  caixa.querySelectorAll<HTMLElement>("[data-unidade]").forEach((el) => {
    el.textContent = String(valores[el.dataset.unidade ?? ""] ?? 0).padStart(2, "0");
  });
}

function mascararTelefone(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
