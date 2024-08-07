describe('Acessar o AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400, 
    }).as('stubPost');
  })
  it('Fazer login com dados invalidos',() => {
    cy.login('acadiano@gmail.com',"Senha1234");
    cy.get('[data-test="submit-button"]').click();
    cy.get('.error').should('be.visible');
    // cy.contains('Insira sua senha').should('be.visible');
  })

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.login('felipe@felipe.com', 'Senha123');
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })
})