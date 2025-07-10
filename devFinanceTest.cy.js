// Descreve o conjunto de testes para a aplicação Dev Finance
describe("Teste de aplicaçao ", () => {

  // Antes de cada teste, acessa o site e limpa o armazenamento local para garantir que comece limpo
  beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app/"); // Acessa o site
    cy.clearLocalStorage(); // Limpa dados salvos anteriormente
  });

  // Primeiro teste: adiciona uma transação
  it("Adiciona item", () => {
    cy.get("#transaction > .button").click(); // Clica no botão de nova transação
    cy.get("#description").type("Salario"); // Digita a descrição 'Salario'
    cy.get("#amount").type("1000"); // Digita o valor
    cy.get("#date").type("2023-10-01"); // Digita a data
    cy.get("button").contains("Salvar").click(); // Clica no botão salvar
    // Verifica se na tabela existe uma linha com o texto 'Salario'
    cy.get("tr > :nth-child(1)").should("contain", "Salario");
  });

  // Segundo teste: adiciona múltiplos itens usando a função rápido
  it("itens ", () => {
    rapido("Sabado", "1000", "2023-10-01"); // Adiciona item 'Sabado'
    rapido("Salario", "1000", "2023-10-01"); // Adiciona item 'Salario'
    rapido("Domingo", "-1000", "2023-10-01"); // Adiciona item 'Domingo' com valor negativo
  });

  // Terceiro teste: exclui um item específico
  it("Exclur", () => {
    // Adiciona 3 itens antes de excluir
    rapido("Sabado", "1000", "2023-10-01");
    rapido("Salario", "1000", "2023-10-01");
    rapido("Domingo", "-1000", "2023-10-01");

    // Verifica se os itens foram adicionados na tabela
    cy.get("tr").should("contain", "Salario");
    cy.get("tr").should("contain", "Sabado");

    // Localiza a linha que contém 'Salario' e clica na lixeira para r
