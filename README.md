# 📝 To-Do App Full Stack

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Uma aplicação moderna e completa de gerenciamento de tarefas**

[Sobre](#-sobre) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação) • [Uso](#-uso) • [Docker](#-docker-compose) • [Autor](#-autor)

</div>

---

## 📖 Sobre

O **To-Do App** é uma aplicação full-stack robusta para gerenciamento de tarefas pessoais, desenvolvida com as tecnologias mais modernas do mercado. O projeto oferece uma experiência completa de CRUD (Create, Read, Update, Delete) com autenticação JWT, interface responsiva e design system consistente.

### ✨ Destaques

- 🎨 **Design System Consistente** - Interface moderna com CSS Modules
- 🔐 **Autenticação Segura** - Sistema completo de login/registro com JWT
- 📱 **Responsivo** - Funciona perfeitamente em desktop e mobile
- ⚡ **Performance** - React Query para cache e sincronização otimizada
- 🎯 **Type-Safe** - TypeScript em todo o projeto (frontend e backend)
- 🔔 **Notificações** - Sistema de toast para feedback ao usuário
- ✅ **Validação** - Zod para validação de dados robusta
- 🐳 **Docker Compose** - Configuração simplificada do banco de dados
- 🧪 **Testes** - Testes end-to-end no backend com Jest

---

## 🚀 Funcionalidades

### 👤 Autenticação

- ✅ Cadastro de novos usuários
- ✅ Login com email e senha
- ✅ Autenticação via JWT
- ✅ Proteção de rotas privadas
- ✅ Logout com feedback visual

### 📋 Gerenciamento de Tarefas

- ✅ Criar novas tarefas
- ✅ Listar todas as tarefas do usuário
- ✅ Marcar/desmarcar tarefas como concluídas
- ✅ Deletar tarefas
- ✅ Contador de tarefas criadas e concluídas
- ✅ Interface intuitiva com feedback visual

### 🎨 Interface

- ✅ Design moderno e clean
- ✅ Tema escuro (dark mode)
- ✅ Animações suaves
- ✅ Sistema de notificações toast
- ✅ Saudação personalizada ao usuário
- ✅ Estados de loading e erro tratados


### 📝 Testes

- ✅ Testes end-to-end no backend com Jest

---

## 🛠️ Tecnologias

### Backend

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js" />
      <br>Node.js
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nestjs" width="48" height="48" alt="NestJS" />
      <br>NestJS
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=postgresql" width="48" height="48" alt="PostgreSQL" />
      <br>PostgreSQL
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=prisma" width="48" height="48" alt="Prisma" />
      <br>Prisma ORM
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=docker" width="48" height="48" alt="Docker" />
      <br>Docker
    </td>
  </tr>
</table>

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **NestJS** - Framework Node.js progressivo
- **PostgreSQL** - Banco de dados relacional
- **Prisma ORM** - ORM moderno para Node.js
- **JWT** - Autenticação via JSON Web Tokens
- **Docker Compose** - Containerização do banco de dados

### Frontend

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS" />
      <br>CSS Modules
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=jest" width="48" height="48" alt="Jest" />
      <br>Jest
    </td>
  </tr>
</table>

- **React.js** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilos escopados e modulares
- **React Router** - Roteamento client-side
- **Axios** - Cliente HTTP
- **React Query** - Gerenciamento de estado assíncrono
- **Zod** - Validação de schemas TypeScript-first
- **React Hook Form** - Gerenciamento de formulários
- **Jest** - Testes end-to-end

---

## 📦 Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- Docker e Docker Compose
- npm ou yarn

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/LucasCavalheri/fullstack-todo.git
cd fullstack-todo
```

### 2️⃣ Configuração do Backend

```bash
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Edite o arquivo .env com suas configurações
# DATABASE_URL="postgresql://user:password@localhost:5432/todo_db"
# JWT_SECRET="seu-secret-super-seguro"

# Suba o banco de dados PostgreSQL com Docker Compose
docker-compose up -d

# Execute as migrations do Prisma
npx prisma migrate dev

# (Opcional) Visualize o banco de dados com Prisma Studio
npx prisma studio

# Inicie o servidor
npm run start:dev
```

O backend estará rodando em `http://localhost:3333`

> 💡 **Dica**: O comando `docker-compose up -d` inicia o PostgreSQL em background. Para parar, use `docker-compose down`

### 3️⃣ Configuração do Frontend

```bash
cd frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente (se necessário)
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

---

## 🎯 Uso

### Primeiro Acesso

1. **Acesse** `http://localhost:5173`
2. **Clique** em "Cadastre-se"
3. **Preencha** seus dados (nome, email e senha)
4. **Faça login** com suas credenciais
5. **Comece** a criar suas tarefas!

### Criando Tarefas

1. Digite o título da tarefa no campo de input
2. Clique no botão "Criar" ou pressione Enter
3. Sua tarefa aparecerá na lista abaixo

### Gerenciando Tarefas

- ✅ **Completar**: Clique no círculo à esquerda da tarefa
- 🗑️ **Deletar**: Clique no ícone de lixeira à direita
- 📊 **Acompanhe**: Veja o contador de tarefas criadas e concluídas

### Logout

Clique no botão "Sair" no canto superior direito para fazer logout

---

## 🐳 Docker Compose

O projeto utiliza Docker Compose para facilitar a configuração do banco de dados PostgreSQL.

### Arquivo docker-compose.yml

```yaml
services:
  postgres:
    image: "bitnami/postgresql:latest"
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: "docker"
      POSTGRES_PASSWORD: "docker"
      POSTGRES_DB: "todo"
```

### Comandos Úteis

```bash
# Iniciar o banco de dados
docker-compose up -d

# Ver logs do container
docker-compose logs -f

# Parar o banco de dados
docker-compose down

# Parar e remover volumes (apaga os dados)
docker-compose down -v

# Reiniciar o container
docker-compose restart
```

---

## 📂 Estrutura do Projeto

```
todo/
├── backend/
│   ├── src/
│   │   ├── auth/          # Módulo de autenticação
│   │   ├── tasks/         # Módulo de tarefas
│   │   ├── users/         # Módulo de usuários
│   │   ├── prisma/        # Configuração do Prisma
│   │   └── main.ts        # Entry point
│   ├── prisma/
│   │   └── schema.prisma  # Schema do banco de dados
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/    # Componentes React
    │   ├── contexts/      # Context API (Auth, Toast)
    │   ├── hooks/         # Custom hooks
    │   ├── lib/           # Configurações (axios, toast)
    │   ├── models/        # Tipos TypeScript
    │   ├── pages/         # Páginas da aplicação
    │   ├── schemas/       # Schemas Zod
    │   └── styles/        # Estilos globais
    └── package.json
```

---

## 🎨 Design System

### Paleta de Cores

```css
--gray-700: #0d0d0d
--gray-600: #1a1a1a
--gray-500: #262626
--gray-400: #333333
--gray-300: #808080
--gray-200: #d9d9d9
--gray-100: #f2f2f2

--purple: #8284fa
--purple-dark: #5e60ce
--blue: #4ea8de
--blue-dark: #1e6f9f

--danger: #e25858
--success: #4ade80
--warning: #fbbf24
```

---

## 🔐 API Endpoints

### Autenticação

```http
POST /auth/register
POST /auth/login
```

### Tarefas (Requer autenticação)

```http
GET    /tasks          # Listar todas as tarefas
POST   /tasks          # Criar nova tarefa
PATCH  /tasks/:id      # Atualizar tarefa
DELETE /tasks/:id      # Deletar tarefa
```

---

## 🧪 Testes

```bash
# Backend
cd api
npm run test:e2e
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/LucasCavalheri.png" width="100px" alt="Lucas Cavalheri" style="border-radius: 50%"/>
  <br>
  <strong>Lucas Cavalheri</strong>
  <br>
  <br>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/lucas-cavalheri)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucasCavalheri)
  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lucas.dev.carvalho@gmail.com)
  
</div>

---

## 🙏 Agradecimentos

Obrigado por conferir este projeto! Se você gostou, não esqueça de dar uma ⭐️

---

<div align="center">
  
  **Feito com ❤️ e ☕ por Lucas Cavalheri**
  
  © 2025 - To-Do App Full Stack
  
</div>
