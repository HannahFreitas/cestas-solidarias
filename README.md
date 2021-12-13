<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">
<img src="./assets/cestas-solidarias.gif" width="350" height="300"/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Paula Allemand para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Este projeto nasceu da minha vontade imensa de ajudar as pessoas. Nessa pandemia, observei que os pedidos de ajuda por meio das redes sociais, aumentaram em demasiado. Como já tinha a ideia de construir um projeto que me abrisse oportunidades para construir uma ONG no futuro, então aproveitei esse momento.

<p align="justify">Apesar do aumento da desigualdade e do desemprego, há pessoas que também se disponibilizam a ajudar, então o objetivo principal da construção dessa API, é a conexão dessas pessoas que precisam de ajuda, com as pessoas que têm a possibilidade de ajudar. Por meio de doações de cestas básicas, ou até mesmo, transfêrencia bancária via pix. Sempre com a preocupação de proteção dos dados de todos os envolvidos.

<p align="justify">Com o pensamento no futuro de se tornar um projeto grande e viável para a criação de um espaço seguro, que essas pessoas em situação de vulnerabilidade social possam ter oportunidades melhor, de ajuda de todas os tipos, e não só de doações, mas com uma possibilidade de contratações, como implementação futura.

<br><br>

## 🚀 Descrição da API Cestas Solidárias

<br>

<p align="justify">O projeto é uma API REST que permite que pessoas em situação de vulnerabilidade social, consigam se cadastrar, informando seus dados e descrevendo informações sobre a sua situação atual, de forma objetiva, para que haja a conexões com pessoas ou projetos sociais, que estejam procurando formas de ajudar, contendo assim dois cadastros, um para os beneficiários, e outro para os doadores que querem fazer uma busca de quem necessita ser beneficiado, tendo assim uma opção de login para estas que buscam ajudar, conseguingo acesso as informações de quem está cadastrado no sistema.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os usuários, tanto que precisam de auxílio e quem pode dar este auxílio, cadastrar novos usuários, atualizar os dados e deletar o cadastro do usuário. Tudo isso passando por uma autenticação, gerando um token que permite ou não o acesso as pessoas que estarão no sistema.


  
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

* Heroku: https://cestas-solidarias.herokuapp.com/

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

## 🥰 Agradecimentos:

<p align="justify"> O que não pode faltar em um projeto? Isso mesmo, as considerações finais! Esse ano pra mim foi uma loucura, eu realmente decidi entrar de cabeça no que sempre amei e tocar pra frente meus planos de seguir em uma área que sempre fui fascinada. De imediato, minha noiva, sempre muito prestativa, me apoiou em todas as minhas decisões, mesmo que significasse menos tempo comigo, pois cá estou sempre me matando de estudar. Então primeiramente gostaria de agradecer a ela, por tudo que ela sempre tem feito, por toda a compreensão, por todo auxílio e amor. 

<p align="justify"> Após toda essa minha decisão, conheci a reprograma sem querer, e decidi tentar como quem não quer nada, não muito confiante, pois ainda não acredita ser capaz de ser uma (como diz Andréa), reprogramer. Me inscrevi e minha maior surpresa foi a aprovação no meio de tanta candidatura e no meio de tanta gente boa. Logo de início, quis criar um vínculo forte com a minha turma, pois queria viver a experiência completa de ser uma reprogamer, e assim o fiz, e aqui vem os meus agradecimentos, "SPOILER": A lista vai ser longa! 

- [Amanda Santos](https://www.linkedin.com/in/amandasantos24/)
- [Ana Carolliny](https://www.linkedin.com/in/anacarolliny/)
- [Andrea Carvalho](linkedin.com/in/andrea-carvalho-/)
- [Camila Vicente](https://www.linkedin.com/in/lamivicente/)
- [Clarice Hatischvili](https://www.linkedin.com/in/claricemha/)
- [Daniele Vilares](https://www.linkedin.com/in/daniele-vilares-9ab876223/)
- [Darielly Santos](https://www.linkedin.com/in/darielly-santos/)
- [Deborah Gomes](https://www.linkedin.com/in/deborahgomes123/)
- [Edilaine Silva](https://www.linkedin.com/in/edilaine-silva-a683a1105/)
- [Erika Freitas](https://www.linkedin.com/in/%C3%A9rika-de-freitas-b63331ba/)
- [Estefanya Alves](https://www.linkedin.com/in/estefanya-alves/)
- [Ester Silva](https://www.linkedin.com/in/ester-silvade/)
- [Ingrydt Alcântara](https://www.linkedin.com/in/ingrydtalc%C3%A2ntara/)
- [Jaciara Feio](https://www.linkedin.com/in/jaciara-feio/)
- [Janaina Lopes](https://www.linkedin.com/in/janainalopes-dev/)
- [Jeniffer Alves](https://www.linkedin.com/in/jeniffer-a-472230107/)
- [Julia Borges](https://www.linkedin.com/in/juliarebeccaborges/)
- [Juliana Santana](https://www.linkedin.com/in/juliana-santana-53a630b9/)
- [Kamila Lima](https://www.linkedin.com/in/kamila-lima-14299b150/)
- [Kelly Vieira](https://www.linkedin.com/in/kelly-vieira/)
- [Letícia Desiderio](https://www.linkedin.com/in/leticiardesiderio/)
- [Mabiá - Priscila Duarte](https://www.linkedin.com/in/prisciladuarte1993/)
- [Rafaela Siglyane](https://www.linkedin.com/in/siglyane/)
- [Raissa Nepomuceno](https://www.linkedin.com/in/ra%C3%ADssa-nepomuceno/)
- [Ravena Maia](https://www.linkedin.com/in/ravena-maia-367a45162/)
- [Samila Rodrigues](https://www.linkedin.com/in/samila-rodrigues/)
- [Samara Silva](https://www.linkedin.com/in/samarac-silva/)
- [Talita Rosa](https://www.linkedin.com/in/talitarosamistica/)
- [Victoria Rezende](https://www.linkedin.com/in/victoriarezende253/)
- [Victoria Paiva](https://www.linkedin.com/in/victoriarsp/)
- [Xênia Barreto](https://www.linkedin.com/in/xeniabarreto/)
- [Yara Viana](https://www.linkedin.com/in/yaralviana/)

**Não encontrei o Linkedin de todas, por isso atualizarei todas no futuro**

<p align="justify"> VOCÊ RECRUTADOR, ISSO MESMO, VOCÊ QUE PODE ESTAR AQUI NO PERFIL, CONTRATA MINHAS MENINAS!!!!!!! 

<p align="justify"> Bem, agradeço quem chegou até aqui, e teve a paciência de ler tudo que escrevi, agora que agradecer as mulheres maravilhosas da minha vida, que me orientaram, que me mostraram o caminho e principalmente que: LUGAR DE MULHER É ONDE ELA QUISER! Obrigada, a todas vocês que fizeram de tudo para nos mostrar como seguir, ser forte, não desistir e o não menos importante, como codar! Aqui vai um pequena lista das minhas deusas possuidora de todo conhecimento: 

- [Raquel Andrade](https://www.linkedin.com/in/raquelbennington/) - A pessoa que realmente facilita minha vida
- [Jéssica Osko](https://www.linkedin.com/in/jessica-osko/) - Essa mulher, é aquela que é literalmente sua sombra, ela sempre está de observando e te ajudando mesmo sem você ter nem ideia
- [Tabita Barbosa](https://www.linkedin.com/in/tabita-barbosa/) - Primeira professora e inesquecível né? Quem esquece o primeiro erro com git? KKKKKKKK
- [Paula Allemand](https://www.linkedin.com/in/paulaallemand/) - Além de me proporcionar um workshop incrível, ainda foi uma professora maravilhosa no dia a dia.
- [Beatriz Ramerindo](https://www.linkedin.com/in/beatriz-ramerindo/) - Achei que depois que tu mostrasse o banco de dados eu iria surtar, mas seguimos aqui no amor intacto.
- [Lilit Bandeira](https://www.linkedin.com/in/lilitbandeira/) - Async e Await até hoje está nos meus pesadelos, mas graças a você fez todo o sentido do mundo!!
- [Tassila Bomfim](https://www.linkedin.com/in/tassilabomfim/) - Primeiro projeto guiado a gente nunca esquece, nem parece que tu tava nervosa, arrasa sempre!
- [Edlaine Pontes](https://www.linkedin.com/in/edlaine-pontes/) - Nos mostrando a base com o seu projeto incrível.
- [Keyla Rosa](https://www.linkedin.com/in/keyla-rosa-34abb190/) - Que nos deu a base de toda uma lógica e foi sensacional.
- [Analu](https://www.linkedin.com/in/sampaioaanaluiza/) - Analu, obrigada pela paciência de ensinar um CRUD do zero, graças a você o CRUD ta ai!

**Sou extremamente grata a vocês e amo cada uma de vocês da minha forma louca, obrigada!**

<p align="justify"> E quero agradecer a todas as monitoras que tiverem presente nessa trajetória pra nos auxiliar, mas quero agradecer a uma em especial, pois sempre se colocou a minha disposição, sempre me ajudou da melhor forma que poderia, eu me guiei pelo projeto dela e além de tudo, é super inteligente, RECRUTADORES, SE ELA NÃO TIVER EMPREGADA OU MESMO SE TIVER, LUTEM POR ELA, ESSA É A OPORTINUDADE DE VOCÊS!!!! Obrigada, Bete, por tudo e pra você, além de link do Linkedin, em especial, dedicarei o meu projeto ao seu, OBRIGADA: 

- [Elisabete Santos](https://www.linkedin.com/in/elisabete-a-santos/)
- [Estante de Histórias](https://github.com/elisabetealves/reprograma-estante-de-historias)
 

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).