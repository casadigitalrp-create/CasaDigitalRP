import { linkWhatsapp } from "../lib/mensagem";

export const site = {
  name: "CasaDigitalRP",
  slogan: "sempre com você",
  tagline: "Sites profissionais para pequenos negócios e profissionais.",
  description:
    "A CasaDigitalRP cria sites institucionais, catálogos e páginas de campanha para pequenos negócios e profissionais, com contato direto pelo WhatsApp.",
  email: "casadigitalrp@gmail.com",
  whatsapp: "5516991904702",
  whatsappLabel: "(16) 99190-4702",
  city: "Ribeirão Preto – SP",
  // Não publicar identificação fiscal até sua conferência documental.
};

export const nav = [
  { href: "/servicos/", label: "Serviços" },
  { href: "/vitrine/", label: "Vitrine" },
  { href: "/portfolio/", label: "Portfólio" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/contato/", label: "Contato" },
];

/** Chamada principal do site: leva à vitrine, onde o visitante monta a solicitação. */
export const ctaPrincipal = { href: "/vitrine/", label: "Solicitar proposta" };

/** Link do WhatsApp da empresa já com a mensagem inicial preenchida. */
export const whatsappCom = (mensagem: string) =>
  site.whatsapp ? linkWhatsapp(site.whatsapp, mensagem) : undefined;

export const whatsappUrl = whatsappCom("Olá! Vim pelo site e gostaria de uma proposta.");
