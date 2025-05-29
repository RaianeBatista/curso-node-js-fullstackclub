# Aulao Node.js
![Image](https://github.com/user-attachments/assets/4ae255b7-8c95-443d-a7ca-3a7759023d51)
### Projeto de exemplo para estudo de Node.js, Express, MongoDB e EJS.

## Descrição

Este projeto demonstra uma aplicação básica de cadastro de usuários utilizando:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)

A aplicação permite criar, listar, atualizar e deletar usuários, além de exibir uma lista de usuários em uma página web estilizada.

## Estrutura de Pastas

```
.env
.gitignore
index.js
package.json
person.js
modules/
  express.js
  fs.js
  http.js
  path.js
  test/
    test.txt
src/
  database/
    connect.js
  models/
    user.model.js
  views/
    index.ejs
    partials/
      head.ejs
      navbar.ejs
```

## Instalação

1. Clone o repositório.
2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:

   ```
   MONGODB_USERNAME=seu_usuario
   MONGODB_PASSWORD=sua_senha
   ```

## Uso

Para rodar o projeto em modo desenvolvimento:

```sh
npm run dev
```

Ou para rodar normalmente:

```sh
npm start
```

Acesse a aplicação em [http://localhost:8080/views/users](http://localhost:8080/views/users) para visualizar a lista de usuários.

## Endpoints

- `GET /users` — Lista todos os usuários (JSON)
- `GET /users/:id` — Detalhes de um usuário
- `POST /users` — Cria um novo usuário
- `PATCH /users/:id` — Atualiza um usuário existente
- `DELETE /users/:id` — Remove um usuário
- `GET /views/users` — Exibe a lista de usuários em uma página web

## Licença

ISC

---

> Projeto para fins educacionais — FullStack Club Bootcamp
