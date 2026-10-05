// Mensagens que o próprio visitante envia pelo WhatsApp ou pelo e-mail dele: o site não tem
// servidor, só prepara o texto (escopo, seção 5.3). Usado pela Vitrine e pelo Contato.
export type Canal = "whatsapp" | "email";

/** Linha "Rótulo: valor", com o rótulo em negrito no WhatsApp. Valor vazio vira null e some. */
export function linha(canal: Canal, rotulo: string, valor?: string): string | null {
  const v = valor?.trim();
  if (!v) return null;
  return canal === "whatsapp" ? `*${rotulo}:* ${v}` : `${rotulo}: ${v}`;
}

/** Junta as linhas, descartando as vazias e as quebras de linha em excesso. */
export function juntar(linhas: (string | null)[]): string {
  return linhas
    .filter((l) => l !== null)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export const linkWhatsapp = (numero: string, texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

export const linkEmail = (email: string, assunto: string, corpo: string) =>
  `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

/** Copia para a área de transferência, com alternativa para navegadores sem a API moderna. */
export async function copiarTexto(texto: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}
