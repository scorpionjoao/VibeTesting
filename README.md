# Conexão Terapêutica

Aplicativo voltado para psicólogas que desejam acompanhar o progresso clínico de suas pacientes de forma estruturada. Este repositório contém uma implementação inicial de backend usando Node.js e Express, além de um resumo das funcionalidades planejadas para o aplicativo móvel.

## Funcionalidades principais

- **Registro de Humor e Sintomas**: pacientes registram emoções, sintomas e atividades diárias. Os dados podem ser consultados em formato de gráfico para análise de tendências.
- **Journaling Guiado (opcional)**: utiliza um modelo de linguagem para orientar o paciente a relatar o dia, oferecendo suporte emocional estruturado.
- **Exercícios de Psicologia Clínica**: baseados em abordagens como CBT e mindfulness.
- **Lembretes e Motivação**: notificações ajudam a manter o engajamento entre sessões.
- **Agenda e Feedback Seguro**: gerenciamento de sessões e espaço para feedback após cada consulta.
- **Gamificação Leve**: premiações por registro contínuo e conclusão de exercícios.
- **Biblioteca de Conteúdo**: áudios e materiais de psicoeducação para reforçar o aprendizado.

## Estrutura do projeto

```
server/        # Backend em Node.js/Express
  package.json
  server.js
  data.json    # Armazena registros simples (apenas para demonstração)
```

O backend expõe rotas para registrar humor (`POST /api/mood`), listar registros (`GET /api/mood`) e um endpoint de journaling guiado (`POST /api/journal-guided`).

## Executando localmente

1. Acesse a pasta `server` e instale as dependências (requer Node.js):
   ```bash
   cd server
   npm install
   ```
2. Inicie o servidor na mesma pasta:
   ```bash
   npm start
   ```

O servidor iniciará na porta `3000` por padrão.

## Próximos passos

1. Criar aplicativo móvel (React Native ou Flutter) consumindo as rotas acima.
2. Persistir os dados em um banco seguro (ex.: Firebase) e adicionar autenticação.
3. Implementar testes automatizados e integração contínua.

