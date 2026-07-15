# Casos de Teste - OrangeHRM

## CT001 - Login com campos vazios

**Objetivo:** Validar a obrigatoriedade dos campos de login.

**Passos:**
1. Acessar a tela de login.
2. Deixar os campos Username e Password vazios.
3. Clicar em **Login**.

**Resultado esperado:**
O sistema deve informar que ambos os campos são obrigatórios.

**Resultado obtido:**
O sistema exibiu a mensagem **"Required"** para os dois campos.

**Status:** ✅ Passou

---

## CT002 - Login com usuário inválido

**Objetivo:** Validar o comportamento para credenciais inválidas.

**Passos:**
1. Informar um usuário inexistente.
2. Informar uma senha qualquer.
3. Clicar em **Login**.

**Resultado esperado:**
O sistema deve impedir o acesso e exibir mensagem de erro.

**Resultado obtido:**
Foi exibida a mensagem **"Invalid credentials"** e os campos foram limpos.

**Status:** ✅ Passou

---

## CT003 - Login utilizando apenas espaços

**Objetivo:** Validar campos preenchidos apenas com espaços.

**Passos:**
1. Inserir somente espaços no Username.
2. Inserir somente espaços no Password.
3. Clicar em **Login**.

**Resultado esperado:**
O sistema deve tratar os campos como inválidos.

**Resultado obtido:**
Os campos foram considerados obrigatórios.

**Status:** ✅ Passou

---

## CT004 - Recuperação de senha

**Objetivo:** Validar o fluxo de recuperação de senha.

**Passos:**
1. Clicar em **Forgot your password?**
2. Informar um valor no campo Username.
3. Solicitar a redefinição.

**Resultado esperado:**
O sistema deve processar a solicitação conforme as regras da aplicação.

**Resultado obtido:**
Foi exibida a mensagem **"Reset Password link sent successfully"**.

**Status:** ✅ Passou

---

## CT005 - Navegação utilizando teclado

**Objetivo:** Validar a acessibilidade da tela.

**Passos:**
1. Navegar utilizando apenas a tecla **Tab**.

**Resultado esperado:**
O foco deve percorrer todos os elementos interativos.

**Resultado obtido:**
O foco percorreu Username, Password, Login, ícones das redes sociais, rodapé e retornou ao início da página.

**Status:** ✅ Passou

---

## CT006 - Copiar e colar nos campos

**Objetivo:** Validar o comportamento dos campos ao utilizar Ctrl+C e Ctrl+V.

**Passos:**
1. Testar copiar e colar no campo Username.
2. Repetir o procedimento no campo Password.

**Resultado esperado:**
Os campos devem responder conforme a política de segurança da aplicação.

**Resultado obtido:**
- Username permitiu copiar e colar.
- Password não permitiu copiar, mas permitiu colar conteúdo previamente copiado.

**Status:** ✅ Passou
