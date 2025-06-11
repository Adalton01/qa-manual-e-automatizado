Conhecimentos Básicos de MySQL
Este documento mostra o que eu, como desenvolvedor júnior, já aprendi sobre MySQL, que é um sistema de banco de dados para guardar e organizar informações.

O que é MySQL
MySQL é um programa que ajuda a guardar dados em um lugar organizado, usando a linguagem SQL para criar, ler, atualizar e apagar essas informações.

Tabelas
No MySQL, os dados ficam guardados dentro das tabelas. Cada tabela é como uma planilha, com linhas (cada linha é um registro) e colunas (cada coluna é um tipo de dado, como texto ou número).

Para criar uma tabela, usamos o comando CREATE TABLE. Um exemplo que já pratiquei foi:

sql
Copiar
Editar
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  data_cadastro DATE
);
Aqui, a tabela usuarios tem um id que é um número único para cada usuário, o nome e o email que são textos, e a data que o usuário foi cadastrado.

Comandos básicos que eu uso
SELECT: para consultar os dados.
Exemplo:

sql
Copiar
Editar
SELECT * FROM usuarios;
INSERT: para adicionar novos dados.
Exemplo:

sql
Copiar
Editar
INSERT INTO usuarios (nome, email) VALUES ('Adalton', 'meuemail@email.com');
UPDATE: para mudar dados que já estão na tabela.
Exemplo:

sql
Copiar
Editar
UPDATE usuarios SET email = 'novoemail@email.com' WHERE nome = 'Adalton';
DELETE: para apagar dados.
Exemplo:

sql
Copiar
Editar
DELETE FROM usuarios WHERE nome = 'Adalton';
Relacionando tabelas
Eu sei que para juntar informações de tabelas diferentes, usamos o JOIN. Por exemplo, para pegar pedidos junto com o nome do usuário:

sql
Copiar
Editar
SELECT pedidos.id, usuarios.nome  
FROM pedidos  
JOIN usuarios ON pedidos.usuario_id = usuarios.id;
Noções que estou aprendendo
Estou entendendo que a normalização serve para organizar os dados em tabelas separadas para evitar repetir informação e deixar tudo mais fácil de manter.
