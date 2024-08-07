describe('Acessar o AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  });

  it('Fazer login com sucesso', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('felipe@felipe.com', 'Senha123');
  });
})