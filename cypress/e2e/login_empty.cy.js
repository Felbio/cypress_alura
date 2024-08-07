describe('Acessar o AdoPet',() => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400, 
    }).as('stubPost');
  })
  
  it('Acesso sem dados', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  })

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.login('felipe@felipe.com', 'Senha123');
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })
})
