# API AdonisJS

Este projeto foi desenvolvido com o intuito de estudar e aplicar os conceitos de **middlewares**, **autenticação** e a estrutura padrão de projetos utilizando o [AdonisJS](https://adonisjs.com/).

---

## 📦 Tecnologias utilizadas

- [AdonisJS](https://adonisjs.com/)
- Node.js
- TypeScript
- SQLite

---

## 🚀 Como rodar o projeto

### 🔧 Instalação local

### 1. Clone o repositório

```bash
git clone https://github.com/FelipeImhoff/api-adonisjs.git
cd api-adonisjs
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` e renomeie para `.env`:

```bash
cp .env.example .env
```

Em seguida, gere a `APP_KEY` com o comando:

```bash
node ace generate:key
```

### 4. Configure o banco de dados

Crie um arquivo chamado `db.sqlite` dentro da pasta `database`:

```bash
mkdir -p database && touch database/db.sqlite
```

> ⚠️ Certifique-se de que o arquivo `db.sqlite` possui permissão de escrita.

### 5. Rode as migrations

```bash
node ace migration:run
```

### 6. Inicie o servidor em modo desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3333`.

### 🐳 Rodando com Docker

### 1. Clone o repositório

```bash
git clone https://github.com/FelipeImhoff/api-adonisjs.git
cd api-adonisjs
```

### 2. Crie o arquivo .env a partir do exemplo

```bash
cp .env.example .env
```

### 3. Gere a chave da aplicação

```bash
docker-compose exec adonis_app node ace generate:key
```

### 4. Crie o banco de dados SQLite (no host)

```bash
mkdir -p database && touch database/db.sqlite
```

### 5. Suba o ambiente

```bash
docker-compose up --build
```

---

## 🧪 Funcionalidades

- Registro de usuários
- Login com autenticação JWT
- Uso de middlewares para rotas autenticadas
- Estrutura de API REST com controle de acesso

---

## 📁 Estrutura do projeto

```
.
├── app
│   ├── Controllers
│   ├── Middlewares
│   └── Models
├── config
├── database
│   ├── db.sqlite
│   └── migrations
├── public
├── start
├── .env.example
├── ace
└── server.ts
```

---

## 🛠️ Em desenvolvimento

Este projeto está em constante evolução com foco em aprendizado. Sinta-se à vontade para contribuir ou enviar sugestões.

---

## 📄 Licença

Este projeto está sob a licença MIT.
