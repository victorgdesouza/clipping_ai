# Clipping AI 🤖✨

![Clipping AI](<blockquote class="imgur-embed-pub" lang="en" data-id="BerTan4"><a href="https://imgur.com/BerTan4">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>) 
*<p align="center">Sugestão: Substitua o link acima por um screenshot da tela de login ou do dashboard do seu app.</p>*

<p align="center">
  <a href="https://app.netlify.com/sites/clippingai/deploys">
    <img src="https://img.shields.io/netlify/d1f9d5a8-xxxx-xxxx-xxxx-xxxxxxxxxxxx?style=for-the-badge" alt="Status do Deploy">
  </a>
  <img src="https://img.shields.io/github/license/victorgdesouza/clipping_ai?style=for-the-badge" alt="Licença">
  <img src="https://img.shields.io/github/last-commit/victorgdesouza/clipping_ai?style=for-the-badge" alt="Último Commit">
</p>

> Sistema inteligente para gestão de clippings, atividades e geração de relatórios de comunicação, potencializado com Inteligência Artificial.

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-como-executar-o-projeto">Como Executar</a> •
  <a href="#-licença">Licença</a>
</p>

## ✨ Funcionalidades

O **Clipping AI** é uma plataforma completa para profissionais de comunicação e assessoria de imprensa, oferecendo um fluxo de trabalho otimizado e relatórios inteligentes.

#### 📋 Gestão e Lançamentos
- **Lançamento de Clipping:** Cadastre matérias de mídia com informações detalhadas: cliente, veículo, data, classificação (positiva, neutra, negativa), jornalista, editoria, e mais.
- **Edição e Exclusão:** Altere ou remova lançamentos de clipping diretamente da lista de entradas recentes para garantir a precisão dos dados.
- **Anexo de Mídia:** Faça o upload de imagens (JPG, PNG) ou documentos (PDF) dos clippings para um registro visual completo.
- **Cadastro de Atividades:** Registre todas as atividades de comunicação realizadas para cada cliente, como follow-ups, reuniões e mailings.
- **Gestão de Clientes e Veículos:** Mantenha uma base de dados centralizada de clientes e veículos de mídia, com funcionalidades completas de CRUD (Criar, Ler, Atualizar, Deletar).

#### 🚀 Inteligência Artificial e Relatórios
- **Relatórios de Desempenho:** Gere relatórios mensais completos por cliente, com visualização de dados e gráficos.
- **Resumo com IA (Gemini):** Crie automaticamente um parágrafo de "Overview do Mês" com base nos dados de clipping, utilizando a API do Google Gemini.
- **Sugestão de Próximos Passos com IA:** Receba sugestões estratégicas de ações de comunicação, assessoria e marketing, geradas pela IA com base no perfil do cliente e nos resultados do período.
- **Visualização de Dados:** Acompanhe o desempenho através de gráficos interativos:
    - Análise de sentimento (matérias positivas, negativas e neutras).
    - Top 5 veículos com mais inserções.
    - Evolução de clippings ao longo do mês.
- **Exportação para PDF:** Exporte relatórios completos e profissionais em formato PDF com um único clique.

#### 🔐 Administração e Controle
- **Autenticação Segura:** Sistema de login e gerenciamento de sessão utilizando Supabase Auth.
- **Painel de Administração:** Uma área restrita para administradores gerenciarem usuários.
- **Criação de Usuários:** Administradores podem criar novas contas de usuário, que por padrão recebem a permissão de "atendimento".
- **Dashboard Central:** Uma tela inicial que centraliza o acesso a todas as funcionalidades do sistema.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas de front-end e um backend robusto como serviço (BaaS).

- **Front-End:**
  - **HTML5** e **CSS3**
  - **Tailwind CSS:** Para uma estilização rápida e responsiva.
  - **Vanilla JavaScript (ES6+):** Para toda a lógica de interação e dinamismo da aplicação.

- **Backend como Serviço (BaaS):**
  - **Supabase:**
    - **PostgreSQL Database:** Para armazenamento de todos os dados da aplicação.
    - **Supabase Auth:** Para gerenciamento de autenticação e usuários.
    - **Supabase Storage:** Para upload e armazenamento de arquivos (logos e imagens de clippings).
    - **Supabase Edge Functions (Deno):** Para lógica de backend segura, como a criação de usuários.

- **APIs e Bibliotecas:**
  - **Google Gemini API:** Para as funcionalidades de geração de texto por IA.
  - **Chart.js:** Para a criação dos gráficos nos relatórios.
  - **html2pdf.js:** Para a exportação dos relatórios para o formato PDF.

## 🏁 Como Executar o Projeto

Para executar uma cópia deste projeto localmente, siga os passos abaixo.

#### Pré-requisitos
- Ter uma conta no [Supabase](https://supabase.com/).
- Ter o [Supabase CLI](https://supabase.com/docs/guides/cli) instalado em sua máquina.
- Ter uma chave de API para o [Google Gemini](https://ai.google.dev/).

#### Passos

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/victorgdesouza/clipping_ai.git](https://github.com/victorgdesouza/clipping_ai.git)
   cd clipping_ai
