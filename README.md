# CRUD AdonisJS

* #### Para rodar o projeto primeiro rodar o comando no terminal
```
git clone https://github.com/crislainesc/CRUD_WITH_ADONISJS.git
```

* #### Em seguida, no diretório raiz seu projeto
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

* #### Para iniciar o servidor e observar as alterações
```
node ace serve --watch
```

* #### As endpoints foram feitas utilizando a ferramenta [insomnia](https://insomnia.rest/download)
  - Estarão na raiz desse projeto, você deve importá-lo seu insomnia, caso utilize a ferramenta. O nome do arquivo é **endpoints.json**
