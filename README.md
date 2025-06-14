#  Clipping AI 🚀

## 📝 Descrição

A **Clipping AI** é uma plataforma web completa desenvolvida para agências de comunicação e profissionais de assessoria de imprensa. A aplicação permite a gestão de clientes, o lançamento de matérias de clipping, o registo de atividades da agência (como releases e notas) e a geração de relatórios de desempenho detalhados e personalizáveis em PDF.

O sistema conta com autenticação de usuários e um sistema de permissões baseado em funções (roles), garantindo que cada usuário tenha acesso apenas às suas informações ou, no caso de administradores, a todos os dados da plataforma.

**Link para o projeto ao vivo:** [clippingai.netlify.app](https://684c0ed4bce3a50bfa343cd4--clippingai.netlify.app/)

## ✨ Funcionalidades Principais

* **Autenticação de Usuários:** Sistema de login e registo seguro.
* **Dashboard Central:** Acesso rápido a todas as funcionalidades principais.
* **Gestão de Clientes:** CRUD completo para adicionar, visualizar, editar e apagar clientes.
* **Lançamento de Clipping:** Formulário para adicionar matérias com detalhes como veículo, data, classificação e anexos.
* **Registo de Atividades:** Permite documentar ações de assessoria, como envio de releases.
* **Gestão de Veículos:** Base de dados compartilhada de veículos de comunicação.
* **Sistema de Permissões:** Perfis de Administrador e Atendimento com diferentes níveis de acesso.
* **Gerador de Relatórios:** Ferramenta para criar relatórios em PDF, com gráficos e dados filtrados por cliente e mês.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Estilização:** Tailwind CSS
* **Backend & Base de Dados:** Supabase (PostgreSQL, Auth, Storage, Edge Functions)
* **Bibliotecas JavaScript:**
    * `Chart.js` para a visualização de dados e gráficos.
    * `html2pdf.js` para a exportação de relatórios para PDF.
* **Hospedagem:** Netlify

## 🚀 Como Executar o Projeto

Para executar este projeto, basta abrir os arquivos `.html` diretamente no seu navegador, uma vez que não requer um processo de build.

1.  Faça o clone do repositório:
    `git clone https://github.com/seu-usuario/plataforma-clipping-ai.git`
2.  Navegue até a pasta do projeto:
    `cd plataforma-clipping-ai`
3.  Abra o arquivo `index.html` no seu navegador preferido.

*(Nota: A interacção com o banco de dados Supabase e as Edge Functions requer que as credenciais e configurações no código estejam ativas.)*

