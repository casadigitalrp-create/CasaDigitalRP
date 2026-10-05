# Site CasaDigitalRP

Site institucional e vitrine de soluções da CasaDigitalRP, com a identidade visual V3.
Astro 7 em saída estática, TypeScript estrito e Tailwind CSS 4. Não há backend: os formulários
montam a mensagem e abrem o WhatsApp ou o aplicativo de e-mail do visitante.

Escopo, decisões e andamento do projeto: [`projetos/novo-site/`](../../projetos/novo-site/)
(comece pelo `ENTREGA.md`).

## Requisitos

- Node.js 24.15 ou mais novo (`.nvmrc` na raiz do repositório)
- pnpm 12.8.1 (campo `packageManager` do `package.json` da raiz)
- No Windows, use uma pasta de caminho curto (ex.: `C:\Projetos\CasaDigitalRP`). Caminhos com mais de
  260 caracteres fazem o pnpm falhar no build com "O sistema não pode encontrar o caminho especificado".

## Desenvolvimento

Na raiz do repositório:

```bash
pnpm install
pnpm --filter @cdrp/site dev
```

O site abre em http://localhost:4321.

## Build e verificação

```bash
pnpm --filter @cdrp/site build                   # gera apps/site/dist
pnpm --filter @cdrp/site preview --port 4330     # serve o build de produção
pnpm --filter @cdrp/site check                   # checagem de tipos
pnpm lint                                        # Biome (lint + formatação), na raiz
```

O gancho de commit (lefthook) roda o Biome e valida a mensagem no padrão Conventional Commits.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `src/pages/` | Início, Serviços, Vitrine, Portfólio, Sobre, Contato, Política de Privacidade e 404 |
| `src/components/` | Seções e peças reaproveitadas (cabeçalho, rodapé, topo das páginas, chamada final etc.) |
| `src/components/vitrine/Demos.astro` | Modelos HTML das 12 demonstrações da vitrine |
| `src/data/` | Conteúdo central: `site.ts` (contatos, CNPJ, menu), `modelos.ts`, `componentes.ts`, `stacks.ts` |
| `src/lib/` | `mensagem.ts` (links de WhatsApp e e-mail), `solicitacao.ts` (texto da vitrine), `demos.ts` |
| `src/assets/` | Imagens otimizadas no build (AVIF/WebP) |
| `public/` | Favicons, logos, imagem social, `robots.txt`, `_redirects` e `video/` (fora do git) |

## Onde editar o conteúdo

| O quê | Onde |
|---|---|
| WhatsApp, e-mail, cidade, CNPJ, slogan, menu | `src/data/site.ts` |
| Modelos e componentes da vitrine | `src/data/modelos.ts` e `src/data/componentes.ts` |
| Perguntas frequentes | `src/components/Faq.astro` |
| Créditos de atualização | `src/components/Creditos.astro` |
| Política de Privacidade | `src/pages/politica-de-privacidade.astro` (atualizar a data no topo) |
| Cores e fonte da marca | `packages/tokens/theme.css` e `src/styles/global.css` |

Conteúdo ainda não confirmado aparece com a etiqueta do componente `Provisorio`. Antes de publicar,
este comando não pode listar nenhum arquivo:

```bash
grep -rln "<Provisorio" apps/site/src
```

## Publicação atual no Cloudflare Pages

Atualização de 04/10/2026: a publicação autorizada usa o projeto Pages existente
`casadigitalrp`, o repositório `casadigitalrp-create/CasaDigitalRP` e a branch `main`.
O comando é `pnpm install --frozen-lockfile && pnpm build`, na raiz do repositório,
com saída `apps/site/dist`. Os requisitos, variáveis e recuperação estão na seção
"Atualização V3 de 04/10/2026" do README da raiz. O vídeo final está no Git.
Os documentos privados e as outras aplicações de demonstração não entram na publicação.

## Roteiro original de publicação (histórico)

O site é estático: não usa Pages Functions, Workers, banco nem serviço pago.

1. **Criar um projeto novo no Pages** ligado ao repositório. O site atual continua no ar até o aceite.
2. **Configuração de build** (conferir os nomes no painel e na
   [documentação do build](https://developers.cloudflare.com/pages/configuration/build-image/)):
   - Diretório raiz: a raiz do repositório (o site usa pacotes do monorepo, como `@cdrp/tokens`)
   - Comando de build: `pnpm --filter @cdrp/site build`
   - Diretório de saída: `apps/site/dist`
   - Versão do Node: lida do `.nvmrc`; se o build reclamar, definir a variável `NODE_VERSION=24`
3. **Homologar na URL de prévia** (`*.pages.dev`): repetir o roteiro de
   [`qualidade.md`](../../projetos/novo-site/qualidade.md), o PageSpeed Insights e o
   [Rich Results Test](https://search.google.com/test/rich-results).
4. **Antes da troca de domínio**:
   - Resolver as pendências de `projetos/novo-site/ENTREGA.md` (CNPJ, revisão jurídica, textos
     provisórios).
   - Desligar o **Cloudflare Web Analytics** do domínio, que o site atual usa, ou atualizar a
     Política de Privacidade.
   - Recompor o vídeo comprimido em `public/video/conheca-casadigitalrp.mp4`, que fica fora do git.
5. **Troca**: tirar o domínio `casadigitalrp.com.br` do projeto antigo e adicioná-lo ao novo.
   Redirecionar `www.casadigitalrp.com.br` para o endereço sem www (regra de redirecionamento do
   Cloudflare), que é o canônico do site.
6. **Depois da troca**: enviar o novo sitemap (`/sitemap-index.xml`) no Google Search Console e
   testar os redirecionamentos abaixo.

### Reversão

- **Problema geral depois da troca:** devolver o domínio ao projeto antigo, que continua publicado.
- **Problema em uma versão nova do site:** no painel do Pages, abrir "Implantações" e usar
  "Reverter" na implantação anterior. Corrigir no código e publicar de novo.

## Mapa de URLs e redirecionamentos

Inventário do site atual feito em 04/10/2026 a partir do sitemap publicado. As regras ficam em
`public/_redirects` (301, lidas pelo Cloudflare Pages).

| Endereço antigo | Endereço novo |
|---|---|
| `/` | `/` |
| `/servicos.html` | `/servicos/` |
| `/portfolio.html` | `/portfolio/` |
| `/sobre.html` | `/sobre/` |
| `/contato.html` | `/contato/` |
| `/privacidade` | `/politica-de-privacidade/` |

Páginas novas, sem equivalente antigo: `/vitrine/` e `/politica-de-privacidade/`.

## Dependências e licenças

| Pacote | Versão | Licença | Uso |
|---|---|---|---|
| astro | 7.3.5 | MIT | Framework do site |
| tailwindcss / @tailwindcss/vite | 4.3.3 | MIT | Estilos |
| @astrojs/sitemap | 3.7.4 | MIT | Geração do sitemap |
| @fontsource-variable/nunito | 5.3.0 | OFL-1.1 | Fonte Nunito servida pelo próprio site |
| sharp | 0.35.5 | Apache-2.0 (binário com libvips, LGPL-3.0) | Otimização de imagens **só no build**, não vai para o site |
| typescript | 6.0.3 | Apache-2.0 | Desenvolvimento |
| @astrojs/check | 0.9.10 | MIT | Desenvolvimento |

As versões exatas estão travadas no `pnpm-lock.yaml`. Logos, favicons, imagem social e fundo
institucional são ativos da marca CasaDigitalRP (manual V3).
