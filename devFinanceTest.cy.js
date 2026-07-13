describe('Testes funcionais - Dev Finance', () => {

  beforeEach(() => {
    // Acessa a aplicação antes de cada teste
    cy.visit('https://devfinance-agilizei.netlify.app/')
  })


  it('Deve permitir adicionar uma entrada financeira', () => {

    cy.get('#transaction .button')
      .click()

    cy.get('#description')
      .type('Salário')

    cy.get('#amount')
      .type('3000')

    cy.get('#date')
      .type('2026-07-13')

    cy.contains('Salvar')
      .click()

    cy.contains('Salário')
      .should('exist')
  })


  it('Deve validar cadastro sem descrição', () => {

    cy.get('#transaction .button')
      .click()

    cy.get('#amount')
      .type('100')

    cy.contains('Salvar')
      .click()

    cy.on('window:alert', (mensagem) => {
      expect(mensagem)
        .to.contains('Informe uma descrição')
    })

  })


  it('Deve verificar carregamento da aplicação', () => {

    cy.contains('Entradas')
      .should('be.visible')

    cy.contains('Saídas')
      .should('be.visible')

    cy.contains('Total')
      .should('be.visible')

  })

})
