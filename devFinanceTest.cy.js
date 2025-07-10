describe("Teste de aplicaçao ", () => {
  // Antes de cada teste, abre o site e limpa o armazenamento local para não ter dados salvos
  beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app/");
    cy.clearLocalStorage();
  });

  // Teste para adicionar um item novo e verificar se ele aparece na tabela
  it("Adiciona item", () => {
    cy.get("#transaction > .button").click(); // Clica no botão para abrir o formulário de nova transação
    cy.get("#description").type("Salario"); // Preenche a descrição da transação
    cy.get("#amount").type("1000"); // Preenche o valor da transação
    cy.get("#date").type("2023-10-01"); // Preenche a data da transação
    cy.get("button").contains("Salvar").click(); // Clica no botão salvar
    cy.get("tr > :nth-child(1)").should("contain", "Salario"); // Verifica se a descrição "Salario" apareceu na tabela
  });

  // Teste que adiciona vários itens usando a função auxiliar 'rapido'
  it("itens ", () => {
    rapido("Sabado", "1000", "2023-10-01");  // Adiciona transação "Sabado"
    rapido("Salario", "1000", "2023-10-01"); // Adiciona transação "Salario"
    rapido("Domingo", "-1000", "2023-10-01"); // Adiciona transação "Domingo" com valor negativo
  });

  // Teste para excluir uma transação específica
  it("Exclur", () => {
    rapido("Sabado", "1000", "2023-10-01");  // Adiciona transação "Sabado"
    rapido("Salario", "1000", "2023-10-01"); // Adiciona transação "Salario"
    rapido("Domingo", "-1000", "2023-10-01"); // Adiciona transação "Domingo"

    cy.get("tr").should("contain", "Salario"); // Confirma que a transação "Salario" está na tabela
    cy.get("tr").should("contain", "Sabado");  // Confirma que a transação "Sabado" está na tabela

    // Busca a linha que contém a descrição "Salario", acha a imagem do botão de excluir e clica nela
    cy.contains(".description", "Salario").parent("tr").find("img").click();
  });
});

// Função para facilitar a criação de novas transações, reutilizando o código para preencher o formulário
function rapido(descriçao, valor, data) {
  cy.get("#transaction > .button").click(); // Abre o formulário de nova transação
  cy.get("#description").type(descriçao);   // Preenche a descrição
  cy.get("#amount").type(valor);             // Preenche o valor
  cy.get("#date").type(data);                // Preenche a data
  cy.get("button").contains("Salvar").click(); // Salva a transação
}
