# Produtos futuros — CasaDigitalRP

Última revisão: 03/10/2026  
Status: backlog de oportunidades; nenhum item representa promessa comercial ou produto concluído.

## Finalidade

Registrar ideias de produtos e serviços padronizados que a CasaDigitalRP poderá desenvolver, validar e oferecer no futuro.

As ideias devem partir de problemas reais de clientes. A tecnologia será escolhida depois da validação da necessidade.

## Regras do backlog

- Uma ideia não é automaticamente um produto aprovado.
- Antes de desenvolver, confirmar público, problema, disposição para pagar e resultado esperado.
- Começar por um MVP pequeno e demonstrável.
- Não divulgar como produto pronto algo que ainda seja conceitual.
- Não reutilizar diretamente códigos, imagens, apresentações ou recursos de cursos.
- Implementações comerciais devem ser originais, documentadas, testadas e seguras.
- Integrações devem considerar acessos, limites das plataformas, tratamento de erros e privacidade.

## Prioridades atuais

### P1 — Captação Inteligente de Clientes

**Problema**

Pequenos negócios recebem contatos por vários canais, coletam poucas informações e precisam organizar tudo manualmente.

**Proposta**

Site ou landing page com formulário inteligente, qualificação do contato e automação das próximas etapas.

**MVP**

- landing page responsiva;
- formulário com campos condicionais;
- validação e mensagens acessíveis;
- abertura de conversa no WhatsApp;
- envio dos dados para um workflow n8n;
- registro em Google Sheets ou sistema escolhido;
- notificação por e-mail ou WhatsApp;
- tratamento e registro de falhas.

**Diferencial da CasaDigitalRP**

Combinar presença digital, desenvolvimento, integração e automação em uma única entrega.

**Primeira validação**

Conversar com pequenos negócios para entender como recebem contatos, quais informações precisam e onde perdem tempo.

---

### P2 — Presença Digital Essencial

**Problema**

Pequenos negócios dependem apenas de redes sociais e não possuem um espaço próprio para apresentar serviços e gerar confiança.

**Proposta**

Pacote padronizado de site institucional para negócios locais e prestadores de serviço.

**MVP**

- página inicial;
- apresentação da empresa;
- serviços;
- contato e WhatsApp;
- layout responsivo;
- acessibilidade básica;
- SEO técnico básico;
- domínio e publicação;
- documentação para atualização.

**Evoluções possíveis**

- formulário automatizado;
- integração com agenda;
- catálogo;
- páginas por campanha;
- manutenção recorrente.

---

### P3 — Painel Operacional Leve

**Problema**

Pequenas equipes acompanham solicitações, contatos ou tarefas em planilhas e mensagens dispersas.

**Proposta**

Painel web simples para visualizar o andamento de uma operação específica.

**MVP possível**

- autenticação adequada ao cenário;
- lista de registros;
- filtros e status;
- visão responsiva;
- atualização por API ou n8n;
- histórico mínimo;
- exportação de dados;
- tratamento de erros e permissões.

**Condição para iniciar**

Escolher primeiro uma rotina real e um tipo de usuário. Não criar um painel genérico sem processo definido.

---

### P4 — Simuladores e Calculadoras Comerciais

**Problema**

Clientes têm dificuldade para estimar preço, economia, retorno ou configuração de um serviço antes de conversar com a empresa.

**Proposta**

Componentes interativos que calculam estimativas e geram contatos qualificados.

**Exemplos**

- estimativa inicial de projeto;
- calculadora de economia com automação;
- simulador de pacote de serviços;
- configurador de orçamento;
- diagnóstico guiado do processo atual.

**Uso comercial**

Pode funcionar como complemento de uma landing page e encaminhar o resultado para WhatsApp, e-mail, CRM ou n8n.

### P5 — Integração Monitorada Essencial

**Problema**

Pequenas empresas transferem manualmente informações entre sistemas e frequentemente não percebem quando um envio falha, duplica ou fica com resultado incerto.

**Proposta**

Pacote de integração entre duas ferramentas, com validação, rastreabilidade e tratamento explícito de falhas.

**MVP**

- recebimento por formulário, webhook ou consulta programada;
- validação dos campos obrigatórios;
- prevenção de registros duplicados;
- transformação e mapeamento dos dados;
- envio para API ou sistema de destino;
- tratamento de erros 429, 500 e timeout;
- registro do resultado da execução;
- alerta quando houver necessidade de intervenção;
- procedimento seguro para reprocessamento.

**Primeira demonstração**

Criar um cenário totalmente fictício de envio de pedidos ou contatos entre dois sistemas simulados, sem dados ou credenciais reais.

**Diferencial da CasaDigitalRP**

Não entregar apenas uma conexão funcionando, mas uma integração compreensível, monitorável e preparada para falhas.

### P6 — Assistente Operacional Governado por IA

**Problema**

Empresas querem utilizar inteligência artificial em suas rotinas, mas frequentemente não definem fontes confiáveis, permissões, limites de atuação, validação ou responsabilidade pelas decisões.

**Proposta**

Configuração de um assistente de IA para apoiar um processo específico, com regras claras, fontes identificadas, memória controlada e aprovação humana antes de ações que alterem sistemas.

**MVP**

- escolha de uma única rotina operacional;
- definição das fontes autorizadas;
- separação entre fatos, hipóteses e recomendações;
- definição das operações permitidas e proibidas;
- diferenciação entre consulta, proposta e execução;
- aprovação explícita antes de alterações externas;
- registro sanitizado das decisões relevantes;
- tratamento de informações ausentes ou contraditórias;
- proteção contra instruções indevidas presentes em conteúdos externos;
- testes com cenários normais, ambíguos e de falha.

**Primeira demonstração**

Criar um cenário fictício em que o assistente analisa uma solicitação, consulta documentos autorizados e prepara uma ação, mas somente a executa após uma aprovação humana explícita.

**Diferencial da CasaDigitalRP**

Entregar IA aplicada a um processo real com limites, rastreabilidade e controle humano, em vez de apenas disponibilizar um chatbot genérico.

## Ordem recomendada

1. Validar Captação Inteligente de Clientes.
2. Estruturar Presença Digital Essencial como oferta padronizada.
3. Criar uma demonstração da Integração Monitorada Essencial.
4. Criar um protótipo do Assistente Operacional Governado por IA.
5. Usar Simuladores como complemento dessas ofertas.
6. Desenvolver Painel Operacional somente quando houver um processo real para validar.

## Origem das ideias

As ideias foram consolidadas em 03/10/2026 durante a análise do antigo repositório de estudos:

`C:\TIC\DesenvolvimentoWeb`

O repositório contém exercícios de HTML, CSS, JavaScript, formulários, responsividade e Bootstrap. Ele será preservado em arquivo histórico.

Foram aproveitados somente conceitos de aprendizagem. Nenhum código ou recurso do curso foi classificado como produto pronto da CasaDigitalRP.

## Próximos passos

- escolher um nicho inicial para entrevistar;
- levantar como esse público recebe e organiza contatos;
- selecionar um problema frequente;
- escrever a proposta do primeiro MVP;
- definir critérios de sucesso;
- construir uma demonstração original;
- testar antes de divulgar como produto.
