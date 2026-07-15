# Bug Report - OrangeHRM

## Informações

- **ID:** BR-001
- **Projeto:** OrangeHRM Demo
- **Módulo:** Recuperação de Senha
- **Tipo:** Observação
- **Severidade:** Baixa
- **Prioridade:** Baixa

---

## Título

Fluxo de recuperação de senha retorna mensagem de sucesso para diferentes entradas informadas.

---

## Passos para reproduzir

1. Acessar a tela de login.
2. Clicar em **Forgot your password?**
3. Informar diferentes valores no campo Username, como:
   - usuário inexistente;
   - números;
   - caracteres especiais (`@@@@@`);
   - texto com mais de 100 caracteres.
4. Clicar em **Reset Password**.

---

## Resultado esperado

O sistema deve responder de acordo com as regras definidas para recuperação de senha, sem expor informações que comprometam a segurança dos usuários.

---

## Resultado obtido

Em todos os cenários testados foi exibida a mensagem:

> **"Reset Password link sent successfully"**

---

## Observação

Durante os testes não foi possível confirmar se esse comportamento faz parte da regra de negócio da aplicação ou se representa um defeito. O registro foi criado como observação para futura validação com a documentação do sistema ou com a equipe de desenvolvimento.
