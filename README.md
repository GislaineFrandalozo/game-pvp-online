# #️ game-pvp-online 

 :octocat: Este projeto foi desenvolvido exclusivamente para fins didáticos.
 
> ### 📌 Descrição
> Este projeto é a parte que compõe o **front end** de uma aplicação de **jogo da velha** online de jogador contra jogador. **A aplicação ainda está em desenvolvimento** neste documento contém todas as tarefas já desenvolvidas, ferramentas utilizadas e como rodar o projeto na sua máquina local. 

### Prototipagem do projeto

> Criei uma prototipagem com navegação no figma, você pode conferir neste <a href="https://www.figma.com/proto/VjizyrMRyKOgVPNUG646Ah/prototype_game_hash?node-id=3%3A37&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A37">link</a>.

### ✨ Tecnologias utilizadas

<a href="https://pt-br.reactjs.org/"><img src="https://img.shields.io/badge/react-v17-blue"></a> <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/react--router--dom-v6-informational"></a> <a href="https://react-bootstrap.github.io/"><img src="https://img.shields.io/badge/react--bootstrap-v2-9cf"></a> <a href="https://axios-http.com/"><img src="https://img.shields.io/badge/axios-v0.25-ff69b4"></a> <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/bootstrap-v5-blueviolet"></a> 

### ✔️ Tarefas concluídas

  - Layout página de cadastro e login.
  - Validação do formulário.
  - Integração com back end completa na página de cadastro e login.
  - Feedback completo para os usuários, com recursos de redirecionamento.
  - Informações do usuário salvo na local storage.
  
### 🔥 Iniciando o projeto

> #### Servidor (back end)
> Primeiro você vai precisar **rodar o servidor na sua rede local**. Abaixo o link do projeto, no readme do mesmo você irá encontrar a descrição de como rodar em sua máquina.
> [Clique aqui.](https://github.com/Muriel-Gasparini/flash-chat-io-be)

(Nos passos seguintes eu já suponho que você esteja com o node e o yarn instalados na usa máquina).

- 👍 Servidor rodando abra este projeto no terminal e digite:
  *  `$ yarn`
  *  `$ yarn start`

Pronto! O projeto irá abrir no endereço <a href="http://localhost:3000/">http://localhost:3000/</a> utilizando seu navegador padrão!

### Utilizando a aplicação

 #### Como um usuário:

  1. Acesse <a href="http://localhost:3000/sign-up">http://localhost:3000/sign-up</a>. Realize um cadastro na aplicação (todos os campos são obrigatórios). 
  2. Caso tudo esteja correto você será redirecionado para o login. Caso algum campo esteja incorreto você receberá notificações a respeito do que pode estar errado.
  3. Depois de criado o cadastro realize login para se autenticar no servidor.
  4. Caso as credenciais estejam corretas você será redirecionado para página inicial do jogo, porém, está ainda está em processo de desenvolvimento, seus dados são estáticos e não há nenhuma funcionalidade desenvolvida.
