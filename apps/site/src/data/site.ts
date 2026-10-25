import { linkWhatsapp } from "../lib/mensagem";

export const site = {
  name: "CasaDigitalRP",
  slogan: "sempre com você",
  tagline: "Automações com n8n para pequenos negócios, clínicas e escritórios.",
  description:
    "A CasaDigitalRP automatiza tarefas de pequenos negócios, clínicas e escritórios com n8n: WhatsApp, planilhas, e-mail e integrações entre sistemas. Atendimento em Ribeirão Preto e em todo o Brasil.",
  email: "casadigitalrp@gmail.com",
  whatsapp: "5516993756290",
  whatsappLabel: "(16) 99375-6290",
  city: "Ribeirão Preto – SP",
  // Não publicar identificação fiscal até sua conferência documental.
};

export const nav = [
  { href: "/", label: "Início" },
  { href: "/catalogo/", label: "Automações" },
  { href: "/vitrine/", label: "Sites" },
  { href: "/contato/", label: "Contato" },
];

/** Chamada principal: formulário integrado ao n8n. */
export const ctaPrincipal = { href: "/contato/#form-titulo", label: "Solicitar análise" };

/** Promoção de entrada, aprovada por Gustavo em 25/10/2026. */
export const promocao = {
  titulo: "Site completo + automação de e-mail",
  preco: "R$ 790",
  itens: [
    "Site no mesmo modelo da CasaDigitalRP, pensado primeiro para o celular",
    "Páginas de apresentação, serviços, contato e política de privacidade",
    "Botão de WhatsApp e formulário de contato",
    "Automação: cada pedido do formulário vira e-mail para você e registro em planilha",
  ],
  observacao:
    "Domínio e hospedagem ficam no nome do cliente, no mesmo modelo usado pela CasaDigitalRP. O valor do domínio é pago pelo cliente diretamente ao registro.",
  solucao: "Promoção: site completo + automação de e-mail",
};

/** Link do WhatsApp da empresa já com a mensagem inicial preenchida. */
export const whatsappCom = (mensagem: string) =>
  site.whatsapp ? linkWhatsapp(site.whatsapp, mensagem) : undefined;

export const whatsappUrl = whatsappCom(
  "Olá! Vim pelo site e gostaria de conversar sobre uma automação.",
);
