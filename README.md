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

Nenhum deploy público foi realizado até o momento.
