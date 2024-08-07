describe('Acessar o AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })
  it('Confirmar existencia de imagens', () => {
    cy.get('.cards').should('be.visible');   
  })
})