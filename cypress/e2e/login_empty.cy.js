describe('Acessar o AdoPet',() => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  })
  it('Acesso sem dados', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  })
})
