# 🚀 WeSen Technologies

Site institucional da **WeSen Technologies**, uma empresa especializada em desenvolvimento de sites, aplicativos, sistemas personalizados e bots.

Construído com foco em performance, acessibilidade e design responsivo, utilizando **Next.js**, **Tailwind CSS** e integração com **Notion** para captura de briefings através de formulário personalizado.

---

## 📌 Visão Geral

A **WeSen** é uma empresa de tecnologia formada por dois desenvolvedores apaixonados por soluções digitais simples, funcionais e estratégicas. Nosso site apresenta nossos serviços, valores e possibilita que novos clientes enviem seus projetos por meio de um formulário integrado ao Notion.

---

## 🛠️ Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Notion API](https://developers.notion.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/) para deploy

---

## 🧩 Funcionalidades

- ✅ Landing Page moderna e responsiva
- ✅ Seção de serviços e metodologia de trabalho
- ✅ Integração com base de dados do **Notion** para receber briefings de clientes
- ✅ Componentes reutilizáveis e acessíveis
- ✅ Animações e efeitos visuais com Tailwind
- ✅ SEO otimizado com metadados e Open Graph

---

## 📁 Estrutura do Projeto

├── app
│ ├── contato # Página de contato com formulário
│ ├── ui # Componentes reutilizáveis (hero, about, etc.)
│ └── layout.tsx # Layout principal e fontes
├── pages/api/briefing.ts # API Route para enviar dados ao Notion
├── public/icons # Ícones utilizados no site
├── styles # Estilizações globais e fontes
└── .env.local # Variáveis de ambiente (Notion API)


---

## 🔐 Configuração do Notion

Para que o formulário envie os dados ao seu CRM no Notion, é necessário:

1. Criar um banco de dados no Notion com os campos:
   - Empresa
   - Responsável
   - Telefone
   - Email
   - Descrição do projeto

2. Obter um **integration token** e compartilhar o banco de dados com ele.

3. Adicionar as variáveis no arquivo `.env.local`:

```env
NOTION_TOKEN=your-secret-token
NOTION_DATABASE_ID=your-database-id
````
# Clone o repositório
git clone https://github.com/seu-usuario/wesen-technologies.git

# Acesse a pasta do projeto
cd wesen-technologies

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev

🌐 Deploy
O site está hospedado gratuitamente na Vercel. Para fazer o deploy, basta conectar o repositório e definir as variáveis de ambiente no painel da Vercel.
