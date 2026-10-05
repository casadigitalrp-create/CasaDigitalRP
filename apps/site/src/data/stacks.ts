// As quatro versões do site de demonstração Café Aurora: a mesma página, tecnologias diferentes.
// Medições: Lighthouse (perfil celular, com compressão). Fonte e método: apps/demos/README.md.
// O site principal não entra no comparativo porque não é a mesma página.

export interface Medicao {
  /** Nota de desempenho do Lighthouse (faixa entre rodadas). */
  desempenho: string;
  /** JavaScript transferido, em KB (comprimido). */
  jsKb: number;
  /** Tempo de bloqueio da thread principal (TBT). */
  bloqueio: string;
}

export interface Stack {
  nome: string;
  base: string;
  medicao: Medicao;
}

export const dataMedicao = "3 de outubro de 2026";

export const stacks: Stack[] = [
  {
    nome: "SvelteKit",
    base: "Svelte",
    medicao: { desempenho: "99", jsKb: 43, bloqueio: "~20 ms" },
  },
  {
    nome: "Nuxt",
    base: "Vue",
    medicao: { desempenho: "93–95", jsKb: 55, bloqueio: "~140–270 ms" },
  },
  {
    nome: "Angular",
    base: "TypeScript",
    medicao: { desempenho: "87–92", jsKb: 79, bloqueio: "~210–330 ms" },
  },
  {
    nome: "Next.js",
    base: "React",
    medicao: { desempenho: "87–90", jsKb: 134, bloqueio: "~300 ms" },
  },
];
