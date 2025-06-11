Testes de API - Conceitos, Ferramentas e Prática
Neste documento, apresento meu entendimento sobre testes de API REST, explicando os métodos HTTP mais usados, os principais códigos de status, e as ferramentas Swagger e Postman, que utilizo para explorar e testar endpoints. Todo o conteúdo é baseado nos conhecimentos que estudei e apliquei, com foco no que um QA Júnior precisa entender para garantir qualidade nas integrações de sistemas.

📌 O que é uma API REST?
Uma API REST (Representational State Transfer) permite que diferentes sistemas se comuniquem através da web, usando protocolos HTTP. É muito usada no desenvolvimento de aplicações modernas, como aplicativos web e mobile.

📡 Métodos HTTP mais usados:
GET: Busca informações do servidor (ex: listar usuários).

POST: Envia informações para criar um novo dado (ex: cadastrar um novo usuário).

PUT: Atualiza informações existentes (ex: editar dados de um usuário).

DELETE: Remove dados (ex: excluir um usuário).

Esses métodos são fundamentais para o funcionamento das APIs REST e devem ser testados com atenção, validando tanto o envio correto dos dados quanto as respostas do servidor.

🔢 Códigos de Status HTTP:
Durante os testes de API, é importante saber interpretar os códigos de retorno:

200 OK: Requisição bem-sucedida.

201 Created: Recurso criado com sucesso.

400 Bad Request: Erro na requisição (dados inválidos).

401 Unauthorized: Falta de autenticação.

403 Forbidden: Sem permissão para acessar o recurso.

404 Not Found: Rota ou recurso não encontrado.

500 Internal Server Error: Erro no servidor.

🛠️ Ferramentas que utilizo:
🔍 Swagger
Permite visualizar e testar as APIs diretamente no navegador.

Facilita entender a estrutura das requisições e respostas.

Ajuda a validar se a documentação da API está correta.

🚀 Postman
Ferramenta para testar manualmente APIs.

Com ela posso:

Criar requisições GET, POST, PUT, DELETE.

Enviar dados no body (JSON).

Adicionar headers e tokens de autenticação.

Visualizar e analisar a resposta da API.

Simular cenários de sucesso e erro.

🧪 O que costumo testar:
Respostas corretas de acordo com os dados enviados.

Se o código de status HTTP está adequado.

Mensagens de erro quando envio dados inválidos.

Requisições sem token (para testar segurança).

Campos obrigatórios ausentes.
