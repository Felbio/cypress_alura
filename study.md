`npx cypress open`

Modo Headless

`npx cypress run`
`npx cypress run --spec './cypress/e2e/login_incorrect.cy.js'`

Em 'cypress.config.js'
linha 10: 'video: true,'
videos/
-----------------------------------------------------------------------

Documentação em 'Cypress'

Mochawesome
Terminal:
`npm install --save-dev mochawesome`

Em 'cypress.config.js'
linha 11: 
          `reporter: 'mochawesome',
            reporterOptions: {
              reportDir:'cypress/results',
              overwrite: false,
              html: true,
              json: true,
              timestamp:"mmddyyyy_HHMMss"}
            }`


Terminal: 
`npx cypress run --reporter mochawesome`
`results/mochswesome_0000000000000`

-----------------------------------------------------------------------
Recurso Command = command.js

`Cypress.Commands.add('login', (email, password) => { 
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
 });`

chamada dentro do file .cy.js
`cy.login('acadiano@gmail.com',"Senha1234");`
