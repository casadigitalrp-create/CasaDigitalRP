/** Conteúdo público. Preços e prazos permanecem apenas na planilha interna. */
// Automações primeiro (oferta principal); sites depois, como serviço secundário.
export const solucoes = [
  "Atendimento e lembretes pelo WhatsApp",
  "Formulários integrados ao n8n",
  "Integração com Google Sheets e Gmail",
  "Integrações entre APIs e sistemas",
  "Qualificação de contatos com IA",
  "Automações personalizadas",
  "Promoção: site completo + automação de e-mail",
  "Site institucional",
  "Landing page",
  "Catálogo e portfólio digital",
  "Site de serviços e solicitação de atendimento",
  "Manutenção e evolução de sites",
] as const;

export const recursos = [
  "Tema claro e escuro",
  "Busca e filtros",
  "Área de perguntas frequentes",
  "Galeria com ampliação",
  "Carrossel interativo",
  "Otimização para buscadores",
  "Acessibilidade adicional",
] as const;

export const integracoes = [
  "WhatsApp",
  "n8n",
  "Google Sheets",
  "Gmail",
  "Google Gemini",
  "API ou sistema existente",
] as const;

export interface SelecaoCatalogo {
  solucao: string;
  componentes: string[];
  recursos: string[];
  integracoes: string[];
}

export const chaveSelecao = "cdrp-catalogo-selecao-v1";

type Solucao = (typeof solucoes)[number];
type Integracao = (typeof integracoes)[number];

/** Receitas da página Automações: uma por solução de automação, contada como problema e fluxo. */
export interface Receita {
  solucao: Solucao;
  titulo: string;
  texto: string;
  /** Três etapas do mini-fluxo: entrada, automação e resultado. */
  fluxo: [string, string, string];
  integracoes: Integracao[];
}

export const receitas: Receita[] = [
  {
    solucao: "Atendimento e lembretes pelo WhatsApp",
    titulo: "Lembrete que ninguém esquece",
    texto:
      "Consultas, horários e entregas confirmados pelo WhatsApp, sem ninguém precisar mandar mensagem por mensagem.",
    fluxo: ["Agenda", "Lembrete", "Confirmação"],
    integracoes: ["WhatsApp", "n8n"],
  },
  {
    solucao: "Formulários integrados ao n8n",
    titulo: "Formulário que trabalha sozinho",
    texto:
      "Quem preenche o seu site recebe resposta na hora, e você recebe o pedido organizado. Igual ao formulário deste site.",
    fluxo: ["Site", "Validação", "Aviso"],
    integracoes: ["n8n", "Gmail"],
  },
  {
    solucao: "Integração com Google Sheets e Gmail",
    titulo: "Planilha que se preenche",
    texto:
      "Pedidos, contatos e vendas caem direto na planilha, e o resumo chega no seu e-mail. Adeus, copiar e colar.",
    fluxo: ["Pedido", "Planilha", "E-mail"],
    integracoes: ["Google Sheets", "Gmail", "n8n"],
  },
  {
    solucao: "Integrações entre APIs e sistemas",
    titulo: "Sistemas que conversam",
    texto:
      "O sistema da loja, o da agenda e o financeiro trocando informações sozinhos, sem você digitar a mesma coisa duas vezes.",
    fluxo: ["Sistema A", "n8n", "Sistema B"],
    integracoes: ["API ou sistema existente", "n8n"],
  },
  {
    solucao: "Qualificação de contatos com IA",
    titulo: "Primeiro atendimento com IA",
    texto:
      "A inteligência artificial entende o pedido, separa o que é urgente e passa para a pessoa certa da equipe.",
    fluxo: ["Mensagem", "IA", "Equipe"],
    integracoes: ["Google Gemini", "WhatsApp", "n8n"],
  },
  {
    solucao: "Automações personalizadas",
    titulo: "Do seu jeito",
    texto:
      "Tem uma tarefa repetida que não está aqui? A gente desenha um fluxo sob medida para a sua rotina.",
    fluxo: ["Sua tarefa", "Fluxo", "Resultado"],
    integracoes: ["n8n"],
  },
];

/** Opções do simulador "Quando… Então…" da página Automações. */
export const gatilhos = [
  {
    id: "whatsapp",
    rotulo: "Chega mensagem no WhatsApp",
    quando: "Quando chegar uma mensagem no WhatsApp",
    no: "WhatsApp",
    integracao: "WhatsApp",
  },
  {
    id: "formulario",
    rotulo: "Alguém preenche o site",
    quando: "Quando alguém preencher o site",
    no: "Formulário",
    integracao: "n8n",
  },
  {
    id: "horario",
    rotulo: "Todo dia num horário fixo",
    quando: "Todo dia, no horário combinado",
    no: "Relógio",
    integracao: "n8n",
  },
  {
    id: "pedido",
    rotulo: "Entra um novo pedido",
    quando: "Quando entrar um novo pedido",
    no: "Pedido",
    integracao: "API ou sistema existente",
  },
] as const satisfies readonly {
  id: string;
  rotulo: string;
  quando: string;
  no: string;
  integracao: Integracao;
}[];

export const acoes = [
  { id: "planilha", rotulo: "Registrar na planilha", no: "Planilha", integracao: "Google Sheets" },
  { id: "email", rotulo: "Enviar e-mail", no: "E-mail", integracao: "Gmail" },
  { id: "responder", rotulo: "Responder o cliente", no: "Resposta", integracao: "WhatsApp" },
  { id: "equipe", rotulo: "Avisar a equipe", no: "Equipe", integracao: "WhatsApp" },
] as const satisfies readonly { id: string; rotulo: string; no: string; integracao: Integracao }[];
