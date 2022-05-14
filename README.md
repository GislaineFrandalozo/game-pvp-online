# #️ game-pvp-online 

 :octocat: Este projeto foi desenvolvido exclusivamente para fins didáticos.
 
> ### 📌 Descrição
> Este projeto é a parte que compõe o **front end** de uma aplicação de **jogo da velha** online de jogador contra jogador. **A aplicação ainda está em desenvolvimento** neste documento contém todas as tarefas já desenvolvidas, ferramentas utilizadas e como rodar o projeto na sua máquina local. 

### ✨ Tecnologias utilizadas

<a href="https://pt-br.reactjs.org/"><img src="https://img.shields.io/badge/react-v17-blue"></a> <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/react--router--dom-v6-informational"></a> <a href="https://react-bootstrap.github.io/"><img src="https://img.shields.io/badge/react--bootstrap-v2-9cf"></a> <a href="https://axios-http.com/"><img src="https://img.shields.io/badge/axios-v0.25-ff69b4"></a> <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/bootstrap-v5-blueviolet"></a>

### ✔️ Tarefas concluídas

  - Layout página de cadastro e login.
  - Validação do formulário.
  - Integração com back end completa na página de cadastro e login.
  - Feedback completo para os usuários, com recursos de redirecionamento.
  - Informações do usuário salvo na local storage.
  
### 🔥 Iniciando o projeto

> #### Servidor back end
> Primeiro você vai precisar **rodar o servidor na sua rede local**. Abaixo o link do projeto, no readme do mesmo você irá encontrar a descrição de como rodar em sua máquina.
> [Clique aqui.](https://github.com/Muriel-Gasparini/flash-chat-io-be)

- 👍 Servidor rodando abra este projeto no terminal e digite:
  * `$ yarn install`
  *  `$ yarn start`

Pronto! O projeto irá abrir no endereço <a href="http://localhost:3000/">http://localhost:3000/</a> utilizando seu navegador padrão!

### Utilizando a aplicação

 #### Como um usuário:

  1. Acesse <a href="http://localhost:3000/sign-up">http://localhost:3000/sign-up</a>. Realize um cadastro na aplicação (todos os campos são obrigatórios). 
  2. Caso tudo esteja correto você será redirecionado para o login. Caso algum campo esteja incorreto você receberá notificações a respeito do que pode estar errado.
   * A tela de login se parece com essa:
    <p><img src="https://user-images.githubusercontent.com/86322789/168440574-fa962d1e-83ad-4c93-8e74-ad6c457e4c76.png" height="200"></p>   
   * As notificações que devem aparecer no canto inferior direito da sua tela (caso esteja em um aparelho desktop) são como por exemplo essa:
    <p><img src="https://user-images.githubusercontent.com/86322789/168440631-e18a9144-46a5-44d7-8438-367446153d92.png" height="100"></p>
  3. Depois de criado o cadastro realize login para se autenticar no servidor.
  4. Caso as credenciais estejam corretas você será redirecionado para página inicial do jogo, porém, está ainda está em processo de desenvolvimento, seus dados são estáticos e não há nenhuma funcionalidade desenvolvida.

 #### Como desenvolvedor:
 
   * `src/components/form.jsx`
    <blockquote> Este componente foi desenvolvido de forma que possa ser utilizado tanto na página de entrada na aplicação quanto na de cadastro</blockquote>
    <p> 1. As variáveis chave para sua montagem e comportamentos está declarada em <code>src/pages/pageLogin.jsx</code> e <code>src/pages/pageSignUp.jsx</code> (estes são os componentes que montam estas páginas). Os atributos dos inputs são declarados nestes arquivos na variável <code>inputsForm</code>, mas são montados em <code>src/components/input.jsx</code>. Ali é feito um <code>map</code> no vetor declarado em <code>inputsForm</code>, ou usa um valor padrão declarado neste arquivo em <code>metadatas</code>.
     <br><em>a. Caso tenha declarado um imput com <code>type: "file"</code> o código irá criar uma miniatura para receber um "preview" da imagem, mas a função de <code>onChange</code> passada nos inputs que tem a funcionalidade de atualizar a imagem dentro da miniatura.</em></p> 
     <p> 2. Todos os campos são obrigatórios, existe validação dos campos no front end, mas também esxiste no back end.
 <br><em>   a. Validação dos campos é feita em <code>inputTag.checkValidity()</code> na linha 26 do arquivo <code>form.jsx</code> </em> </p>
     <p> 3. Depois da requisição post existe uma condicional com relação a qual rota no servidor que foi feita esta requisição, pois precisasse do token do header disponível somente em <code>/sign-in</code>.
       <br><em> a. Caso a condicional de verdadeira é realizado uma requisição get com o valor do token no header e salvo os dados da resposta no local storage.</em></p>
   * `src/services/http/request.js`
    <blockquote> Este arquivo contém uma classe com configuração base para as requisições http</blockquote>
