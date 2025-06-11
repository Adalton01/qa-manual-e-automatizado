Caso de Testes - Tela de Login
ID: CT001
Título: Testar funcionalidade da tela de login
Objetivo: Verificar se o usuário consegue acessar o sistema usando credenciais válidas e receber mensagens de erro apropriadas para entradas inválidas.
Pré-condições: O usuário deve estar na página de login do sistema.
Passos para testar:

Acessar a página de login.

Inserir usuário válido e senha válida.

Clicar no botão "Entrar".

Verificar se o sistema direciona para a página principal.

Voltar para a página de login.

Inserir usuário inválido e senha válida.

Clicar no botão "Entrar".

Verificar se aparece mensagem de erro "Usuário ou senha inválidos".

Inserir usuário válido e senha inválida.

Clicar no botão "Entrar".

Verificar se aparece mensagem de erro "Usuário ou senha inválidos".

Deixar campos vazios e clicar em "Entrar".

Verificar se aparece mensagem "Preencha todos os campos".

Resultado esperado:

Usuário válido e senha correta entram no sistema.

Usuário ou senha inválidos geram mensagem de erro.

Campos vazios solicitam preenchimento.

Resultado obtido:

O sistema permitiu o login com usuário válido e senha correta e redirecionou para a página principal.

Status:

Passou
