describe('Usage of traversal commands',() => {
    it('children command in cypress',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Open Menu').click()
        cy.get('.bm-item-list').children('a').should('have.length','4').and('contain.text','About').contains('Logout').click()                                          
    })
})