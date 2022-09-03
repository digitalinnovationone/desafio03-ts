# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm start

#### Desafios
[ ] Incluir validação da senha no campo de login
  - Para logar, além do email faça a validação com a senha informada pelo usuário.
  - Durante a implementação, aplique o TDD e escreva os testes unitários para a nova validação

[ ] Implemente um sistema de login com a Context API
  - Seguindo os exemplos demonstrados ao longo do curso, crie um estado global para realizar o login
  - Utilize o localStorage para armazenar os dados do usuário ao logar
  - Caso os dados do usuário existam no localStorage, a tela de login não deve ser exibida

[ ] Crie uma página para exibir as informações do usuário
  - Crie uma página onde será exibido o nome, email
  - Esta página só poderá ser acessada caso a usuária esteja logada
  - Caso a usuária não esteja logada, deve ser mantida na página com a tela de login
  - Escreva os testes unitários para as funções criadas ou refatoradas.

[ ] Fazer o deploy no Netlify e compartilhar o link da página
