# Testes de API - Conceitos, Ferramentas e Prática

## Introdução

Neste documento apresento meus conhecimentos sobre testes de API REST, abordando conceitos fundamentais, métodos HTTP, códigos de status, ferramentas utilizadas e exemplos de validações realizadas durante meus estudos em Qualidade de Software (QA).

O objetivo é demonstrar a aplicação de testes de API na validação da comunicação entre sistemas, garantindo que requisições e respostas estejam funcionando conforme esperado.

---

# O que é uma API REST?

Uma API REST (Representational State Transfer) permite que diferentes aplicações se comuniquem através de requisições HTTP.

APIs são utilizadas em sistemas web, aplicações mobile e integrações entre serviços.

Durante os testes, o QA valida se os endpoints retornam informações corretas, tratam erros adequadamente e seguem as regras definidas.

---

# Métodos HTTP

## GET

Utilizado para consultar informações.

Exemplo:

Consultar lista de usuários.

Validações:

- Retorno correto dos dados.
- Estrutura do JSON.
- Código HTTP esperado.

Resultado esperado:

**Status 200 OK**

---

## POST

Utilizado para criar novos registros.

Exemplo:

Cadastrar um novo usuário.

Validações:

- Campos obrigatórios.
- Formato dos dados enviados.
- Retorno da criação.

Resultado esperado:

**Status 201 Created**

---

## PUT

Utilizado para atualizar informações existentes.

Exemplo:

Alterar dados de um usuário.

Validações:

- Atualização correta dos dados.
- Persistência das alterações.

Resultado esperado:

**Status 200 OK**

---

## DELETE

Utilizado para remover registros.

Exemplo:

Excluir um usuário.

Validações:

- Confirmação da exclusão.
- Retorno da API.

Resultado esperado:

**Status 204 No Content**

---

# Códigos de Status HTTP

Durante os testes de API, é importante validar se o retorno está de acordo com o comportamento esperado.

| Código | Descrição |
|---|---|
| 200 OK | Requisição realizada com sucesso |
| 201 Created | Recurso criado com sucesso |
| 400 Bad Request | Dados enviados incorretamente |
| 401 Unauthorized | Usuário não autenticado |
| 403 Forbidden | Usuário sem permissão |
| 404 Not Found | Recurso não encontrado |
| 500 Internal Server Error | Erro interno do servidor |

---

# Ferramentas Utilizadas

## Swagger

Ferramenta utilizada para:

- Visualizar documentação da API.
- Conhecer endpoints disponíveis.
- Analisar parâmetros e respostas.
- Realizar testes diretamente pela interface.

---

## Postman

Ferramenta utilizada para testes manuais de API.

Com o Postman é possível:

- Criar requisições GET, POST, PUT e DELETE.
- Enviar dados no formato JSON.
- Configurar headers.
- Trabalhar com autenticação e tokens.
- Validar respostas da API.

---

# Cenários de Teste Realizados

## CT-API-001 - Consulta de usuários

**Objetivo:**

Validar retorno dos usuários cadastrados.

**Requisição:**

GET /usuarios

**Resultado esperado:**

- Retornar lista de usuários.
- Status 200 OK.

---

## CT-API-002 - Cadastro de usuário

**Objetivo:**

Validar criação de um novo usuário.

**Requisição:**

POST /usuarios

Body:

```json
{
 "nome": "Teste QA",
 "email": "teste@email.com"
}
