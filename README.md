<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">
<img src="" width="80%" height="50%"/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

<p align="justify">Este projeto nasceu da minha vontade imensa de ajudar as pessoas. Nessa pandemia, observei que os pedidos de ajuda por meio das redes sociais, aumentaram em demasiado. Como já tinha a ideia de construir um projeto que me abrisse oportunidades para construir uma ONG no futuro, aproveitei desta oportunidade.

<p align="justify">Apesar do aumento da desigualdade e do desemprego, há pessoas que também se disponibilizam a ajudar, então o objetivo principal da construção dessa API, é a conexão dessas pessoas que precisam de ajuda, com as pessoas que têm a possibilidade de ajudar. Por meio de doações de cestas básicas, ou até mesmo, transfêrencia bancária via pix. Sempre com a preocupação de proteção dos dados de quem busca ajuda e de quem busca ajudar.

<p align="justify">Com o pensamento no futuro de se tornar um projeto grande e viável para a criação de um espaço seguro, que essas pessoas em situação de vulnerabilidade social possam ter oportunidades melhor, de ajuda de todas os tipos, e não só de doações, mas com uma possibilidade de contratações, como implementação futura.

<br><br>

## 🚀 Descrição da API Cestas Solidárias

<br>

<p align="justify">O projeto é uma API REST que permite que pessoas em situação de vulnerabilidade social, consiga se cadastrar, informando seus dados e descrevendo informações sobre a sua situação atual, de forma objetiva, para que haja a conecxões com pessoas ou projetos sociais, que estejam procurando formas de ajudar, contendo assim dois cadastros, um para as pessoas que precisam de ajuda, outro para as pessoas que podem ajudar e querem fazer uma busca de quem precisa, tendo assim uma opção de login para estas que buscam ajudar, para assim conseguir acesso as informações de quem está cadastrado no sistema.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os usuários, tanto que precisam de auxílio e quem pode dar este auxílio, cadastrar novos usuários, atualizar os dados e deletar o cadastro do usuário. Tudo isso passando por uma autenticação, gerando um token que permite ou não o acesso as pessoas que estarão no sistema.

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)
  
<br>

## 🔗 Link 

- [Apresentação](Link em breve)

<br>

## ⚙️ Funcionalidades/Objetivos

- Listar todas as pessoas que estão cadastradas no sistema;
- Conseguir puxar as pessoas por uma rota privada;
- Cadastrar pessoas que estejam em caso de vulnerabilidade social e pessoas que possam oferecer um auxílio;
- Atualizar os dados dessa pessoa, caso haja mudança de bairro, pix, email, celular;
- Deletar essa pessoa caso não seja mais necessário este suporte a mesma ou a pessoas cadastrada não consiga mais ajudar;
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

<br>

## 📁 Arquitetura MVC 

```
 📁 cestas-solidarias
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 cestasSolidariasController.js
   |         |- 📑 loginUsuarioController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 helpers
   |         |- 📑 authCestasSolidarias.js
   |
   |    |- 📁 middlewares
   |         |- 📑 authCestasSolidarias.js
   |
   |    |- 📁 models
   |         |- 📑 cestasSolidariasSchema.js
   |         |- 📑 loginUsuarioSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 cestasSolidariasRoutes.js 
   |         |- 📑 indexRoutes.js
   |         |- 📑 loginUsuarioRoutes.js
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:9095

* Heroku: 

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna a documentação no swagger: 
    
Swagger - Heroku: 

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `http://localhost:9095/api-docs`    |  documentação  swagger               |        

<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:9095/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Usuários que serão ajudados:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/users`                | Retorna todos os usuários            |
| GET          | `/users/private`        | Retorna todos os dados               |
| POST         | `/users/create`         | Cria/cadastra um novo usuário        |
| PUT          | `/users/update/:id`     | Altera informações de um usuário     |
| DELETE       | `/users/delete/:id`     | Deleta um usuário específico         |

<br>

## 🔃 Manipulação das Rotas das pessoas que fizeram Login:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/helpers`            | Retorna todos os usuários                  |
| GET          | `/helpers/private`    | Retorna todos os dados sem restrição       |
| POST         | `/helpers/register`   | Cria um novo cadastro/login                |
| POST         | `/helpers/login `     | Faz o login                                |
| PUT          | `/helpers/update/:id` | Altera informações de um usuário           |
| DELETE       | `/helpers/delete/:id` | Deleta um usuário específico               |

<br>



## ✅ Dados para Collection Cestas Solidarias:

- id: gerado automaticamente 
- nome: texto e obrigatório
- email: texto e obrigatório 
- celular: número e obrigatório
- whatsapp: booleano e obrigatório
- cpf: número e obrigatório 
- bairro: texto e obrigatório 
- pix: texto e obrigatório 
- termosDeUso: texto e obrigatório
- informacao: texto e obrigatório  
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "name": "Henrique Neves",
    "email": "henriqueneves2@hotmail.com",
    "celular": 81989697427,
    "whatsapp": true,
    "cpf": 11111111159,
    "bairro": "cordeiro",
    "pix": "(81)989697427",
    "termosDeUso": true,
    "informacao": "Três filhos, desempregado, sem alimentos em casa, necessitando urgente de ajuda com cestas básicas ou qualquer tipo de doação"
}
```
 <br>

 ## ✅ Dados para Collection Login

- id: gerado automaticamente 
- nome: texto e obrigatório
- cpf: número e obrigatório
- email: texto e obrigatório
- password: texto e obrigatório
- termosDeUso: texto e obrigatório


<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "messagem": "Pessoa cadastrada com sucesso",
    "saveUser": {
        "name": "Leonardo Santos",
        "cpf": 22233344455,
        "email": "leosantos@gmail.com",
        "password": "$2b$10$WzaS5slVUC2HuQmKx/rVOuOYPIqNpO4nYCSntnJfYZEL3ig4O1s1G",
        "_id": "61b3c7936897b5137880ba5a",
        "createdAt": "2021-12-10T21:33:07.344Z",
        "updatedAt": "2021-12-10T21:33:07.344Z",
        "__v": 0
    }
}
```

<br>


## 🚧 Melhorias para o futuro (Em construção)

<br>

*  Implantação de código Front-end, com ReactJs ou AngularJs. Para o usuário ter a interação na tela.
* Acrescentar no banco de dados, uma requisição que grava o ID de quem está logado, para segurança de quem está cadastrado.



Estou aberta a opiniões, caso queiram contribuir com meu projeto.

<br>

## 👨‍💻 Autora

<br>

<td align="center"><a href="https://github.com/HannahFreitas">
<img style="border-radius: 20%;" src="https://avatars.githubusercontent.com/u/80156310?v=4" width="200px;" alt=""/> </td><br> 


## [Hannah Freitas](https://github.com/HannahFreitas)
## [LinkedIn](https://www.linkedin.com/in/hannahcfreitas/) 

<br>
 

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).