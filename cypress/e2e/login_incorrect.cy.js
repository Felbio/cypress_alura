describe('Acessar o AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  })
  it('Fazer login com dados invalidos',() => {
    cy.login('acadiano@gmail.com',"Senha1234");
    cy.get('[data-test="submit-button"]').click();
    cy.get('.error').should('be.visible');
    // cy.contains('Insira sua senha').should('be.visible');
  })
})