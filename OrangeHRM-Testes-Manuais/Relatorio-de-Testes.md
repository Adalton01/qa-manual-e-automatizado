# Relatório de Testes - OrangeHRM

## Informações Gerais

- **Projeto:** OrangeHRM Demo
- **Módulo testado:** Tela de Login
- **Tipo de teste:** Testes Manuais
- **Testador:** Adalton
- **Navegador:** Google Chrome
- **Plataforma:** Web

---

## Resumo da Execução

| Caso de Teste | Resultado |
|---------------|-----------|
| CT001 - Campos vazios | ✅ Passou |
| CT002 - Login inválido | ✅ Passou |
| CT003 - Campos com espaços | ✅ Passou |
| CT004 - Recuperação de senha | ✅ Passou |
| CT005 - Navegação por teclado | ✅ Passou |
| CT006 - Copiar e colar | ✅ Passou |

---

## Observações

Durante a execução dos testes foram observados os seguintes comportamentos:

- O sistema apresenta mensagens de validação para campos obrigatórios.
- Credenciais inválidas exibem a mensagem **"Invalid credentials"**.
- Após tentativa de login inválida, os campos são limpos.
- O fluxo de recuperação de senha exibiu a mensagem **"Reset Password link sent successfully"** para diferentes tipos de entrada testados.
- A navegação por teclado funcionou corretamente entre os elementos interativos.
- O campo **Password** não permitiu copiar o conteúdo utilizando **Ctrl + C**, porém permitiu colar conteúdo previamente copiado.

---

## Conclusão

Os cenários planejados para a tela de login foram executados com sucesso. O sistema apresentou comportamento consistente durante os testes realizados. Os comportamentos observados devem ser avaliados conforme os requisitos da aplicação antes de serem classificados como defeitos.
