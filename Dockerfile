FROM node:24

WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta padrão do AdonisJS
EXPOSE 3333


# Comando padrão para ambiente de desenvolvimento
CMD ["sh", "-c", "node ace migration:run && npm run dev"]

