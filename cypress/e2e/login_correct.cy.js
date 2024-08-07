describe('Acessar o AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  });

  it('Fazer login com sucesso', () => { 
    cy.login('felipe@felipe.com', 'Senha123');
  });
})