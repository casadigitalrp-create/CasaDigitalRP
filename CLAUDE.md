# Manual da CasaDigitalRP

Regras de trabalho da CasaDigitalRP para qualquer sessão de IA que mexer nos repositórios da empresa.
Este repositório é **público**: não registrar aqui preços internos, dados de clientes que não estejam publicados ou
qualquer credencial. Preços e prazos ficam na planilha interna.

## A empresa

- **CasaDigitalRP** ("sempre com você"), de Ribeirão Preto – SP, atendendo todo o Brasil. Responsável: Gustavo.
- Oferta principal: **automações com n8n** (WhatsApp, formulários, Google Sheets, Gmail, integrações, IA aplicada).
- Oferta secundária: **sites** (institucional, catálogo/portfólio, página de campanha, serviços e agendamento).
- Promoção pública vigente: site completo + automação de e-mail. Valor e itens em `apps/site/src/data/site.ts`.
- Clientes: os que aparecerem. Hoje são principalmente profissionais liberais e pequenos negócios (dentista,
  engenheiro, ateliê, produtora).

## Regra número 1

**Fazer bem feito e sempre o melhor possível, custe o tempo que custar.** Na prática:

- Nunca entregar a primeira versão que "funciona". Revisar no celular, nos temas claro e escuro, com teclado e com
  movimento reduzido antes de dizer que terminou.
- Rodar `pnpm build` e `pnpm lint` (Biome) e corrigir tudo antes de cada commit.
- Preferir uma solução simples e sólida a uma cheia de efeito e frágil.
- Quando faltar informação do cliente, não inventar: usar conteúdo provisório **marcado como simulado** e listar a
  pendência no README do projeto.

## Identidade visual da CasaDigitalRP

Tudo que leva a marca da empresa (site, catálogo de modelos, propostas) usa a **identidade V4**: grafite `#1a1a1a`,
laranja `#e8551e`/`#ff6a26` e fundo claro `#fff8f2`. Tokens em `packages/tokens/theme.css` e logos em
`apps/site/public/marca/`. **Nunca usar o azul da marca antiga.** Botão laranja leva texto grafite (contraste AA).

## Tom de voz

- **Com o cliente** (WhatsApp, e-mail, proposta): descontraído, próximo, com emoji 😄 sem exagero. Frases curtas, sem
  jargão técnico. Se precisar de termo técnico, explicar em seguida.
- **Nos textos dos sites**: claro e acolhedor, sem emoji. Falar das dores e do benefício para o visitante, não da
  tecnologia.
- **Documentação e commits**: português, objetivo, dizendo o que mudou e por quê.

## Padrão das prévias (versão inicial, em evolução)

Extraído das prévias que já existem (`everton-castro-previa`, `TiagoNascimento-Previa`, `previas-profissionais`).
Revisar e completar este padrão à medida que novas prévias forem feitas.

**Tecnologia**
- Astro estático + TypeScript estrito + Tailwind 4 + Biome. Node 24 e pnpm.
- Sem banco de dados, Functions ou serviços pagos na prévia.
- Publicação da prévia no GitHub Pages da conta `casadigitalrp-create`, com `base` igual ao nome do repositório.

**Conteúdo**
- Começar por uma pesquisa das **dores do público** do cliente e das **regras de publicidade do conselho profissional**
  (CFO, CREA, CFM, OAB etc.), registrada em `docs/`. O site responde a essas dores. Exemplo:
  `everton-castro-previa/docs/pesquisa-dores-e-regras.md`.
- Identidade visual própria para cada cliente (cores, fontes, elementos), definida em `src/styles/global.css`.
- Textos e contatos centralizados em `src/data/site.ts`; itens simulados comentados como tal.

**Modelos**
- Página única: para profissional liberal com poucos serviços (ex.: `everton-castro-previa`).
- Multipáginas: para empresas com vários serviços e portfólio. Referência: `previas-profissionais/fontes/construtora-tn`
  (Início, Sobre, Serviços + página de cada serviço, Obras/Portfólio com filtro + página de cada item, Dicas + artigos,
  Orçamento, Trabalhe conosco, Política de privacidade, 404). Conteúdo em arquivos de `src/data/`, páginas geradas
  a partir deles.

**Seções que toda prévia tem**
- Hero com a proposta principal e chamada para o WhatsApp.
- Serviços ou áreas de atuação.
- Como funciona (passo a passo do atendimento).
- Perguntas frequentes.
- Chamada final e rodapé com contato.
- Botão fixo de WhatsApp.

**Obrigatório enquanto for prévia**
- Aviso visual de prévia demonstrativa.
- `noindex, nofollow` e `robots.txt` com `Disallow: /`.
- Formulário em modo demonstração (não envia dados).
- README com lista de pendências para a versão final (registro profissional, contatos, fotos, depoimentos,
  domínio, ligação do formulário ao n8n, política de privacidade/LGPD).

**Qualidade**
- Pensado primeiro para o celular.
- Acessível: contraste, foco visível, textos alternativos, respeito a `prefers-reduced-motion`.
- SEO técnico básico pronto para quando sair do modo prévia.

## Processo com o cliente

Varia de cliente para cliente. O caminho mais comum é: primeiro contato → entender o negócio → prévia → ajustes →
aprovação → versão final com domínio no nome do cliente → automações, se fizer sentido.
Registrar aqui as etapas que se repetirem.

## Tarefas em aberto

Ver `docs/proxima-sessao.md` no início de cada sessão.

## Este manual

Atualizar sempre que uma regra nova aparecer numa conversa. Uma regra só vale para as próximas sessões se estiver
escrita aqui.
