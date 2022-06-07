# POSTS API

* #### Para iniciar o projeto primeiro rodar o comando no terminal
```
git clone https://github.com/crislainesc/POSTS_API.git
```

* #### Em seguida, no diretório raiz do projeto
```
yarn install
ou
npm install
```
* #### Criar e configurar arquivo .env de acordo com o arquivo .env.example

* #### Configurar e executar o banco de dados 
  - Ferramenta utilizada [laragon](https://laragon.org/download/)
  - Executar mysql e criar um banco de dados chamado **default**

* #### Para criar as tabelas em seu banco de dados
```
node ace migration:run
```

* #### Para popular as tabelas no banco de dados com usuário e posts
```
node ace db:seed
```

* #### Para iniciar o servidor e observar as alterações
```
node ace serve --watch
```

* #### As endpoints foram feitas utilizando a ferramenta [insomnia](https://insomnia.rest/download)
  - Estarão na raiz desse projeto, você deve importá-lo seu insomnia, caso utilize a ferramenta. O nome do arquivo é **endpoints.json**. Após realizar login, atualizar o token nas variáveis de ambiente do insomnia.

* #### Rotas da API

  - Url base: `localhost:3000`
  - Versão: `v1`
 
  <br/>
  
  |Tipo|Rota|Descrição|Retorno|
  |--|--|--|--|
  |POST|`/login`|Realizar login|JSON com o token e email do usuário|
  |OPTIONS|`/v1/options`|Consultar options|Retorno de quais as opções de requisição são permitidas|
  |HEAD|`/v1/head`|Solicitar informação sobre um post|Status code indicando se o post existe|
  |GET/HEAD|`/v1/posts/`|Listar todos os posts|JSON com todos os posts|
  |POST|`/v1/posts`|Criar novo post|JSON do post criado|
  |GET|`/v1/posts/:id`|Buscar post por id|JSON do post|
  |PUT/PATCH|`/v1/posts/:id`|Editar os dados de um post|JSON do post|
  |DELETE|`/v1/posts/:id`|Deletar um post existente|Sem retorno|
