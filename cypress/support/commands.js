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
Cypress.Commands.add('selectProduct',(productName) => {
    cy.get('h4.card-title a').each((item,index,list) => {
        let productText = item.text()
        //cy.log(productText)
        if(productText === productName){
            cy.clickOnAddToCart(index)
        }
    })
})

Cypress.Commands.add('clickOnAddToCart',(index1) => {
    cy.get('button.btn-info').eq(index1).click()
})