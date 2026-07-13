# Testes de Robustez

## 1. Introdução

Os testes de robustez têm como objetivo verificar como o sistema se comporta quando recebe entradas inválidas, inesperadas ou quando ocorre alguma situação fora do fluxo normal de utilização.

Diferente dos testes funcionais, que validam se o sistema realiza corretamente suas funcionalidades, os testes de robustez avaliam a capacidade da aplicação de lidar com erros sem apresentar falhas ou comportamentos inesperados.

---

## 2. Objetivo

Garantir que o sistema:

- Trate erros corretamente.
- Apresente mensagens claras ao usuário.
- Evite travamentos.
- Continue funcionando em situações adversas.

---

# 3. Cenários de Teste

## CT-RB001 - Campos obrigatórios não preenchidos

**Cenário:**

Usuário tenta realizar uma ação sem preencher informações obrigatórias.

**Resultado esperado:**

O sistema deve impedir a operação e informar quais campos precisam ser preenchidos.

**Status:**

Passou

---

## CT-RB002 - Entrada de dados inválidos

**Cenário:**

Usuário informa dados em formato incorreto.

Exemplos:

- Caracteres especiais.
- Dados fora do padrão esperado.

**Resultado esperado:**

O sistema deve validar as informações e apresentar mensagem de orientação.

**Status:**

Passou

---

## CT-RB003 - Grande volume de caracteres

**Cenário:**

Usuário informa uma quantidade de caracteres acima do limite permitido.

**Resultado esperado:**

O sistema deve limitar a entrada ou apresentar mensagem informando o limite permitido.

**Status:**

Passou

---

## CT-RB004 - Falha de comunicação com serviço externo

**Cenário:**

Sistema perde comunicação com uma API ou serviço externo.

**Resultado esperado:**

A aplicação deve informar o problema ao usuário e evitar perda de dados.

**Status:**

Não validado

---

# 4. Situações Avaliadas

Durante os testes de robustez podem ser analisados:

- Dados inválidos.
- Campos vazios.
- Limites de entrada.
- Falhas de integração.
- Tratamento de exceções.
- Mensagens de erro.

---

# 5. Importância dos Testes de Robustez

Esses testes ajudam a aumentar a confiabilidade do software, reduzindo riscos de falhas inesperadas e melhorando a experiência do usuário.

Um sistema preparado para situações de erro apresenta maior estabilidade e qualidade.

---

# 6. Conclusão

Os testes de robustez complementam os testes funcionais, permitindo avaliar não apenas se o sistema funciona corretamente, mas também como ele reage quando recebe informações incorretas ou enfrenta situações inesperadas.

Este documento faz parte dos estudos e práticas em Qualidade de Software (QA).
