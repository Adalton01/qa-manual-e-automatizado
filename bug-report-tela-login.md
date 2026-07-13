# Bug Report - Tela de Login

## Informações do Bug

**ID:** BUG001  
**Título:** Sistema permite tentativa de login sem preenchimento dos campos obrigatórios  

**Projeto:** Sistema de Login  
**Tipo de Teste:** Teste Funcional Manual  
**Responsável pelo reporte:** Adalton Leal Souza  
**Ambiente:** Google Chrome - Windows 10  
**Data do reporte:** Julho/2026  

---

## Descrição do Problema

Durante a execução dos testes funcionais da tela de login, foi identificado um comportamento inesperado relacionado à validação dos campos obrigatórios.

Ao tentar realizar o login sem informar usuário e senha, o sistema não apresenta uma mensagem de validação adequada ao usuário.

---

## Passos para Reproduzir

1. Acessar a tela de login.
2. Deixar os campos de usuário e senha vazios.
3. Clicar no botão "Entrar".
4. Observar o comportamento apresentado pelo sistema.

---

## Resultado Esperado

O sistema deve impedir o envio do formulário e informar ao usuário que os campos obrigatórios precisam ser preenchidos.

Exemplo:

"Preencha todos os campos obrigatórios."

---

## Resultado Obtido

O sistema permite a tentativa de envio sem apresentar a validação esperada.

---

## Evidência

Adicionar posteriormente:

- Captura de tela do comportamento encontrado.
- Vídeo da execução do cenário de teste.

---

## Classificação

**Severidade:** Média

**Prioridade:** Alta

**Categoria:** Validação de campos

---

## Status do Bug

Aberto

---

## Observação

A correção desse problema melhora a experiência do usuário e evita tentativas de autenticação com informações incompletas.
