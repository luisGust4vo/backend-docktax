# Projeto Backend com JWT e Prisma

![Node.js Logo](https://nodejs.org/static/images/logos/nodejs-identity.svg)
Este projeto backend foi desenvolvido com **Node.js**, **Express**, **TypeScript**, **Prisma**, **JWT** (JSON Web Token), **bcrypt** para segurança, e **dotenv** para gerenciamento de variáveis de ambiente. Ele serve como base para APIs seguras com autenticação baseada em tokens.

## 🚀 Tecnologias e Dependências

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web minimalista para Node.js, usado para criar rotas e gerenciar requisições HTTP.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e segurança do código.
- **Prisma**: ORM (Object Relational Mapping) para facilitar a comunicação com bancos de dados.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env` para configurar o ambiente de execução.
- **jsonwebtoken**: Biblioteca para criação e verificação de tokens JWT, utilizada para autenticação.
- **bcrypt** e **bcryptjs**: Bibliotecas para criptografar senhas de forma segura, utilizando o algoritmo bcrypt.
- **Joi**: Biblioteca para validação de dados de entrada (como corpo de requisição ou parâmetros de rota).

## 🏗️ Estrutura do Projeto

/src /controllers # Controladores para gerenciar a lógica das rotas /routes # Definição das rotas da API /services # Serviços responsáveis pela lógica de negócio /middlewares # Middlewares, como autenticação e verificação de permissões /models # Definições de modelos de dados (Prisma) /utils # Funções auxiliares e utilitárias server.ts # Arquivo principal para inicializar o servidor Express app.ts # Configuração do servidor e rotas .env # Arquivo de variáveis de ambiente .gitignore # Arquivo para ignorar arquivos/diretórios do Git

## 💻 Como Rodar o Projeto

### 1. Instalar dependências

Execute o seguinte comando para instalar todas as dependências do projeto:

```bash
npm install
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias. Exemplo:
SECRET_KEY=suachavesecreta
DATABASE_URL="sua_string_de_conexao_prisma"

Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias. Exemplo:
SECRET_KEY=suachavesecreta
DATABASE_URL="sua_string_de_conexao_prisma"
Nota: A variável SECRET_KEY será usada para gerar e verificar os tokens JWT.

3. Rodar o projeto
Para rodar o servidor em modo de desenvolvimento, execute:
npm run dev

Se você estiver usando Prisma, para criar as tabelas no banco de dados, execute o seguinte comando:
npx prisma migrate dev
5. Exemplos de Endpoints
POST /login: Faz o login e retorna um token JWT.

Exemplo de corpo da requisição (JSON):
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
Resposta (se sucesso):
{
  "token": "seu_token_jwt_aqui"
}
Com o token, você pode acessar outras rotas protegidas.

📄 Licença
Este projeto está licenciado sob a licença ISC. Consulte o arquivo LICENSE para mais detalhes.

Agora você pode copiar todo esse bloco diretamente para o seu arquivo `README.md`.
```
