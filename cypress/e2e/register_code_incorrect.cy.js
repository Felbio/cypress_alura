describe('', () => {
  it('', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"').type('Julios');
    cy.get('input[name="email"]').type('julios@cesar.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    // cy.contains('button', 'Cadastrar').click();
    cy.get('[data-test="submit-button"]').click();
    // cy.get('[data-test="submit-button"]').click();

  })
})