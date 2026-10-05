// Os quatro modelos de solução do escopo (seção 5.1). Fonte única para a Início e a Vitrine.
export interface Modelo {
  slug: string;
  titulo: string;
  resumo: string;
  idealPara: string;
  /** Componentes sugeridos (ids de data/componentes.ts), já marcados ao escolher o modelo. */
  componentes: string[];
  /** Caminho SVG (traço 24×24) do ícone do card. */
  icone: string;
}

export const modelos: Modelo[] = [
  {
    slug: "institucional",
    titulo: "Site institucional",
    resumo: "Apresente sua empresa com clareza e receba contatos de quem procura o que você faz.",
    idealPara: "Escritórios, consultórios e prestadores de serviço",
    componentes: ["banner", "beneficios", "servicos", "faq", "whatsapp", "formulario"],
    icone: "M3 10.5 12 3l9 7.5M5.5 8.5V20h13V8.5M10 20v-5h4v5",
  },
  {
    slug: "catalogo",
    titulo: "Catálogo ou portfólio",
    resumo: "Mostre produtos, trabalhos ou serviços organizados, com fotos e detalhes.",
    idealPara: "Lojas, artesãos, fotógrafos e arquitetos",
    componentes: ["banner", "galeria", "servicos", "whatsapp", "formulario"],
    icone: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  },
  {
    slug: "campanha",
    titulo: "Página de campanha",
    resumo: "Uma página focada em uma oferta, lançamento ou ação específica, feita para converter.",
    idealPara: "Lançamentos, promoções e eventos",
    componentes: ["banner", "beneficios", "contagem", "faq", "formulario", "whatsapp"],
    icone: "M4 13.5V10l12-5v14l-12-5ZM16 9.5h2.5a2.5 2.5 0 0 1 0 5H16M7 14.5 8.5 20h3L10 15.5",
  },
  {
    slug: "agendamento",
    titulo: "Serviços e agendamento",
    resumo: "Apresente seus serviços e profissionais e receba pedidos de horário pelo WhatsApp.",
    idealPara: "Salões, clínicas, estúdios e academias",
    componentes: ["banner", "servicos", "agendamento", "faq", "whatsapp"],
    icone: "M4 6.5h16V20H4zM4 10.5h16M8.5 3.5v5M15.5 3.5v5M8 14h2.5M13.5 14H16M8 17h2.5",
  },
];
