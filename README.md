# CasaDigitalRP

Site institucional da CasaDigitalRP, empresa de desenvolvimento de software com atuação em sites, sistemas, integração de plataformas, automação com n8n, análise de negócios e IA aplicada.

## Estrutura atual

- `index.html`: apresentação e caminhos para os serviços.
- `servicos.html`: frentes de atuação e limites de cada serviço.
- `portfolio.html`: cenários ilustrativos, identificados como exemplos; os projetos reais serão escolhidos depois.
- `sobre.html`: posicionamento e forma de trabalho.
- `contato.html`: WhatsApp, e-mail e formulário que prepara uma mensagem para o WhatsApp.
- `assets/css/site.css`, `assets/js/site.js` e `assets/js/contact.js`: arquivos usados pelas páginas atuais.
- `scripts/build.mjs`: gera `dist/` apenas com os arquivos necessários para publicar.
- `robots.txt` e `sitemap.xml`: orientações de indexação para o domínio definitivo.

Os arquivos antigos em `assets/css` e `assets/js` foram preservados, mas não são carregados pelas páginas atuais.

## Executar e conferir

O site é estático, sem dependências externas. Para uma conferência simples, abra `index.html` no navegador. Para validar a versão que será publicada, execute na raiz do projeto:

```powershell
node scripts/build.mjs
```

O resultado estará em `dist/`. A pasta é gerada novamente a cada execução e está ignorada pelo Git.

## Contato

O formulário de `contato.html` valida os campos e monta uma mensagem no navegador. Ao clicar no botão, ele abre o WhatsApp; **o visitante ainda precisa conferir e enviar a mensagem no WhatsApp**. O site não armazena dados nem envia o formulário para um servidor próprio. O e-mail é um link direto para o aplicativo de e-mail do visitante.

## Publicação planejada

O site pode ser hospedado como conteúdo estático no Cloudflare Pages. A orientação oficial é conectar o repositório Git, usar `main` como branch de produção, `node scripts/build.mjs` como comando de build e `dist` como diretório de saída. O serviço gera primeiro um endereço `*.pages.dev` para revisão. O domínio personalizado é conectado depois no painel do projeto.

O domínio escolhido é `casadigitalrp.com.br`, com titularidade pessoal (CPF). Após o pagamento informado pelo titular, a busca pública do Registro.br passou a exibir o domínio como registrado; a titularidade e a confirmação do pagamento ainda devem ser conferidas no painel da conta. Domínio e hospedagem são serviços diferentes: o Registro.br mantém o nome; o Cloudflare Pages serve os arquivos do site. Para usar o domínio raiz com Cloudflare Pages, o domínio precisa estar configurado como zona na Cloudflare e os servidores DNS precisam apontar para os nomes informados pela Cloudflare.

Fontes oficiais: [Registro.br](https://registro.br/ajuda/tutoriais-administrativos/), [Cloudflare Pages para HTML estático](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) e [domínios personalizados](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Antes de publicar

- Confirmar no painel do Registro.br que `casadigitalrp.com.br` aparece na conta do titular e que o pagamento foi reconhecido.
- Revisar textos, canais de contato e o conteúdo do portfólio.
- Testar o formulário até a abertura do WhatsApp, sem enviar uma mensagem de teste para terceiros.
- Fazer o primeiro deploy em `*.pages.dev` e validar as cinco páginas pelo endereço público.
- Validar no domínio publicado as URLs canônicas e o sitemap; criar uma imagem de compartilhamento da marca quando houver um visual aprovado.
- Definir informações necessárias para um aviso de privacidade completo, caso a operação passe a coletar ou armazenar dados no próprio site.

Registro histórico anterior à publicação de 02/10/2026: nenhum deploy público havia sido realizado.

## Publicação verificada em 02/10/2026

O site está publicado em [casadigitalrp.pages.dev](https://casadigitalrp.pages.dev). As cinco páginas, os arquivos CSS e JavaScript, a logo, o `robots.txt` e o `sitemap.xml` responderam com HTTP 200 na verificação pública.

O repositório usado pela Cloudflare é [casadigitalrp-create/CasaDigitalRP](https://github.com/casadigitalrp-create/CasaDigitalRP). O projeto Pages `casadigitalrp` está configurado para publicar automaticamente os novos commits da branch `main`, usando `node scripts/build.mjs` e o diretório de saída `dist`.

A conexão funcionou após alinhar o repositório com a conta GitHub onde o aplicativo Cloudflare Workers and Pages está instalado. O repositório anterior em `Guga-Nascimento/CasaDigitalRP` foi preservado; o remoto `origin` deste projeto local agora aponta para a conta da empresa.

Atualização verificada em 03/10/2026: tanto `https://casadigitalrp.pages.dev` quanto `https://casadigitalrp.com.br` responderam com HTTP 200. O domínio personalizado está ativo e servindo o site publicado pela Cloudflare.

## Atualização V3 de 04/10/2026

O novo código do site está em `apps/site`, com Astro estático, TypeScript e Tailwind.
Os pacotes de marca e configuração ficam em `packages/`. Os arquivos HTML antigos e o
script anterior foram preservados como histórico; não fazem parte da nova saída publicada.
Não há Functions, Workers, banco de dados ou integrações pagas.

Requisitos: Node 24.19.0 e pnpm 11.19.0, definidos nos arquivos do projeto.

```powershell
pnpm install --frozen-lockfile
pnpm check
pnpm lint
pnpm build
pnpm --filter @cdrp/site preview
```

A saída de produção é `apps/site/dist`. A Cloudflare deve usar a raiz do repositório,
`pnpm install --frozen-lockfile && pnpm build` e essa saída. Variáveis de build:
`NODE_VERSION=24.19.0`, `PNPM_VERSION=11.19.0`, `SKIP_DEPENDENCY_INSTALL=1`
e `ASTRO_TELEMETRY_DISABLED=1`. Não executar `scripts/build.mjs` para a versão V3.

O carrossel oferece quatro modelos demonstrativos e leva à vitrine com o modelo escolhido.
O vídeo editado é versionado em `apps/site/public/video/conheca-casadigitalrp.mp4`.
Os arquivos brutos ficam na pasta original de materiais e não são publicados.

As páginas antigas `.html` redirecionam para as novas rotas. A política descreve os
formulários locais, que preparam mensagens sem confirmar envio. O identificador fiscal
inválido foi retirado, não corrigido por suposição. Revisão jurídica e legendas do vídeo
continuam pendentes; isso não equivale a certificação jurídica ou acessibilidade completa.

Para reverter a publicação, usar a implantação Pages anterior
`320ba123-015e-4e9c-9290-ff097c8069cb`. O código anterior permanece no commit `1740a7b`.
Reverter uma implantação não altera automaticamente as configurações de build.
