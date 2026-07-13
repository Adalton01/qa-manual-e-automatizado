# Relatório de Testes - Tela de Login

## 1. Informações do Teste

**Projeto:** Sistema de Login  
**Tipo de Teste:** Teste Funcional Manual  
**Responsável:** Adalton Leal Souza  
**Versão Testada:** 1.0  
**Ambiente de Teste:** Google Chrome - Windows 10  
**Data de execução:** Julho/2026  

---

## 2. Objetivo

Validar o funcionamento da tela de login, verificando o comportamento da aplicação em diferentes cenários de autenticação, incluindo entradas válidas, inválidas e campos obrigatórios.

---

## 3. Resumo dos Testes Executados

| Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|
| CT001 - Login com usuário e senha válidos | Usuário autenticado e direcionado para página principal | Login realizado com sucesso e acesso liberado | Passou | Funcionamento conforme esperado |
| CT002 - Login com senha inválida | Sistema deve bloquear acesso e apresentar mensagem de erro | Mensagem de erro apresentada corretamente | Passou | Validação funcionando |
| CT003 - Login com campos vazios | Sistema deve solicitar preenchimento dos campos obrigatórios | Solicitação de preenchimento exibida | Passou | Regras de validação aplicadas |
| CT004 - Login com usuário inválido | Sistema deve impedir autenticação e informar erro | Mensagem de erro exibida corretamente | Passou | Comportamento esperado |

---

## 4. Resultado Geral

Quantidade de casos de teste executados: **4**

Casos aprovados: **4**

Casos reprovados: **0**

Taxa de aprovação: **100%**

---

## 5. Defeitos Encontrados

Durante a execução dos testes não foram identificados defeitos críticos ou bloqueantes.

---

## 6. Conclusão

Os testes funcionais realizados na tela de login apresentaram resultados conforme esperado para os cenários avaliados.

A funcionalidade demonstrou comportamento adequado para autenticação de usuários, tratamento de credenciais inválidas e validação de campos obrigatórios.

Como melhoria futura, recomenda-se realizar testes complementares de compatibilidade em diferentes navegadores, dispositivos e testes de segurança relacionados ao processo de autenticação.

---

## 7. Evidências

As evidências dos testes podem ser anexadas ao projeto, incluindo:

- Capturas de tela dos cenários executados.
- Registros de execução.
- Documentação dos casos de teste.
- Relatórios de possíveis defeitos.
