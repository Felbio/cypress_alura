Cypress.Commands.add('login', (email, password) => { 
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
 });

 Cypress.Commands.add('before',(site) =>{
  cy.visit(site);
  cy.get('[data-test="login-button"]').click();
 });

 Cypress.Commands.add('new_person', (site) => {
  cy.visit(site);
  cy.get('[data-test="register-button"]').click();
 });

 Cypress.Commands.add('register', (first_name, email, password, confirm_password) => {
    cy.get('[data-test="input-name"]').type(first_name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password);
    cy.get('[data-test="input-confirm-password"]').type(confirm_password);
    cy.get('[data-test="submit-button"]').click();
 })


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })