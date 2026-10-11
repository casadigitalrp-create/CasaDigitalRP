/** Conteúdo público. Preços e prazos permanecem apenas na planilha interna. */
export const solucoes = [
  "Site institucional",
  "Landing page",
  "Catálogo e portfólio digital",
  "Site de serviços e solicitação de atendimento",
  "Manutenção e evolução de sites",
  "Formulários integrados ao n8n",
  "Integração com Google Sheets e Gmail",
  "Integrações entre APIs e sistemas",
  "Qualificação de contatos com IA",
  "Automações personalizadas",
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
