// Monta a solicitação da vitrine em texto, para WhatsApp (com negrito) ou e-mail (texto puro).
import {
  type Canal,
  linkEmail as email,
  juntar,
  linha,
  linkWhatsapp as whatsapp,
} from "./mensagem";

export type { Canal };

export interface Solicitacao {
  modelo?: string;
  componentes: string[];
  estilo?: string;
  cor?: string;
  nome: string;
  negocio?: string;
  segmento?: string;
  siteAtual?: string;
  observacoes?: string;
}

export function textoDaSolicitacao(s: Solicitacao, canal: Canal): string {
  const negocio = [s.negocio?.trim(), s.segmento?.trim()].filter(Boolean).join(" – ");
  return juntar([
    "Olá! Montei uma solicitação na vitrine do site da CasaDigitalRP e gostaria de receber uma proposta.",
    "",
    linha(canal, "Modelo", s.modelo),
    linha(canal, "Componentes", s.componentes.join(", ")),
    linha(canal, "Estilo", s.estilo),
    linha(canal, "Cor de referência", s.cor),
    "",
    linha(canal, "Nome", s.nome),
    linha(canal, "Negócio", negocio),
    linha(canal, "Site atual", s.siteAtual),
    linha(canal, "Observações", s.observacoes),
  ]);
}

export function linkWhatsapp(numero: string, s: Solicitacao): string {
  return whatsapp(numero, textoDaSolicitacao(s, "whatsapp"));
}

export function linkEmail(destino: string, s: Solicitacao): string {
  const assunto = `Solicitação de proposta${s.modelo ? ` – ${s.modelo}` : ""}`;
  return email(destino, assunto, textoDaSolicitacao(s, "email"));
}
