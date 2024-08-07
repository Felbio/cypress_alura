describe('Acessar o AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
  });
  it('Clicar em "Cadastrar" sem preencher o formulário de cadastro', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    //or
    cy.get('form > :nth-child(5)').should('be.visible');

    cy.contains('Crie uma senha').should('be.visible');
    //or
    cy.get('form > :nth-child(8)').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
    //or
    cy.get('form > :nth-child(11)').should('be.visible');
  });
})