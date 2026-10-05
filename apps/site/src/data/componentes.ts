// Componentes selecionáveis da vitrine (escopo, seção 5.2). Fonte única para a Início e a Vitrine.
export interface Componente {
  id: string;
  nome: string;
  descricao: string;
  /** Regra do escopo que o visitante precisa conhecer antes de escolher. */
  observacao?: string;
  /** Há uma demonstração pronta deste componente na vitrine. */
  demo: boolean;
}

export const componentes: Componente[] = [
  {
    id: "banner",
    nome: "Banner principal",
    descricao: "A primeira tela do site, com a sua mensagem principal e um botão de ação.",
    demo: true,
  },
  {
    id: "beneficios",
    nome: "Benefícios e diferenciais",
    descricao: "Mostra em poucos blocos por que escolher o seu negócio.",
    demo: true,
  },
  {
    id: "servicos",
    nome: "Serviços",
    descricao: "Lista organizada do que você oferece, com uma breve descrição de cada item.",
    demo: true,
  },
  {
    id: "galeria",
    nome: "Galeria ou portfólio",
    descricao: "Fotos de produtos ou trabalhos, com categorias e ampliação da imagem.",
    demo: true,
  },
  {
    id: "depoimentos",
    nome: "Depoimentos",
    descricao: "Opiniões de clientes que reforçam a confiança no seu trabalho.",
    observacao: "Somente com depoimentos reais e autorizados.",
    demo: true,
  },
  {
    id: "faq",
    nome: "Perguntas frequentes",
    descricao: "Respostas para as dúvidas mais comuns, em blocos que abrem e fecham.",
    demo: true,
  },
  {
    id: "antes-depois",
    nome: "Antes e depois",
    descricao: "Comparação deslizante entre duas imagens, ideal para mostrar resultados.",
    demo: true,
  },
  {
    id: "parceiros",
    nome: "Logotipos de parceiros",
    descricao: "Faixa com as marcas de clientes, fornecedores ou parceiros.",
    observacao: "Somente com autorização de cada marca.",
    demo: true,
  },
  {
    id: "whatsapp",
    nome: "Chamada para WhatsApp",
    descricao: "Botão sempre visível que abre uma conversa com o seu negócio.",
    demo: true,
  },
  {
    id: "formulario",
    nome: "Formulário de contato",
    descricao: "Campos simples para o visitante deixar uma mensagem.",
    demo: true,
  },
  {
    id: "agendamento",
    nome: "Agendamento",
    descricao: "Escolha de serviço, dia e horário, que chega até você como pedido.",
    observacao: "Conceitual nesta versão, sem integração com agenda externa.",
    demo: true,
  },
  {
    id: "contagem",
    nome: "Contagem regressiva",
    descricao: "Mostra quanto tempo falta para uma oferta ou evento.",
    observacao: "Somente quando o prazo for verdadeiro.",
    demo: true,
  },
];

export const nomeDoComponente = (id: string) => componentes.find((c) => c.id === id)?.nome ?? id;
