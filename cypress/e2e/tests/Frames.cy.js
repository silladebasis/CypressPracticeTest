import 'cypress-iframe'
describe('Frames',() => {
    it('frames test',() => {
        cy.visit('/')
        cy.viewport(1920,1080)
        cy.get('#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().type('admin')
        cy.get('.login-button').contains('Log in').click()
        cy.visit('/Admin/Category/Create')
        // cy.get('#Description_ifr').then(($iframe) => {
        //     let iframe = $iframe.contents().find('#tinymce p')
        //     cy.wrap(iframe).type('Hello Cypress')
        // })
        cy.get('#Description_ifr').within(($iframe) => {
            const frame = $iframe.contents().find('#tinymce p')
            cy.wrap(frame).type('Hello Debasis')
        })
    })
})