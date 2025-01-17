describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  })
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('felipe@felipe.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})