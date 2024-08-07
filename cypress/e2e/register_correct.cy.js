describe('Pagina de cadastro',() => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
  })
  
  it('Realizar o cadastro corretamente', () => {   
    cy.register('Felipe', 'felipe@felipe.com', 'Senha123', 'Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})